import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </h1>
    </div>
  </header>
)

export default Header

const Logo = styled.img`
  height: 200px;
`
