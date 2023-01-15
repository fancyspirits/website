export type SocialLink = {
    name: string;
    url: string;
    icon: string;
};

export type ColoredSocialLink = SocialLink & {
    textColor: string;
};

export type AlbumTrack = {
    name: string;
    feat?: string;
    links: SocialLink[];
}

export type Release = {
    name: string;
    imageSrc: string;
    artists: string;
    genre: string;
    releaseDate: {
        year: number;
        month: number;
        day: number;
    };
    description: string;
    links: SocialLink[];
    tracks?: AlbumTrack[];
};

export type Artist = {
    name: string;
    imageSrc: string;
    youtubeLink: string;
};

export type ArtistDetailed = Omit<Artist, "youtubeLink"> & {
    links: SocialLink[];
    description: string;
};