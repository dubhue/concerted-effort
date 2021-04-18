import { graphql } from "gatsby"

export const NodePlaylistFields = graphql`
  fragment NodePlaylistFields on ContentfulPlaylist {
    id
    contentTitle: title
    postDate
    playlistName
    playlistId
    playlist: choisicData {
      playlistOrder: _
      songTime: Time
      songTitle: Song
      popularity: Popularity
      mainGenres: Parent_Genres
      genres: Genres
      artist: Artist
      albumYear: Album_Year
      albumTitle: Album
      addedToPlaylist: Added_At
    }
    playlistImage {
      gatsbyImageData(width: 1000, formats: AUTO, placeholder: DOMINANT_COLOR)
    }
    bgImage: featuredImage {
      gatsbyImageData(width: 2000, formats: AUTO, placeholder: DOMINANT_COLOR)
    }
  }
`

/*
    bgImage: featuredImage {
        gatsbyImageData {
            (
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
        }
    }
    playlistImage {
        gatsbyImageData {
            (
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
        }
    }
    */
