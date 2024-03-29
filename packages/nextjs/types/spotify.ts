interface Image {
  height: number | null;
  url: string | null;
  width: number | null;
}

export interface Album {
  id: string;
  name: string;
  artists: [Artist];
  images?: [Image];
  album_type?: string;
  release_date?: string;
  total?: number;
  tracks?: {
    total: number;
    items: Track[];
  };
}

export interface Artist {
  id: string;
  name: string;
  images?: [Image];
  followers?: {
    total: number;
  };
  popularity?: number;
  genres?: [string];
}

export interface Albums {
  items: Album[];
  total?: number;
}

export interface Track {
  id: string;
  name: string;
  album?: Album;
  artists: [Artist];
  duration_ms: number;
  preview_url: string;
}

export interface PlaylistType {
  description?: string;
  id: string;
  followers?: {
    total: number;
  };
  images?: [Image];
  name: string;
  owner?: {
    id: string;
    display_name?: string;
  };
  items?: [{ added_at: string; track: Track }];
  tracks?: {
    items?: [{ added_at: string; track: Track }];
    total: number;
  };
  type?: string;
  total?: number;
}

export interface SearchResults {
  albums?: {
    items: Album[];
  };
  artists?: {
    items: Artist[];
  };
  playlists?: {
    items: PlaylistType[];
  };
  tracks?: {
    items: Track[];
  };
}
export interface Category {
  id: string;
  icons: Image[];
  href: string;
  name: string;
}
