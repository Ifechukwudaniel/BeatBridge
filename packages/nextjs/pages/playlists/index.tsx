import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import DashboardLayout from "~~/components/dashboard/DashboardLayout";
import Heading from "~~/components/spotify/Heading";
import Layout from "~~/components/spotify/Layout";
import PlaylistList from "~~/components/spotify/PlaylistList";
import { MySession } from "~~/types/session";
import { PlaylistType } from "~~/types/spotify";
import { customGet } from "~~/utils/beat-bridge/customGet";
import { isAuthenticated } from "~~/utils/beat-bridge/isAuthenticated";

interface IProps {
  userPlaylist: PlaylistType[];
}

export default function FollowedArtists({ userPlaylist }: IProps) {
  return (
    <DashboardLayout>
      <Layout title="Beat Bridge - Your Playlist">
        <Heading text="Your Playlist" />
        <PlaylistList playlists={userPlaylist} />
      </Layout>
    </DashboardLayout>
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

  const userPlaylist = await customGet(`https://api.spotify.com/v1/me/playlists?limit=50`, session);

  return { props: { userPlaylist: userPlaylist.items } };
};
