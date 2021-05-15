import React from "react"
import styled from "styled-components"

const Social = () => {
  return (
    <SocialWrapper hideOnMobile>
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
      <a
        rel="me"
        style={{ display: "none" }}
        href="https://fikaverse.club/@trevligmjukvara"
      >
        TM på Mastodon
      </a>
      <a
        rel="me"
        style={{ display: "none" }}
        href="https://mastodon.online/@_alexander_"
      >
        Alex på Mastodon
      </a>
    </SocialWrapper>
  )
}

export default Social

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
