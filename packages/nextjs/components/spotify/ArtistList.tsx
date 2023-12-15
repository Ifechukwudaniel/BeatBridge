import CardItem from "./CardItem";
import CardItemGrid from "./CardItemGrid";
import { Artist } from "~~/types/spotify";

interface IProps {
  artists: Artist[];
}

export default function ArtistList({ artists }: IProps) {
  return (
    <CardItemGrid>
      {artists?.map(artist => (
        <CardItem
          key={artist.id}
          id={artist.id}
          heading={artist.name}
          images={artist.images}
          altTitle={artist.name}
          subheading={artist.genres && artist.genres.length > 0 ? artist.genres[0] : "artist"}
          imageRounded
          type="artist"
        />
      ))}
    </CardItemGrid>
  );
}
