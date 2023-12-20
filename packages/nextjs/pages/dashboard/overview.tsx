import { useState } from "react";
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
  topArtists: Artist[];
}

export default function FollowedArtists({ topArtists }: IProps) {
  const [timeRange, setTimeRange] = useState("short_term");

  return (
    <Layout title="Beat Bridge - Your Library">
      <DashboardLayout>
        <Heading text="Your Artists" />
        <select
          name="time-range"
          onChange={e => setTimeRange(e.target.value)}
          className="mx-2 pr-1 bg-transparent border-none rounded cursor-pointer text-base p-2 "
        >
          <option className="text-black" value="short_term">
            the last 4 weeks
          </option>
          <option className="text-black" value="medium_term">
            the last 6 months
          </option>
          <option className="text-black" value="long_term">
            all time
          </option>
        </select>
        <ArtistList artists={topArtists} />
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

  const timeRange = ctx.query.time_range || "short_term";

  const topArtists = await customGet(
    `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=50`,
    session,
  );

  return { props: { topArtists: topArtists.items } };
};
