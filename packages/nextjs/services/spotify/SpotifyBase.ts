import { HttpBase } from "../http";

class SpotifyBase extends HttpBase {
  constructor() {
    super("https://api.spotify.com/v1");
  }
}

export default new SpotifyBase();
