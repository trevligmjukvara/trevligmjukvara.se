import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useGlobalState } from "../globalState"
import { FaWindowClose } from "react-icons/fa"

const MobileNavigation = ({ episodes }) => {
  const [activeEpisode] = useGlobalState("activeEpisode")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
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
                  onClick={() => setIsOpen(false)}
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
      )}
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "• Avsnitt •"}
      </ToggleButton>
    </>
  )
}

const ToggleButton = styled.button`
  width: 100%;
  padding: 15px 20px;
  background-color: #101010;
  border: none;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;

  svg {
    margin-right: 20px;
  }
`

const Episode = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  border-left: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  text-decoration: none;
  color: #000;
  padding-left: 10px;

  ${props =>
    props.active &&
    `
    background-color: #fff;
    border-left: 8px solid #7bf5ee;
    border-right: none;
    margin-left: 0;
  `}

  &:hover {
    background-color: #fff;
  }
`

const Wrapper = styled.nav`
  background-color: var(--nav-background-color);
  flex: 0 0 250px;
  overflow: scroll;
  height: calc(100vh - 48px); /* full height minus button*/

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
export default MobileNavigation
