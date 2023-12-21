import Layout from "../../components/spotify/Layout";
import TracksTable from "../../components/spotify/TracksTable";
import { PlaylistType } from "../../types/spotify";
import { customGet } from "../../utils/beat-bridge/customGet";
import { isAuthenticated } from "../../utils/beat-bridge/isAuthenticated";
import parse from "html-react-parser";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { RiMusic2Fill } from "react-icons/ri";
import DashboardLayout from "~~/components/dashboard/DashboardLayout";
import { MySession } from "~~/types/session";

interface IProps {
  playlist: PlaylistType;
}

export default function Playlist({ playlist }: IProps) {
  return (
    <DashboardLayout>
      <Layout title={`Beat Bridge - ${playlist?.name}`}>
        <div className="bg-[#00011e] rounded-lg p-6 md:p-12">
          <div className="flex items-end gap-6">
            {playlist && (
              <>
                {playlist.images && playlist.images?.length > 0 ? (
                  <img
                    src={playlist.images[0].url || ""}
                    alt={playlist.name}
                    className="object-contain w-60 h-60 rounded-lg "
                  />
                ) : (
                  <div className="w-full h-40">
                    <RiMusic2Fill className="w-full h-full bg-paper " />
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  <h5 className="text-xs font-bold uppercase">{playlist.type}</h5>
                  <h2 className="text-5xl font-bold">{playlist.name}</h2>

                  <p className="w-full text-xs leading-5">{parse(playlist.description || "Playlist")}</p>

                  <div className="flex items-center gap-5 text-sm">
                    <span className="font-bold">{playlist.owner?.display_name}</span>
                    {playlist?.followers?.total ? (
                      playlist?.followers?.total > 0 && (
                        <span className="text-gray">
                          {playlist.followers?.total.toLocaleString()}{" "}
                          {playlist.followers?.total > 1 ? "likes" : "like"}
                        </span>
                      )
                    ) : (
                      <span className="text-gray">0 likes</span>
                    )}
                    {playlist?.tracks?.items && playlist?.tracks?.items?.length > 0 && (
                      <span className="text-gray">{playlist.tracks.total.toLocaleString()} songs</span>
                    )}
                  </div>
                  <button className="bg-[#9DFF94] text-black px-8 py-2 rounded-full">Mint</button>
                </div>
              </>
            )}
          </div>

          <div className="mt-5">
            <TracksTable
              tracks={
                playlist?.tracks?.items
                  ? playlist.tracks.items.filter(item => item.track !== null).map(item => item.track)
                  : []
              }
            />
          </div>
        </div>
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

  const playlistId = ctx.params?.playlistId;
  const playlist = await customGet(`https://api.spotify.com/v1/playlists/${playlistId}`, session);

  return { props: { playlist: playlist } };
};
