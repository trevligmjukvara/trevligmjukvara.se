import React from "react"
import SEO from "../components/seo"
import LatestEpisode from "../episodes/s02e01.mdx"

const IndexPage = () => {
  return (
    <>
      <SEO title="Trevlig mjukvara" />
      <LatestEpisode />
    </>
  )
}

export default IndexPage
