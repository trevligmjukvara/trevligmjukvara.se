import React, { useEffect } from "react"
import { useGlobalState } from "../globalState"
import SEO from "./seo"
import getShareImage from "@jlengstorf/get-share-image"

const EpisodeLayout = ({ children, pageContext }) => {
  const [, setActiveEpisode] = useGlobalState("activeEpisode")
  const { audioSourcePath, title, episode, slug } = pageContext.frontmatter

  useEffect(() => {
    setActiveEpisode({ src: audioSourcePath, title: title, slug: slug })
  }, [audioSourcePath, title, episode, setActiveEpisode, slug])

  const shareImage = getShareImage({
    title: `${title}`,
    tagline: `${episode} ‣`,
    cloudName: "dcuupgh1z",
    imagePublicID: "/v1590780997/share-template.png",
    titleFont: "Chau Philomene One",
    taglineFont: "Chau Philomene One",
    textColor: "ffffff",
    textAreaWidth: 631,
    textLeftOffset: 587,
    titleFontSize: 100,
    taglineFontSize: 65,
    titleBottomOffset: 250,
    taglineTopOffset: 245,
  })

  return (
    <>
      <SEO title={`${episode} - ${title}`} shareImage={shareImage} />
      {children}
    </>
  )
}

export default EpisodeLayout
