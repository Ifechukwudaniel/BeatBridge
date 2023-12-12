import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import SpotifyBase from "~~/services/spotify/SpotifyBase";
import { MySession } from "~~/types/session";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = (await getSession({ req })) as MySession | null;

  if (session == null) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const spotifyInstance = new SpotifyBase();
  spotifyInstance.setBearerToken(session);

  const playlists = await spotifyInstance.getAllPlaylists();
  console.log(playlists);

  res.status(200).json([]);
}
