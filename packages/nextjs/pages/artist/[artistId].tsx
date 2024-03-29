import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { RiMusic2Fill } from "react-icons/ri";
import DashboardLayout from "~~/components/dashboard/DashboardLayout";
import AlbumList from "~~/components/spotify/AlbumList";
import ArtistCard from "~~/components/spotify/ArtistCard";
import ArtistList from "~~/components/spotify/ArtistList";
import ClaimNFT from "~~/components/spotify/ClaimNft";
import Heading from "~~/components/spotify/Heading";
import Layout from "~~/components/spotify/Layout";
import TracksTable from "~~/components/spotify/TracksTable";
import { MySession } from "~~/types/session";
import { Albums, Artist, Track } from "~~/types/spotify";
import { customGet } from "~~/utils/beat-bridge/customGet";
import { isAuthenticated } from "~~/utils/beat-bridge/isAuthenticated";

interface IProps {
  artist: Artist;
  artistTracks: Track[];
  artistAlbums: Albums;
  artistSingles: Albums;
  artistAppearsOn: Albums;
  artistCompilation: Albums;
  relatedArtists: {
    artists: [Artist];
  };
  userFollowsArtist?: boolean;
  userLikedTracks?: { added_at: string; track: Track }[];
  totalFollowers?: number;
}

export default function SingleArtist({
  artist,
  artistTracks,
  artistAlbums,
  artistSingles,
  artistAppearsOn,
  artistCompilation,
  relatedArtists,
  userFollowsArtist,
  userLikedTracks,
}: IProps) {
  /* Check if the user have this artist among their liked tracks */
  const isArtistLiked = () => {
    if (!userLikedTracks) {
      return false;
    }

    const currentArtistId = artist.id;
    return userLikedTracks?.some(({ track }) => track.artists.some(artist => artist.id === currentArtistId));
  };

  isArtistLiked();
  return (
    <DashboardLayout>
      <Layout title={`Beat Bridge - ${artist?.name}`}>
        <div className="bg-[#00011e] rounded-lg w-full text-[#A0AEC0] p-6 relative mt-16">
          <div className="top-0 absolute left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            {artist.images && artist.images?.length > 0 ? (
              <img
                src={artist.images[0].url || ""}
                alt={artist.name}
                className="object-contain rounded-full w-32 h-32"
              />
            ) : (
              <div className="w-full h-40">
                <RiMusic2Fill className="w-full h-full bg-paper " />
              </div>
            )}
          </div>
          <ArtistCard
            name={artist.name}
            followers={artist?.followers?.total || 0}
            albums={artistAlbums?.total || 0}
            location={"LOS ANGELES, CALIFORNIA"}
            popularity={artist?.popularity || 0}
            biography={`An artist of considerable range, Jenna the name taken by Melbourne-raised,
            Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.
            An artist of considerable range `}
            following={userFollowsArtist}
          />
          <ClaimNFT />
        </div>
        <div className="flex items-end gap-6 hidden">
          {artist && (
            <>
              {artist.images && artist.images.length > 0 ? (
                <img
                  src={artist.images[0].url || ""}
                  alt={artist.name}
                  className="object-contain rounded-full w-52 h-52"
                />
              ) : (
                <div className="w-full h-40">
                  <RiMusic2Fill className="w-full h-full bg-paper " />
                </div>
              )}
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-5xl font-bold">{artist.name}</h2>
                <span className="text-sm">{artist.followers?.total.toLocaleString()} followers</span>
                <div className="flex items-center gap-5 text-sm">
                  {artist.genres?.map(genre => (
                    <span key={genre}>{genre}</span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 hidden">
          <Heading text="Popular" />
          <div className="-mt-8">
            <TracksTable tracks={artistTracks} noAlbum noArtist />
          </div>
        </div>

        {artistAlbums?.items.length > 0 && (
          <div className="mt-12 hidden">
            <Heading text="Albums" />
            <AlbumList albums={artistAlbums.items} />
          </div>
        )}

        {artistSingles?.items.length > 0 && (
          <div className="mt-12 hidden">
            <Heading text="Singles" />
            <AlbumList albums={artistSingles.items} />
          </div>
        )}

        {artistAppearsOn?.items.length > 0 && (
          <div className="mt-12 hidden">
            <Heading text="Appears on" />
            <AlbumList albums={artistAppearsOn.items} />
          </div>
        )}

        {artistCompilation?.items.length > 0 && (
          <div className="mt-12 hidden">
            <Heading text="Compilation" />
            <AlbumList albums={artistCompilation.items} />
          </div>
        )}

        {relatedArtists?.artists.length > 0 && (
          <div className="mt-12 bg-[#00011e] rounded-lg p-12">
            <Heading text="Similar Artists" />
            <ArtistList artists={relatedArtists.artists} />
          </div>
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

  const artistId = ctx.params?.artistId;
  const artist = await customGet(`https://api.spotify.com/v1/artists/${artistId}`, session);
  console.log(artist);

  const artistTracks = await customGet(
    `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=from_token`,
    session,
  );

  const artistAlbums = await customGet(
    `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album`,
    session,
  );

  const artistSingles = await customGet(
    `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=single`,
    session,
  );

  const artistAppearsOn = await customGet(
    `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=appears_on`,
    session,
  );

  const artistCompilation = await customGet(
    `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=compilation`,
    session,
  );

  const relatedArtists = await customGet(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, session);

  /* ---- Check if user follows current artist */
  const userFollowsArtist = await customGet(
    `https://api.spotify.com/v1/me/following/contains?type=artist&ids=${artistId}`,
    session,
  );

  /* ---- Get user liked tracks */
  const userLikedTracks = await customGet(`https://api.spotify.com/v1/me/tracks?market=from_token&limit=50`, session);
  // console.log("User Liked Tracks:", userLikedTracks.items);

  return {
    props: {
      artist,
      artistTracks: artistTracks.tracks,
      artistAlbums,
      artistSingles,
      artistAppearsOn,
      artistCompilation,
      relatedArtists,
      userFollowsArtist: userFollowsArtist[0],
      userLikedTracks: userLikedTracks.items,
    },
  };
};
