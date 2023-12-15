import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import DashboardLayout from "~~/components/dashboard/DashboardLayout";
import Heading from "~~/components/spotify/Heading";
import Layout from "~~/components/spotify/Layout";
import { MySession } from "~~/types/session";
import { PlaylistType } from "~~/types/spotify";
import { isAuthenticated } from "~~/utils/beat-bridge/isAuthenticated";

interface IProps {
  userPlaylist: PlaylistType[];
}

export default function FollowedArtists({ userPlaylist }: IProps) {
  console.log(userPlaylist);
  return (
    <DashboardLayout>
      <Layout title="Beat Bridge - Your Wrapped">
        <Heading text="Your Wrapped" />
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

  return { props: { userPlaylist: [] } };
};
