import CardItem from "./CardItem";
import CardItemGrid from "./CardItemGrid";
import { PlaylistType } from "~~/types/spotify";

interface IProps {
  playlists: PlaylistType[];
}

export default function PlaylistList({ playlists }: IProps) {
  return (
    <CardItemGrid>
      {playlists?.map(playlist => (
        <CardItem
          key={playlist.id}
          id={playlist.id}
          heading={playlist.name}
          subheading={playlist.description}
          altTitle={playlist.name}
          images={playlist.images}
          type="playlist"
        />
      ))}
    </CardItemGrid>
  );
}
