import { HttpBase } from "../http";
import { MySession } from "~~/types/session";

class SpotifyBase extends HttpBase {
  constructor(bearerToken = "") {
    super("https://api.spotify.com/v1");
    this.setHeaders({
      Authorization: `Bearer ${bearerToken}`,
    });
  }

  setBearerToken(session: MySession | null) {
    if (session == null) {
      this.setHeaders({
        Authorization: "",
      });
      return;
    }
    this.setHeaders({
      Authorization: `Bearer ${session?.user.accessToken}`,
    });
  }

  public getAllPlaylists(limit = 50, offset = 0) {
    return this.get(`/me/playlists?limit=${limit}&offset=${offset}`);
  }

  public getPlaylist(playlistId: string) {
    return this.get(`/playlists/${playlistId}`);
  }
}

export default SpotifyBase;
