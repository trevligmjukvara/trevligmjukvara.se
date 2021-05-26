import React, { useEffect } from "react"
import { useGlobalState } from "../globalState"
import SEO from "./seo"
import getShareImage from "@jlengstorf/get-share-image"
import Date from "./date"

const EpisodeLayout = ({ children, pageContext }) => {
  const [, setActiveEpisode] = useGlobalState("activeEpisode")
  const {
    audioSourcePath,
    title,
    episode,
    slug,
    date,
  } = pageContext.frontmatter

  useEffect(() => {
    setActiveEpisode({ src: audioSourcePath, title: title, slug: slug })
  }, [audioSourcePath, title, episode, setActiveEpisode, slug])

  const shareImage = getShareImage({
    title: `${episode} ‣`,
    tagline: `${title}`,
    cloudName: "dcuupgh1z",
    imagePublicID: "/v1590780997/share-template.png",
    titleFont: "Roboto",
    taglineFont: "Roboto",
    textColor: "ffffff",
    textAreaWidth: 631,
    textLeftOffset: 587,
    titleFontSize: 65,
    taglineFontSize: 80,
    titleBottomOffset: 430,
    taglineTopOffset: 290,
  })
  console.log(shareImage)

  return (
    <>
      <Date date={date} />
      <SEO title={`${episode} - ${title}`} shareImage={shareImage} />
      {children}
    </>
  )
}

export default EpisodeLayout
