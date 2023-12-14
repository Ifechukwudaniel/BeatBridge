import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import DashboardLayout from "~~/components/dashboard/DashboardLayout";
import CardItem from "~~/components/spotify/CardItem";
import CardItemGrid from "~~/components/spotify/CardItemGrid";
import Heading from "~~/components/spotify/Heading";
import Layout from "~~/components/spotify/Layout";
import { MySession } from "~~/types/session";
import "~~/types/spotify";
import { Category } from "~~/types/spotify";
import { customGet } from "~~/utils/beat-bridge/customGet";
import { isAuthenticated } from "~~/utils/beat-bridge/isAuthenticated";

interface IProps {
  categories: {
    categories: {
      items: Category[];
    };
  };
}

export default function Search({ categories }: IProps) {
  return (
    <DashboardLayout>
      <Layout title="BeatBridge - Search">
        <Heading text="Browse Categories" />

        <CardItemGrid>
          {categories?.categories.items.map((category: { id: string; name: string; icons: any }) => (
            <CardItem
              key={category.id}
              altTitle={category.name}
              heading={category.name}
              id={category.id}
              images={category.icons}
              type="genre"
            />
          ))}
        </CardItemGrid>
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

  const categories = await customGet("https://api.spotify.com/v1/browse/categories?limit=50&country=IN", session);
  return { props: { categories } };
};
