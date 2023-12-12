import { HttpError } from "./HttpError";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { merge } from "lodash";
import { Result, err, ok } from "neverthrow";

export class HttpBase {
  protected urlBase = "/api";
  protected axiosInstance: AxiosInstance;

  /**
   * Creates a new service instance.
   * @param path A base path for all requests this service will make. Defaults to `/api`.
   */
  public constructor(path?: string) {
    this.urlBase = path ?? "/api";
    this.axiosInstance = axios.create();
  }

  /**
   * Returns a new instance of the base config for all requests this service makes.
   * @protected
   */
  protected getConfig(): AxiosRequestConfig {
    return {
      headers: {},
    };
  }

  /**
   * Set the default headers for all requests this service makes.
   * @param headers A config object to merge onto the base config.
   * @protected
   */
  protected setHeaders(headers: Record<string, string>) {
    this.axiosInstance.defaults.headers = merge(this.axiosInstance.defaults.headers, headers);
  }

  /**
   * Make a GET request.
   * @param path A path to append to the base url.
   * @param configOverrides A config object to merge onto the base config.
   * @protected
   */
  async get<T>(path = "", configOverrides: AxiosRequestConfig | undefined = undefined): Promise<Result<T, HttpError>> {
    return await this.requestResultWrapper<T>(path, configOverrides, (fullPath, config) => {
      return this.axiosInstance.get(fullPath, config);
    });
  }

  /**
   * Make a POST request.
   * @param path A path to append to the base url.
   * @param data Optional data to send with the request.
   * @param configOverrides A config object to merge onto the base config.
   * @protected
   */
  async post<T>(
    path = "",
    data: unknown = undefined,
    configOverrides: AxiosRequestConfig | undefined = undefined,
  ): Promise<Result<T, HttpError>> {
    return await this.requestResultWrapper<T>(path, configOverrides, (fullPath, config) => {
      return this.axiosInstance.post(fullPath, data, config);
    });
  }

  /**
   * Make a PUT request.
   * @param path A path to append to the base url.
   * @param data Optional data to send with the request.
   * @param configOverrides A config object to merge onto the base config.
   * @protected
   */
  async put<T>(
    path = "",
    data: unknown = undefined,
    configOverrides: AxiosRequestConfig | undefined = undefined,
  ): Promise<Result<T, HttpError>> {
    return await this.requestResultWrapper<T>(path, configOverrides, (fullPath, config) => {
      return this.axiosInstance.put(fullPath, data, config);
    });
  }

  /**
   * Make a PATCH request.
   * @param path A path to append to the base url.
   * @param data Optional data to send with the request.
   * @param configOverrides A config object to merge onto the base config.
   * @protected
   */
  protected async patch<T>(
    path = "",
    data: unknown = undefined,
    configOverrides: AxiosRequestConfig | undefined = undefined,
  ): Promise<Result<T, HttpError>> {
    return await this.requestResultWrapper<T>(path, configOverrides, (fullPath, config) => {
      return this.axiosInstance.patch(fullPath, data, config);
    });
  }

  /**
   * Make a DELETE request.
   * @param path A path to append to the base url.
   * @param configOverrides A config object to merge onto the base config.
   * @protected
   */
  protected async delete<T>(
    path = "",
    configOverrides: AxiosRequestConfig | undefined = undefined,
  ): Promise<Result<T, HttpError>> {
    return await this.requestResultWrapper<T>(path, configOverrides, (fullPath, config) => {
      return this.axiosInstance.delete(fullPath, config);
    });
  }

  private async requestResultWrapper<T>(
    subPath: string,
    configOverrides: AxiosRequestConfig | undefined,
    request: (fullPath: string, config: AxiosRequestConfig | undefined) => Promise<{ data: unknown } | null>,
  ): Promise<Result<T, HttpError>> {
    if (subPath.length > 0 && subPath[0] !== "/") subPath = `/${subPath}`;
    const config = merge(this.getConfig() || {}, configOverrides || {});
    try {
      const responseData: T = (await request(`${this.urlBase}${subPath}`, config))?.data as T;
      return ok(responseData);
    } catch (e) {
      return err(new HttpError(e));
    }
  }
}
