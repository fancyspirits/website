![Website running](https://github.com/fancy-spirits/website/actions/workflows/firebase-hosting-merge.yml/badge.svg)

## Prerequisites

- Git
- Node.js
- [pnpm](https://pnpm.io/)

## How to update

1. Clone repository
2. Check out new branch
3. Make changes
   - Use `pnpx astro dev` to see your changes locally
4. Commit and push changes
5. Create a new **DRAFT** pull request
   - Bot will create a deployed preview
   - Once finished, a comment with corresponding link will be added to the PR
6. If satisfied with the changes, the PR can be merged. This triggers update of the production build


## Structure of the contents

### Static assets (i.e. images)

In the `/public` directory, the following subfolders exist:

- **artists**: Add the updated or new logos for artists here
- **logos**: Add logos related to the label itself here
- **releases**: Add the artworks of releases here. Please group the artworks into year-based subdirectories
- **social**: Add logos of streaming and social platforms here


> For release and artist artworks please stick to jpg or png files

> You can use fullsize images. They will be compressed anyway, so the website will stay fast


### Artist Information

In the `src/contentData/artists` directory, there are markdown/yaml files for maintaining information about the artists.

To create a new artist, copy the file `src/contentData/drafts/template-artist.mdx` into the artists directory, rename it to the artist's name in kebab-case and adapt the contents.

**The order of the social links should be consistent among all artists. Currently, the following order is correct:**

1. Youtube
2. Spotify
3. Apple Music
4. Soundcloud
5. Instagram
6. Twitter

If an artist is not using a certain platform, just leave it out.

### Releases

In the `src/contentData/releases` directory, there are markdown/yaml files for maintaining information about the label releases grouped into subfolders by release year.

To create a new release there are templates for a single release or an album in `src/contentData/drafts`. Copy the matching one into the releases directory and rename it to the release's name in kebab-case. If it is a remix, then append the remixer (e.g. `Jiku – Lost Signal (Jon Kat Remix)` becomes `lost-signal-jon-kat`).

As for the artists, keep the streaming links in order (same as for the artists).

> **Note:** For album tracks, there is a dedicated `feat` property for feature artists. Don't put them into the album artists.

> Generally for collabs: Maintain the artists always in the form of `<artist1>, <artist2>`. If you use other separators (like feat., &, x, vs., etc.) the tracks cannot be related to the individual artists.

**If you want to create a release before release date, so that data is maintained, but it is not published, add the property `draft: true` into the document**

### General label Information

The file `src/contentData/about-label.mdx` contains the information about the label that is shown on the main page of the website.

In `src/contentData/about-label.mdx`, there are the Fancy Spirits-related links. If you add some, use [brandcolors](https://brandcolors.net/) to find the correct text color.

# Attention

Don't touch any other files without aligning with me. We don't want our website to be broken. If there are ideas/wishes, don't hesitate to ask me via Discord!