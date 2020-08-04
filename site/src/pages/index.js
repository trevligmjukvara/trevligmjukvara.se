import React, { useEffect } from "react"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useGlobalState } from "../globalState"

// Select latest episode
export const pageQuery = graphql`
  query MDXQuery {
    allMdx(limit: 1, sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          body
          frontmatter {
            audioSourcePath
            title
            slug
            date
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const [, setActiveEpisode] = useGlobalState("activeEpisode")

  useEffect(() => {
    setActiveEpisode({
      src: data.allMdx.edges[0].node.frontmatter.audioSourcePath,
      title: data.allMdx.edges[0].node.frontmatter.title,
      slug: data.allMdx.edges[0].node.frontmatter.slug,
    })
  }, [data.allMdx.edges, setActiveEpisode])

  return (
    <>
      <SEO title="Trevlig Mjukvara" />
      <MDXRenderer>{data.allMdx.edges[0].node.body}</MDXRenderer>
    </>
  )
}

export default IndexPage
