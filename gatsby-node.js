/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const playlistTemplate = path.resolve(`src/node/playlist.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadPagesQuery {
        playlists: allContentfulPlaylist {
          edges {
            node {
              playlistName
              playlistId
              postDate
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.playlists.edges.forEach(edge => {
      const date = new Date(edge.node.postDate)
      const mon = date.getMonth() + 1
      createPage({
        // Path for this page — required
        path: `${edge.node.playlistName}/${date.getFullYear()}/${
          mon < 10 ? "0" + mon : mon
        }`,
        component: playlistTemplate,
        context: {
          ...edge.node,
        },
      })
    })
  })
}
