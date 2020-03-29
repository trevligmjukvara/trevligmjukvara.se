import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import Social from "./social"

const Header = () => (
  <>
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoWrapper>
      <BoxWrapper>
        <Tagline>- veckopodden om trevlig och otrevlig mjukvara</Tagline>
        <HideOnMobile>
          <Social />
        </HideOnMobile>
      </BoxWrapper>
    </Wrapper>
  </>
)

export default Header

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  flex: 1 0 auto;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const LogoWrapper = styled.div`
  margin-right: 20px;

  @media only screen and (max-width: 800px) {
    margin-right: 0;
    img {
      height: 200px;
    }
  }
`

const Logo = styled.img`
  height: 260px;
`

const Tagline = styled.h2`
  margin-top: 0;
  font-style: italic;
  font-weight: normal;
  font-size: 22px;
  color: #fff;

  @media only screen and (max-width: 800px) {
    text-align: center;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`

const HideOnMobile = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`
