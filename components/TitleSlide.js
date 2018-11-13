import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Slide = styled.div`
  position: relative;
  top: 15vh;

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
  }
  h2:nth-of-type(2) {
    font-weight: normal;
  }
`

class TitleSlide extends Component {
  render() {
    return (
      <Slide>
        <h1>Layout Animations on the Web</h1>
        <h2>Alex Holachek</h2>
        <h2>Codecademy</h2>
      </Slide>
    )
  }
}

export default TitleSlide
