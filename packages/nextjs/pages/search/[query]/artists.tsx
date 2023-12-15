import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import ArtistList from "~~/components/spotify/ArtistList";
import Heading from "~~/components/spotify/Heading";
import Layout from "~~/components/spotify/Layout";
import { MySession } from "~~/types/session";
import { Artist } from "~~/types/spotify";
import { customGet } from "~~/utils/beat-bridge/customGet";
import { isAuthenticated } from "~~/utils/beat-bridge/isAuthenticated";

interface IProps {
  query: string;
  searchArtists: {
    artists: {
      items: Artist[];
    };
  };
}

export default function SearchArtists({ query, searchArtists }: IProps) {
  return (
    <Layout title="Spotify - Search">
      <Heading text={`All artists for "${query}"`} />
      <ArtistList artists={searchArtists.artists.items} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = (await getSession(ctx)) as MySession;

  if (!(await isAuthenticated(session))) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const query = ctx.params?.query;
  const searchArtists = await customGet(
    `https://api.spotify.com/v1/search?q=${query}&market=from_token&type=artist&limit=50`,
    session,
  );
  return { props: { query, searchArtists } };
};
