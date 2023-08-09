import Head from "next/head";
import type { NextPage } from "next";
import { Clients, Contact, Hero, HomeFooter, HomeHeader, Services, Team } from "~~/components/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beat Bridge</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&family=Abhaya+Libre:wght@800&family=Acme&family=Bakbak+One&family=Baloo+Bhai+2:wght@400;800&family=Changa&family=Martel+Sans:wght@700&family=Red+Hat+Display:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <section data-theme="home">
        <HomeHeader />
        <Hero />
        <Services />
        <Clients />
        <Team />
        <Contact />
        <HomeFooter />
      </section>
    </>
  );
};

export default Home;
