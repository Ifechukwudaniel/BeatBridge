import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import DashboardLayout from "~~/components/dashboard/DashboardLayout";
import ArtistList from "~~/components/spotify/ArtistList";
import Heading from "~~/components/spotify/Heading";
import Layout from "~~/components/spotify/Layout";
import { MySession } from "~~/types/session";
import { Artist } from "~~/types/spotify";
import { customGet } from "~~/utils/beat-bridge/customGet";
import { isAuthenticated } from "~~/utils/beat-bridge/isAuthenticated";

interface IProps {
  followedArtists: Artist[];
}

export default function FollowedArtists({ followedArtists }: IProps) {
  return (
    <Layout title="Beat Bridge - Your Library">
      <DashboardLayout>
        <Heading text="Your Artists" />
        <ArtistList artists={followedArtists} />
      </DashboardLayout>
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

  const followedArtists = await customGet(`https://api.spotify.com/v1/me/following?type=artist&limit=50`, session);
  console.log(followedArtists);

  return { props: { followedArtists: followedArtists.artists.items } };
};
