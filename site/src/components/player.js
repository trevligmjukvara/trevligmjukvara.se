import React, { createRef, useState, useEffect } from "react"
import styled from "styled-components"
import formatTime from "../lib/formatTime"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import { FiVolume2 } from "react-icons/fi"
import { useGlobalState } from "../globalState"
import logo from "../images/logo_rect.png"

const Player = ({ src, title }) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1)
  const audioPlayer = createRef()
  const progressBar = createRef()
  const [activeEpisode] = useGlobalState("activeEpisode")


  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new window.MediaMetadata({
      title: title,
      artist: 'Trevlig Mjukvara',
      album: 'Veckopodden om trevlig och otrevlig mjukvara',
      artwork: [
        {
          src: logo,
          sizes: '100x100', // HeightxWidth
          type: 'image/png'
        }
      ]
    });
  }


  navigator.mediaSession.setActionHandler("play", () => {
    audioPlayer.play();
  });

  navigator.mediaSession.setActionHandler("seekto", details => {
    audioPlayer.currentTime = details.seekTime;
  });


  const timeUpdate = () => {
    setCurrentTime(audioPlayer.current.currentTime)
    setDuration(audioPlayer.current.duration)

    if (Number.isNaN(currentTime / duration)) return
    setProgress((currentTime / duration) * 100)
  }

  const togglePlay = () => {
    playing ? audioPlayer.current.pause() : audioPlayer.current.play()
    setPlaying(!playing)
  }

  const scrub = e => {
    const newTime =
      (e.nativeEvent.offsetX / progressBar.current.offsetWidth) * duration
    audioPlayer.current.currentTime = newTime
    console.log(audioPlayer.current)
    setCurrentTime(newTime)
  }

  const speed = change => {
    const playbackRateMax = 2.5
    const playbackRateMin = 0.75

    let newPlaybackRate = playbackRate + change

    if (newPlaybackRate > playbackRateMax) {
      newPlaybackRate = playbackRateMin
    }

    if (newPlaybackRate < playbackRateMin) {
      newPlaybackRate = playbackRateMax
    }

    audioPlayer.current.playbackRate = newPlaybackRate
    setPlaybackRate(newPlaybackRate)
  }

  const speedUp = () => {
    speed(0.25)
  }

  const speedDown = e => {
    e.preventDefault()
    speed(-0.25)
  }

  const resetPlayer = () => {
    setCurrentTime(0)
    setDuration(0)
    setPlaying(false)
    setProgress(0)
  }

  useEffect(() => {
    resetPlayer()
  }, [activeEpisode.src])

  return (
    <>
      <HiddenAudioElement
        src={src}
        ref={audioPlayer}
        onTimeUpdate={timeUpdate}
        onLoadedMetadata={timeUpdate}
      />
      <Wrapper>
        <ControlsWrapper>
          <Tippy placement="bottom" content="- 15 sekunder">
            <BackwardButton
              onClick={() => (audioPlayer.current.currentTime -= 15)}
            >
              <svg width="23" height="18">
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M1.463 9.542c-.383.295-.871.45-1.463.468v.91h2.051v6.829h1.255V8.402H2.182a1.867 1.867 0 0 1-.719 1.14zm9.69 2.967a2.71 2.71 0 0 0-.967-.62 3.5 3.5 0 0 0-1.796-.171 2.81 2.81 0 0 0-1.033.39c-.156.095-.291.21-.405.342l.601-2.86h4.012V8.402H6.677l-1.006 4.785 1.163.435a2.296 2.296 0 0 1 1.841-.883c.297 0 .569.046.816.138.249.092.464.227.648.401.183.177.326.39.43.64.105.25.158.539.158.864 0 .29-.05.558-.15.804-.1.247-.24.46-.418.64-.18.18-.394.318-.647.415a2.333 2.333 0 0 1-.836.144c-.304 0-.579-.05-.823-.151a2.089 2.089 0 0 1-.64-.409 1.94 1.94 0 0 1-.438-.612 2.327 2.327 0 0 1-.203-.752l-1.162.29a2.93 2.93 0 0 0 .987 1.944c.283.25.619.45 1.006.6.388.15.812.225 1.274.225.514 0 .976-.084 1.385-.25.41-.167.758-.394 1.046-.679.287-.286.507-.62.66-1.002.152-.382.229-.789.229-1.22 0-.474-.074-.903-.222-1.286a2.824 2.824 0 0 0-.622-.975zm3.806-10.227H7.923V0L3.136 2.789l4.787 2.79V3.295h7.036c3.88 0 7.036 3.07 7.036 6.845 0 3.774-3.156 6.845-7.036 6.845V18C19.393 18 23 14.474 23 10.14c0-4.332-3.607-7.858-8.04-7.858z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                  <path d="M0 0h23v18H0z"></path>
                </g>
              </svg>
            </BackwardButton>
          </Tippy>
          <Tippy placement="bottom" content={playing ? "Pausa" : "Spela"}>
            <PlayPauseButton onClick={togglePlay}>
              {playing ? (
                <svg viewBox="0 0 40 40" version="1.1">
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M20,40 C9.04267032,40 0.159999552,31.045695 0.159999552,20 C0.159999552,8.954305 9.04267032,0 20,0 C30.9573297,0 39.8400004,8.954305 39.8400004,20 C39.8400004,31.045695 30.9573297,40 20,40 Z M15,14 L15,26 L18,26 L18,14 L15,14 Z M22,14 L22,26 L25,26 L25,14 L22,14 Z"
                      fill="#101010"
                    ></path>
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 40 40" version="1.1">
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g fill="#101010">
                      <path d="M20,40 C8.954305,40 0,31.045695 0,20 C0,8.954305 8.954305,0 20,0 C31.045695,0 40,8.954305 40,20 C40,31.045695 31.045695,40 20,40 Z M16.7581405,25.9338517 L25.7471601,20.9226438 C26.08428,20.7347479 26.08428,20.2652521 25.7471601,20.0773562 L16.7581405,15.0661483 C16.4210207,14.8782524 16,15.1130003 16,15.4887921 L16,25.5112079 C16,25.8869997 16.4210207,26.1217476 16.7581405,25.9338517 Z"></path>
                    </g>
                  </g>
                </svg>
              )}
            </PlayPauseButton>
          </Tippy>
          <Tippy placement="bottom" content="+ 15 sekunder">
            <ForwardButton
              onClick={() => (audioPlayer.current.currentTime += 15)}
            >
              <svg width="21" height="18">
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M7.897 3.264h6.91v2.26l4.7-2.761L14.808 0v2.26h-6.91C3.543 2.26 0 5.752 0 10.043s3.543 7.783 7.897 7.783v-1.004c-3.81 0-6.91-3.041-6.91-6.779s3.1-6.779 6.91-6.779zm2.757 6.438c-.376.29-.855.445-1.437.462v.901h2.015v6.763h1.232V8.572H11.36c-.094.462-.33.838-.706 1.13zm10.125 3.903a2.788 2.788 0 0 0-.61-.966 2.65 2.65 0 0 0-.95-.614 3.412 3.412 0 0 0-1.237-.214c-.171 0-.347.015-.527.045a2.837 2.837 0 0 0-1.013.384 1.693 1.693 0 0 0-.398.34l.59-2.833h3.94V8.572h-4.8l-.988 4.739 1.142.43a2.19 2.19 0 0 1 .764-.632c.312-.162.66-.242 1.046-.242.29 0 .558.046.801.138a1.812 1.812 0 0 1 1.06 1.031c.102.248.153.533.153.856 0 .287-.049.552-.147.796a1.902 1.902 0 0 1-.41.633 1.782 1.782 0 0 1-.635.412 2.27 2.27 0 0 1-.821.143c-.3 0-.57-.05-.809-.15-.24-.1-.449-.234-.628-.404a1.928 1.928 0 0 1-.43-.607 2.337 2.337 0 0 1-.2-.744l-1.141.287a2.92 2.92 0 0 0 .969 1.927c.278.248.607.445.988.593.381.148.798.222 1.252.222a3.56 3.56 0 0 0 1.36-.248c.402-.166.744-.39 1.026-.673.283-.282.499-.613.649-.992A3.27 3.27 0 0 0 21 14.879a3.601 3.601 0 0 0-.221-1.274z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                  <path d="M0 0h21v18H0z"></path>
                </g>
              </svg>
            </ForwardButton>
          </Tippy>
          <Title>
            <FiVolume2 /> <span>{title}</span>
          </Title>
          <TimeWrapper>
            <Time>{formatTime(currentTime)}</Time>/
            <Time>{formatTime(duration)}</Time>
          </TimeWrapper>
          <LogoWrapper>
            <Logo src={logo} />
          </LogoWrapper>
          <FastnessWrapper>
            <Tippy placement="bottom" content="Hastighet">
              <FastnessButton onClick={speedUp} onContextMenu={speedDown}>
                {playbackRate} &times;
              </FastnessButton>
            </Tippy>
          </FastnessWrapper>
        </ControlsWrapper>
        <ProgressWrapper>
          <ProgressBar onClick={scrub} ref={progressBar}>
            <Progress progress={progress}></Progress>
          </ProgressBar>
        </ProgressWrapper>
      </Wrapper>
    </>
  )
}

