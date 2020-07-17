import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useGlobalState } from "../globalState"

const Navigation = ({ episodes }) => {
  const [activeEpisode] = useGlobalState("activeEpisode")

  return (
    <Wrapper>
      {episodes.map(
        (episode, i) =>
          episode.node.context &&
          episode.node.context.frontmatter && (
            <Episode
              to={`/${episode.node.context.frontmatter.slug}/`}
              key={i}
              active={
                episode.node.context.frontmatter.slug === activeEpisode.slug
                  ? true
                  : false
              }
            >
              <EpisodeNumber>
                {episode.node.context.frontmatter.episode}
              </EpisodeNumber>
              <EpisodeTitle>
                {episode.node.context.frontmatter.title}
              </EpisodeTitle>
            </Episode>
          )
      )}
    </Wrapper>
  )
}

const Episode = styled(Link)`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  margin-left: -9px;
  position: relative;
  right: -1px;
  border-left: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  text-decoration: none;
  color: #000;

  ${props =>
    props.active &&
    `
  background-color: #fff;
    border-left: 8px solid #7bf5ee;
    border-right: none;
  `}

  &:hover {
    background-color: #fff;
  }
`

const Wrapper = styled.nav`
  background-color: var(--nav-background-color);
  border-left: 8px solid var(--border-color);

  @media only screen and (max-width: 600px) {
    flex: 1;
  }

  ${Episode} {
    border-bottom: 1px solid var(--border-color);
  }
`

const EpisodeTitle = styled.h2`
  font-size: 16px;
  margin: 5px 0 12px 0;
`

const EpisodeNumber = styled.h3`
  font-size: 13px;
  font-weight: normal;
  color: #777;
  margin: 12px 0 5px 0;
`
export default Navigation
