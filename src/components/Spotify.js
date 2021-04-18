import * as React from "react"

const Spotify = ({ playlistId, width, height }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${playlistId}`}
      width={width}
      height={height}
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title={playlistId}
    ></iframe>
  )
}

export default Spotify
