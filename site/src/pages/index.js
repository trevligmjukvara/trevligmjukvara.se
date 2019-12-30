import React from "react"
import SEO from "../components/seo"
import LatestEpisode from "../episodes/s01e03.mdx"

const IndexPage = () => {
  return (
    <>
      <SEO title="trevligmjukvara.se" />
      <LatestEpisode />
    </>
  )
}

export default IndexPage
