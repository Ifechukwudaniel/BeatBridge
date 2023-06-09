import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

// Import the background image

const Login = () => {
  const CLIENT_ID = "525e0c2a09354f818028a87530ddcdb1";
  const REDIRECT_URI = "http://localhost:3000/dashboard";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to the admin dashboard if the user is already authenticated
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  /* const handleLogin = () => {
    signIn("spotify");
  }; */

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center h-screen"
      style={{ backgroundImage: `url("/assets/bg.png")`, backgroundColor: "#1A202C" }}
    >
      <Link
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        className="bg-[#9DFF94] py-4 px-8 font-bold rounded-full text-black"
      >
        Login to Spotify
      </Link>
      {/*       <button onClick={handleLogin}>Log in with Spotify</button>
       */}{" "}
    </div>
  );
};

export default Login;
