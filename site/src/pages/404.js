import React from "react"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Vad söker du?" />
    <h1>Vi hittar inte vad du söker</h1>
    <p>
      Lyssna på ett annat avsnitt istället?
      <span role="img" aria-label="icon">
        😍
      </span>
    </p>
  </>
)

export default NotFoundPage
