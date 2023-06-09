import React from "react";
import type { NextPage } from "next";

const Login: NextPage = () => {
  const CLIENT_ID = "525e0c2a09354f818028a87530ddcdb1";
  const REDIRECT_URI = "http://localhost:3000/dashboard";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div className="flex items-center justify-center h-screen">
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
        Login to Spotify
      </a>
    </div>
  );
};

export default Login;
