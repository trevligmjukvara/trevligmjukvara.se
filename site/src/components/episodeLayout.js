import React, { useEffect } from "react"
import { useGlobalState } from "../globalState"
import SEO from "./seo"

const EpisodeLayout = ({ children, pageContext }) => {
  const [, setActiveEpisode] = useGlobalState("activeEpisode")
  const { audioSourcePath, title, episode } = pageContext.frontmatter

  useEffect(() => {
    setActiveEpisode({ src: audioSourcePath, title: title })
  }, [audioSourcePath, title, episode, setActiveEpisode])
  return (
    <>
      <SEO title={`${episode} - ${title}`} />
      {children}
    </>
  )
}

export default EpisodeLayout
