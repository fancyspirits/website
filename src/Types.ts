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
    id: string;
    name: string;
    imageSrc: string;
    artists: string;
    genre: string;
    releaseDate: {
        year: number;
        month: number;
        day: number;
    };
    embedYt: string;
    links: SocialLink[];
    tracks?: AlbumTrack[];
};