import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"

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
        <SocialWrapper>
          <Twitter
            target="_blank"
            href="https://twitter.com/trevligmjukvara"
            title="Säg hej till oss på twitter"
          >
            <h4 style={{ margin: "10px 0" }}>Twitter</h4>
            <span>@trevligmjukvara</span>
          </Twitter>
          <Email
            target="_blank"
            href="mailto:kontakt@trevligmjukvara.se"
            title="Maila oss"
          >
            <h4 style={{ margin: "10px 0" }}>Mail</h4>
            <span>kontakt@trevligmjukvara.se</span>
          </Email>
        </SocialWrapper>
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
const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const Twitter = styled.a`
  border: 1px solid var(--border-color);
  border-left: 8px solid #7af5ee;
  border-radius: 3px;
  flex: 1 1 50%;
  margin-right: 15px;
  padding: 0 15px 15px 15px;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  font-size: 20px;
  position: relative;

  svg {
    font-size: 30px;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media only screen and (max-width: 1000px) {
    margin-right: 0;
  }
`

const Email = styled.a`
  border: 1px solid var(--border-color);
  border-left: 8px solid #ff67a9;
  border-radius: 3px;
  flex: 1 1 50%;
  margin-left: 15px;
  padding: 0 15px 15px 15px;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  font-size: 20px;
  position: relative;

  svg {
    font-size: 30px;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media only screen and (max-width: 1000px) {
    margin-left: 0;
    margin-top: 20px;
  }
`
