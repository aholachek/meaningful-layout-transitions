import React, { Component } from "react"
import AnimatedNavbar from "./AnimatedNavbar"
import styled from "styled-components"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`

export default class App extends Component {
  state = { duration: 300 }

  render() {
    return (
      <AppContainer>
        <AnimatedNavbar duration={this.props.noAnimation ? 0 : this.state.duration} />
      </AppContainer>
    )
  }
}