export default Player

const LogoWrapper = styled.div`
  display: none;
  height: 70px;
  width: 70px;
  grid-column: 1/1;
  grid-row: 1/1;
  border-radius: 3px 0 0 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 450px) {
    display: block;
  }
`

const Logo = styled.img`
  height: 260px;
`

const HiddenAudioElement = styled.audio``

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  position: sticky;
  top: 0;
  z-index: 1;
  border-radius: 3px 3px 0 0;
  border: 1px solid var(--border-color);
  border-bottom: 0;
`

const ControlsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 1fr auto auto;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr auto auto auto 1fr;
  }
`

const ProgressWrapper = styled.div`
  width: 100%;
`

const Title = styled.span`
  flex-grow: 1;
  font-size: 20px;
  font-family: monospace;
  border-radius: 100px;
  background: #101010;
  padding: 10px 25px;
  color: #fff;
  display: flex;
  align-items: center;

  svg {
    margin-right: 15px;
    flex-shrink: 0;
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media only screen and (max-width: 800px) {
    grid-row: 2/2;
    grid-column: span 5;
    font-size: 16px;
    border-radius: 0;

    svg {
      position: absolute;
    }

    span {
      text-align: center;
      width: 100%;
    }
  }
`

const PlayPauseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 20px;
  margin-right: 20px;
  height: 50px;
  width: 50px;
  line-height: 48px;
  vertical-align: middle;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`
const ForwardButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  padding-right: 20px;
  vertical-align: middle;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`

const BackwardButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  vertical-align: middle;
  cursor: pointer;
  padding-left: 20px;

  &:focus,
  &:active {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`

const TimeWrapper = styled.div`
  font-size: 14px;
  padding: 0 10px;

  @media only screen and (max-width: 800px) {
    grid-column: 1/1;
    grid-row: 1/1;
  }

  @media only screen and (max-width: 450px) {
    display: none;
  }
`

const Time = styled.span`
  white-space: nowrap;
  text-align: center;
  padding: 0 10px;
`

const ProgressBar = styled.div`
  background: linear-gradient(to right, #ff67a9, #7af5ee, #c8ca2f);
  width: 100%;
  height: 10px;
`

const Progress = styled.div`
  background: #eaeaea;
  width: calc(100% - ${props => props.progress}%);
  height: 100%;
  float: right;
  pointer-events: none;
`

const FastnessWrapper = styled.div`
  height: 70px;
  display: flex;
  width: 70px;
  margin-left: auto;
`

const FastnessButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  padding: 0;
  border-left: 1px solid #eaeaea;

  &:focus,
  &:active {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`
