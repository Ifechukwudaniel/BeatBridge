import { useEffect, useState } from "react";
import { customGet } from "../../utils/beat-bridge/customGet";
import { isAuthenticated } from "../../utils/beat-bridge/isAuthenticated";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import DashboardLayout from "~~/components/dashboard/DashboardLayout";
import Heading from "~~/components/spotify/Heading";
import Layout from "~~/components/spotify/Layout";
import PlaylistList from "~~/components/spotify/PlaylistList";
import { MySession } from "~~/types/session";
import { PlaylistType } from "~~/types/spotify";

interface IProps {
  categoryName?: string;
  playlists: {
    items: PlaylistType[];
  };
}

export default function CategoryPlaylists({ categoryName, playlists }: IProps) {
  const [capitalizedCategory, setCapitalizedCategory] = useState("");

  useEffect(() => {
    if (categoryName) {
      const afterName = categoryName
        .split(" ")
        .map(i => i[0].toUpperCase() + i.slice(1))
        .join(" ");
      setCapitalizedCategory(afterName);
    }
  }, [categoryName]);

  return (
    <DashboardLayout>
      <Layout title={`Beat Bridge - ${capitalizedCategory}`}>
        <Heading text={categoryName || ""} className="capitalize" />
        <PlaylistList playlists={playlists?.items} />
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

  const categoryId = ctx.params?.category;
  const category = await customGet(`https://api.spotify.com/v1/browse/categories/${categoryId}`, session);
  const playlists = await customGet(
    `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists?limit=50`,
    session,
  );

  const categoryName = category.name?.toString().split("_").join(" ") || "";

  console.log(playlists.playlists);
  return { props: { categoryName, playlists: playlists.playlists } };
};
