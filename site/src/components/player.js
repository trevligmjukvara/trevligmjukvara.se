import React, { createRef, useState } from "react"
import styled from "styled-components"
import formatTime from "../lib/formatTime"
import { FaPlay, FaPause } from "react-icons/fa"
import { MdForward30 } from "react-icons/md"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

const Player = ({ src }) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioPlayer = createRef()
  const progressBar = createRef()

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
    setCurrentTime(newTime)
  }

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
          <Tippy placement="bottom" content={playing ? "Pausa" : "Spela"}>
            <PlayPauseButton onClick={togglePlay}>
              {playing ? <FaPause /> : <FaPlay />}
            </PlayPauseButton>
          </Tippy>
          <Tippy placement="bottom" content="Spola fram">
            <ForwardButton
              onClick={() => (audioPlayer.current.currentTime += 30)}
            >
              <MdForward30 />
            </ForwardButton>
          </Tippy>
        </ControlsWrapper>
        <ProgressWrapper>
          <Time>{formatTime(currentTime)}</Time>
          <ProgressBar onClick={scrub} ref={progressBar}>
            <Progress progress={progress}></Progress>
          </ProgressBar>
          <Time>{formatTime(duration)}</Time>
        </ProgressWrapper>
      </Wrapper>
    </>
  )
}

export default Player

const HiddenAudioElement = styled.audio`
  /* display: none; */
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  background-color: #f9f9f9;
  position: relative;
  top: 0;
  border-radius: 3px;
  border: 1px solid var(--border-color);
`

const ControlsWrapper = styled.div`
  display: flex;
`

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

const PlayPauseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  height: 38px;
  width: 50px;
  font-size: 26px;
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
  height: 38px;
  padding: 0;
  height: 40px;
  width: 50px;
  font-size: 36px;
  line-height: 50px;
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

const Time = styled.span`
  white-space: nowrap;
  text-align: center;
  flex: 0 0 80px;
  font-size: 16px;
`

const ProgressBar = styled.div`
  background: linear-gradient(to right, #ff67a9, #7af5ee, #c8ca2f);

  /* background: linear-gradient(
    to right,
    #028bc2 0%,
    #028bc2 20%,
    #85b638 20%,
    #85b638 40%,
    #fde602 40%,
    #fde602 60%,
    #f5731b 60%,
    #f5731b 80%,
    #f23e88 80%
  ); */

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
