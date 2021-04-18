import * as React from "react"
//import Spotify from "../components/Spotify"
import get from "lodash/get"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PlaylistNode = ({ data }) => {
  const playlist = get(data, `playlist`)
  //const { playlistId } = playlist
  return (
    <div>
      {/* <Spotify playlistId={playlistId} /> */}
      <GatsbyImage
        image={getImage(playlist.bgImage)}
        alt={playlist.playlistName}
      />
    </div>
  )
}

export default PlaylistNode

export const query = graphql`
  query playlistQuery($playlistId: String!) {
    playlist: contentfulPlaylist(playlistId: { eq: $playlistId }) {
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
  }
`
