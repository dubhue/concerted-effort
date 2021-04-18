import * as React from "react"

const Spotify = ({ playlistId, width, height }) => {
  const _width = width ? width : 600
  const _height = height ? height : 1000
  console.log(playlistId)
  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${playlistId}`}
      width={_width}
      height={_height}
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title={playlistId}
    ></iframe>
  )
}

export default Spotify
