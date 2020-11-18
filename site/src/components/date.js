import React from "react"
import styled from "styled-components"
import { BsCalendar } from "react-icons/bs"

const Date = ({ date }) => {
  return (
    <Wrapper>
      <BsCalendar /> <time datetime={date}>{date}</time>
    </Wrapper>
  )
}

export default Date

const Wrapper = styled.div`
  color: #777;
  margin-bottom: 10px;

  > time {
    padding-left: 5px;
  }
`
