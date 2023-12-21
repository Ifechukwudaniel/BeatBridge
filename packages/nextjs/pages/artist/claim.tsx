import Head from "next/head";
import type { NextPage } from "next";
import { Footer } from "~~/components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ARTIST | BEAT BRIDGE</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>
      <section className="bg-[#000000]"></section>
      <Footer />
    </>
  );
};

export default Home;
