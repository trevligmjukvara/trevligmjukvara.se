import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import {
  FaEnvelope,
  FaTwitter,
  FaRss,
  FaSpotify,
  FaItunesNote,
  FaGoogle,
  FaPodcast,
} from "react-icons/fa"

const Header = ({ siteTitle }) => (
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
            <h4>Twitter</h4>
            <span>@trevligmjukvara</span>
            <FaTwitter />
          </Twitter>
          <Email
            target="_blank"
            href="mailto:kontakt@trevligmjukvara.se"
            title="Maila oss"
          >
            <h4>Mail</h4>
            <span>kontakt@trevligmjukvara.se</span>
            <FaEnvelope />
          </Email>
        </SocialWrapper>
      </BoxWrapper>
    </Wrapper>
    <ButtonsWrapper>
      <StyledButton
        href="https://podcasts.apple.com/se/podcast/trevlig-mjukvara/id1491691904"
        target="_blank"
        backgroundColor="#b250e2"
        borderColor="#722996"
      >
        <FaItunesNote /> iTunes
      </StyledButton>
      <StyledButton
        href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5maXJlc2lkZS5mbS90cmV2bGlnbWp1a3ZhcmEvcnNz"
        target="_blank"
        backgroundColor="#4285F4"
        borderColor="#2c62bd"
      >
        <FaGoogle /> Google Podcasts
      </StyledButton>
      <StyledButton
        href="https://open.spotify.com/show/31BqdspWOoQQVKSIfRlaox?si=Ita6dqtjSWGtUZ3U2y27xA"
        target="_blank"
        backgroundColor="#1DB954"
        borderColor="#128d3e"
      >
        <FaSpotify /> Spotify
      </StyledButton>
      <StyledButton
        href="https://pca.st/t5v44fi7"
        target="_blank"
        backgroundColor="#f43e37"
        borderColor="#ad1510"
      >
        <FaPodcast /> PocketCasts
      </StyledButton>
      <StyledButton
        href="https://www.stitcher.com/podcast/trevlig-mjukvara"
        target="_blank"
        backgroundColor="#622268"
        borderColor="#4d1a52"
      >
        <FaPodcast /> Stitcher
      </StyledButton>
      <StyledButton
        href="https://feeds.fireside.fm/trevligmjukvara/rss"
        target="_blank"
        backgroundColor="#ef8733"
        borderColor="#bf6319"
      >
        <FaRss /> RSS
      </StyledButton>
    </ButtonsWrapper>
  </>
)

export default Header

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const StyledButton = styled.a`
  display: inline-block;
  padding: 8px 20px 8px 40px;
  background-color: ${props => props.backgroundColor || "#00c2d4"};
  border: 1px solid ${props => props.borderColor || "#008d9a"};
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 0.05s ease-in;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  position: relative;

  &:hover {
    opacity: 0.8;
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
  }
`

const ButtonsWrapper = styled.div`
  ${StyledButton} {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`

const LogoWrapper = styled.div`
  margin-right: 20px;
`

const Logo = styled.img`
  height: 260px;
`

const Tagline = styled.h2`
  margin-top: 0;
  font-style: italic;
  font-weight: normal;
  font-size: 22px;

  @media only screen and (max-width: 800px) {
    text-align: center;
    padding-top: 10px;
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
  flex: 1 1 50%;
  margin-right: 15px;
  padding: 0 15px 35px 15px;
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
  flex: 1 1 50%;
  margin-left: 15px;
  padding: 0 15px 35px 15px;
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
