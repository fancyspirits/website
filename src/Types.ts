export type SocialLink = {
    name: string;
    url: string;
    icon: string;
};

export type ColoredSocialLink = SocialLink & {
    textColor: string;
};