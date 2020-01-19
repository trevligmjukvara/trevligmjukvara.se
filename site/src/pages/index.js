import React from "react"
import SEO from "../components/seo"
import LatestEpisode from "../episodes/s02e03.mdx"

const IndexPage = () => {
  return (
    <>
      <SEO title="Trevlig mjukvara" />
      <LatestEpisode />
    </>
  )
}

export default IndexPage
