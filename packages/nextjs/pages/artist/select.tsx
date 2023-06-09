import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ARTIST | BEAT BRIDGE</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>
      <section
        className="flex items-center justify-center bg-cover bg-center h-screen"
        style={{ backgroundImage: `url("/assets/bg.png")`, backgroundColor: "#1A202C" }}
      >
        Drake SZA
      </section>
    </>
  );
};

export default Home;
