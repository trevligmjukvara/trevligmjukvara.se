import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"
import { Canvas, useFrame } from "react-three-fiber"
import * as THREE from "three"
import Player from "./player"
import Header from "./header"
import { useGlobalState } from "../globalState"

const GlobalStyle = createGlobalStyle`
    :root {
        --border-color: #eaeaea;
        --nav-background-color: #f9f9f9;
    }

    body, html, #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        overflow-y: scroll;
        background-color: #101010;
    }

    main {
        a {
            color: black;
            text-decoration: none;
            background-color: #e2e2e2;
            padding: 3px 7px;
            font-size: 0.8em;
            border-radius: 3px;
            word-break: break-word;
            display: block;
            width: fit-content;

            &:hover {
                background-color: #fff;
            }

            &:before {
                content: '';
                width: 10px;
                height: 10px;
                padding-right: 5px;
                display: inline-flex;
                background-repeat: no-repeat;
                background-size: contain;
                background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'%3E%3C/path%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'%3E%3C/path%3E%3C/svg%3E");
            }
        }

        li {
            padding: 3px 0;
        }
    }
`

function Grid() {
  const SIZE = 160
  const SEGMENTS = 60
  const gridRef = React.useRef()

  useFrame(({ clock }) => {
    gridRef.current.position.z =
      (clock.getElapsedTime() % 1) * (SIZE / SEGMENTS)
  })
  return (
    <gridHelper
      ref={gridRef}
      position={[0, -10, 0]}
      args={[SIZE, SEGMENTS, COLORS.brightTurquoise, COLORS.brightTurquoise]}
    />
  )
}

const COLORS = {
  codGray: new THREE.Color(0x101010),
  pink: new THREE.Color(0xff67a9),
  brightTurquoise: new THREE.Color(0x7bf5ee),
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query blogIndex {
      allSitePage(sort: { fields: id, order: DESC }) {
        edges {
          node {
            context {
              frontmatter {
                slug
                title
                episode
                date
                excerpt
              }
            }
          }
        }
      }
    }
  `)
  const { edges: episodes } = data.allSitePage

  const [activeEpisode] = useGlobalState("activeEpisode")

  return (
    <>
      <CanvasBackground>
        <Canvas camera={{ position: [0, 0, 15] }}>
          <fog attach="fog" args={[COLORS.codGray, 5, 30]} />
          <Grid />
        </Canvas>
      </CanvasBackground>
      <Wrapper>
        <GlobalStyle />
        <Header siteTitle="Trevlig mjukvara" />
        <Player src={activeEpisode.src} title={activeEpisode.title} />
        <MainWrapper>
          <Navigation>
            {episodes.map(
              (episode, i) =>
                episode.node.context &&
                episode.node.context.frontmatter && (
                  <Episode
                    to={`/${episode.node.context.frontmatter.slug}`}
                    key={i}
                    activeClassName="active"
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
          </Navigation>
          <Main>{children}</Main>
        </MainWrapper>
      </Wrapper>
    </>
  )
}

const CanvasBackground = styled.div`
  position: fixed;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 0 15px;
  margin: 0 auto;
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid var(--border-color);
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  margin-bottom: 100px;
  flex: 1 0 auto;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

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

  &.active {
    background-color: #fff;
    border-left: 8px solid #7bf5ee;
    border-right: none;
  }

  &:hover {
    background-color: #fff;
  }
`

const Main = styled.main`
  padding: 20px 30px;
  border-left: 1px solid var(--border-color);
  flex: 1 1 auto;
  font-size: 14px;

  @media only screen and (max-width: 600px) {
    flex: 1;
    padding: 15px;
  }

  ul {
    margin-top: 5px;
    margin-bottom: 30px;
    padding-left: 15px;
  }

  h2 {
    margin: 0 0 5px 0;
    font-size: 18px;
    text-transform: uppercase;
  }

  h3 {
    margin-bottom: 5px;
    font-size: 16px;
    text-transform: uppercase;
  }

  h4 {
    margin-bottom: 5px;
    font-size: 14px;
    text-transform: uppercase;
  }
`

const Navigation = styled.nav`
  background-color: var(--nav-background-color);
  border-left: 8px solid var(--border-color);
  flex: 0 0 250px;

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

export default Layout
