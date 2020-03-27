import React from "react"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

// Select latest episode
export const pageQuery = graphql`
  query MDXQuery {
    allMdx(limit: 1, sort: { fields: frontmatter___slug, order: DESC }) {
      edges {
        node {
          body
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Trevlig Mjukvara" />
      <MDXRenderer>{data.allMdx.edges[0].node.body}</MDXRenderer>
    </>
  )
}

export default IndexPage
