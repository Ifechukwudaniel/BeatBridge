import { Fragment } from "react";
import Link from "next/link";
import { useSpotify } from "../../../context/SpotifyContext";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import DashboardLayout from "~~/components/dashboard/DashboardLayout";
import AlbumList from "~~/components/spotify/AlbumList";
import ArtistList from "~~/components/spotify/ArtistList";
import Heading from "~~/components/spotify/Heading";
import Layout from "~~/components/spotify/Layout";
import PlaylistList from "~~/components/spotify/PlaylistList";
import { MySession } from "~~/types/session";
import { SearchResults, Track } from "~~/types/spotify";
import { customGet } from "~~/utils/beat-bridge/customGet";
import { fmtMSS } from "~~/utils/beat-bridge/formatDuration";
import { isAuthenticated } from "~~/utils/beat-bridge/isAuthenticated";

interface IProps {
  query: string;
  searchResults: SearchResults;
}

export default function Search({ query, searchResults }: IProps) {
  const { setCurrentTrack } = useSpotify();

  const playTrack = (track: Track) => {
    if (track.preview_url) {
      setCurrentTrack(track);
    }
  };

  return (
    <DashboardLayout>
      <Layout title="Beatbridge - Discover">
        {searchResults && (
          <>
            <div className="mt-5">
              <Link href={`/search/${query}/tracks`}>
                <Heading text="Songs" />
              </Link>

              {searchResults.tracks?.items?.slice(0, 5).map(track => (
                <div
                  className={`grid grid-cols-12 col-span-12 p-1 ${!track.preview_url ? "opacity-50" : ""}`}
                  key={track.id}
                >
                  <div className="flex items-center w-full col-span-11 my-3">
                    <div className="flex items-center w-full gap-4">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          src={(track.album?.images && track.album.images[0].url) || ""}
                          alt={track.name}
                          className="object-contain w-10 h-10"
                        />
                      </div>

                      <div className="w-full">
                        <div
                          className={`w-10/12 text-sm font-medium truncate ${
                            track.preview_url ? "cursor-pointer hover:underline" : "cursor-default"
                          }`}
                          onClick={() => playTrack(track)}
                        >
                          {track.name}
                        </div>

                        <div className="flex flex-wrap items-center w-10/12 gap-1 text-sm text-gray">
                          <span className="truncate ">
                            {track.artists.map((artist, index) => (
                              <Link key={artist.id} href={`/artist/${artist.id}`}>
                                <span className="hover:text-white hover:underline">
                                  {index !== 0 ? `, ${artist.name}` : artist.name}
                                </span>
                              </Link>
                            ))}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center col-span-1 my-3 text-sm text-gray ">
                    {fmtMSS(track.duration_ms)}
                  </div>
                </div>
              ))}
            </div>

            {searchResults.artists && searchResults.artists?.items.length > 0 ? (
              <div className="mt-5">
                <Link href={`/search/${query}/artists`}>
                  <Heading text="Artists" />
                </Link>
                <ArtistList artists={searchResults.artists?.items.slice(0, 6) || []} />
              </div>
            ) : (
              <></>
            )}

            <div className="mt-5">
              <Link href={`/search/${query}/albums`}>
                <Heading text="Albums" />
              </Link>
              <AlbumList albums={searchResults.albums?.items.slice(0, 6) || []} />
            </div>

            <div className="mt-5">
              <Link href={`/search/${query}/playlists`}>
                <Heading text="Playlists" />
              </Link>
              <PlaylistList playlists={searchResults.playlists?.items.slice(0, 6) || []} />
            </div>
          </>
        )}
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

  const query = ctx.params?.query;
  const searchResults = await customGet(
    `https://api.spotify.com/v1/search?q=${query}&market=from_token&type=album,artist,track,playlist&limit=50`,
    session,
  );
  return { props: { query, searchResults } };
};
