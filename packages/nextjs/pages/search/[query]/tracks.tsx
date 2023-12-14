import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Heading from "~~/components/spotify/Heading";
import Layout from "~~/components/spotify/Layout";
import TracksTable from "~~/components/spotify/TracksTable";
import { MySession } from "~~/types/session";
import { Track } from "~~/types/spotify";
import { customGet } from "~~/utils/beat-bridge/customGet";
import { isAuthenticated } from "~~/utils/beat-bridge/isAuthenticated";

interface IProps {
  query: string;
  searchTracks: {
    tracks: {
      items: Track[];
    };
  };
}

export default function SearchTracks({ query, searchTracks }: IProps) {
  return (
    <Layout title="Spotify - Search">
      <Heading text={`All songs for ${query}`} />
      <TracksTable tracks={searchTracks?.tracks.items} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = (await getSession(ctx)) as MySession | null;

  if (!(await isAuthenticated(session))) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const query = ctx.params?.query;
  const searchTracks = await customGet(
    `https://api.spotify.com/v1/search?q=${query}&market=from_token&type=track&limit=50`,
    session,
  );
  return { props: { query, searchTracks } };
};
