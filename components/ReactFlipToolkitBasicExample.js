import React, { Component, createRef } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const SquareText = styled.div`
  font-size: 1rem;
`

const Square = styled.div`
  transform-origin: 0 0;
  cursor: pointer;
  background-color: var(--primary);
  color: var(--background);
  > div {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }
`
const SmallSquare = styled(Square)`
  width: 7rem;
  height: 7rem;
`

const BigSquare = styled(Square)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const AnimatedSquare = ({ big }) => (
  <Flipper flipKey={big}>
    <Flipped flipId="square">
      {big ? (
        <BigSquare>
          <Flipped inverseFlipId="square">
            <div>
              <SquareText>;)</SquareText>
            </div>
          </Flipped>
        </BigSquare>
      ) : (
        <SmallSquare>
          <Flipped inverseFlipId="square">
            <div>
              <SquareText>:)</SquareText>
            </div>
          </Flipped>
        </SmallSquare>
      )}
    </Flipped>
  </Flipper>
)

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
