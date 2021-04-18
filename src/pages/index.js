import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimization from "../components/seo"
import Spotify from "../components/Spotify"

const IndexPage = () => (
  <Layout>
    <SearchEngineOptimization title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <Spotify playlistId={"7BXgWMqVmq87vt7b4zlcfL"} width={300} height={380} />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
