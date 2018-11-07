import React, { Component, createRef } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"
import styled from "styled-components-v4"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Square = styled.div`
  transform-origin: 0 0;
  cursor: pointer;
  background-color: var(--primary);
  color: var(--background);
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`
const SmallSquare = styled(Square)`
  width: 5rem;
  height: 5rem;
`

const BigSquare = styled(Square)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

class AnimatedSquare extends Component {
  squareRef = createRef()

  render() {
    return (
      <Flipper flipKey={this.props.big}>
        <Flipped flipId="square">
          {this.props.big ? (
            <BigSquare ref={this.squareRef}>
              <Flipped inverseFlipId="square">
                <div>i am big</div>
              </Flipped>
            </BigSquare>
          ) : (
            <SmallSquare ref={this.squareRef}>
              <Flipped inverseFlipId="square">
                <div>i am small</div>
              </Flipped>
            </SmallSquare>
          )}
        </Flipped>
      </Flipper>
    )
  }
}

export default class App extends Component {
  state = { big: false }

  render() {
    return (
      <Container
        onClick={() => this.setState(prevState => ({ big: !this.state.big }))}
      >
        <AnimatedSquare big={this.state.big} />
      </Container>
    )
  }
}
