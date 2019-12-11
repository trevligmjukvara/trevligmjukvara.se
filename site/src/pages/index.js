import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query blogIndex {
    allSitePage {
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
`

const IndexPage = ({ data }) => {
  const { edges: episodes } = data.allSitePage

  return (
    <Layout>
      <SEO title="Home" />
      <p>Välkommen till vår podcast!</p>
      {episodes.map(
        (episode, i) =>
          episode.node.context &&
          episode.node.context.frontmatter && (
            <Episode>
              <Link to={episode.node.context.frontmatter.slug} key={i}>
                {episode.node.context.frontmatter.episode} -{" "}
                {episode.node.context.frontmatter.title}
              </Link>
              <p>{episode.node.context.frontmatter.excerpt}</p>
            </Episode>
          )
      )}
    </Layout>
  )
}

const Episode = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-top: 1px dashed #000;
`

export default IndexPage
