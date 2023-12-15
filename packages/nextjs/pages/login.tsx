import { signIn } from "next-auth/react";

export default function Login() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000/dashboard/artists" });
  };

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center h-screen"
      style={{ backgroundImage: `url("/assets/bg.png")`, backgroundColor: "#00011e" }}
    >
      <button className="bg-[#9DFF94] py-4 px-8 font-bold rounded-full text-black" onClick={handleLogin}>
        Login to Spotify
      </button>
    </div>
  );
}
