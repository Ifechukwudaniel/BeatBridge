import { MySession } from "~~/types/session";

export const customGet = async (url: string, session: MySession | null) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken || ""}`,
    },
  }).then(res => res.json());

  return res;
};
