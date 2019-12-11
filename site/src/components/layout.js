import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"

const GlobalStyle = createGlobalStyle`
  body, html, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
      font-family: Helvetica, Arial, sans-serif;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer>trevligmjukvara.se - 2019</Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 0 15px;
  margin: 0 auto;
  height: 100%;
`

const Footer = styled.footer`
  margin-top: auto;
  padding: 20px 0;
`

export default Layout
