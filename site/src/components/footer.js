import React from "react"
import styled from "styled-components"
import { FaRss, FaSpotify, FaApple, FaGoogle, FaPodcast } from "react-icons/fa"

const Footer = () => {
  return (
    <ButtonsWrapper>
      <StyledButton
        href="https://podcasts.apple.com/se/podcast/trevlig-mjukvara/id1491691904"
        target="_blank"
        backgroundColor="#b250e2"
        borderColor="#722996"
      >
        <FaApple /> Apple Podcasts
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
  )
}

const StyledButton = styled.a`
  display: inline-block;
  padding: 8px 0 8px 55px;
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
    left: 28px;
  }
`

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 10px;
  margin-bottom: 70px;

  @media only screen and (max-width: 1030px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`

export default Footer
