import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"
import { Canvas, useFrame } from "react-three-fiber"
import * as THREE from "three"

import Header from "./header"

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
        /* background-color: #fff6eb; */
        background-color: #101010;
    }

    main {
        a {
            color: black;
            text-decoration: none;
            border-bottom: 2px solid #ff67a9;
            word-break: break-word;

            &:hover {
                background-color: #ff67a9;
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

  return (
    <>
      {/*<CanvasBackground>
        <Canvas camera={{ position: [0, 0, 15] }}>
          <fog attach="fog" args={[COLORS.codGray, 5, 30]} />
          <Grid />
        </Canvas>
      </CanvasBackground>*/}
      <Wrapper>
        <GlobalStyle />
        <Header siteTitle="Trevlig mjukvara" />
        <MainWrapper>
          <Navigation>
            {episodes.map(
              (episode, i) =>
                episode.node.context &&
                episode.node.context.frontmatter && (
                  <Episode
                    to={episode.node.context.frontmatter.slug}
                    key={i}
                    activeClassName="active"
                  >
                    <EpisodeNumber>
                      {episode.node.context.frontmatter.episode}
                    </EpisodeNumber>
                    <EpisodeTitle>
                      {episode.node.context.frontmatter.title}
                    </EpisodeTitle>
                    {/* <p>{episode.node.context.frontmatter.excerpt}</p> */}
                  </Episode>
                )
            )}
          </Navigation>
          <Main>{children}</Main>
        </MainWrapper>
        <Footer>
          {/* <FaInstagram /> */}
          {/* <FooterLink
          target="_blank"
          href="https://twitter.com/trevligmjukvara"
          title="Säg hej till oss på twitter"
        >
          <FaTwitter />
        </FooterLink>
        <FooterLink
          target="_blank"
          href="mailto:kontakt@trevligmjukvara.se"
          title="Maila oss"
        >
          <FaEnvelope />
        </FooterLink> */}
        </Footer>
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
  height: 100%;
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid var(--border-color);
  border-radius: 3px;
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

  @media only screen and (max-width: 600px) {
    flex: 1;
    padding: 15px;
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

const Footer = styled.footer`
  margin: auto;
  padding: 20px 0;
  font-size: 30px;

  > * {
    padding-right: 20px;
  }
`

// const FooterLink = styled.a`
//   color: #000;
// `

export default Layout
