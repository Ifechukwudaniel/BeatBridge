import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
});

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      scope: "user-read-email user-read-private",
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === "spotify") {
        // Get the access token and refresh token
        const { accessToken, refreshToken } = account;

        // Use the access token to authenticate requests to Spotify API
        spotifyApi.setAccessToken(accessToken);
        spotifyApi.setRefreshToken(refreshToken);

        // Use the Spotify Web API to get the user's profile
        const { body: userProfile } = await spotifyApi.getMe();

        // Check if the user is the admin
        const isAdmin = userProfile.id === process.env.ADMIN_SPOTIFY_USER_ID;

        // Return additional data to be stored in the user session
        return {
          ...user,
          profile,
          isAdmin,
        };
      }
    },
  },
});
