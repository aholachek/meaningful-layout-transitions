import React, { Component, createRef } from "react"
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
  display: flex;
  justify-content: center;
  align-items: center;
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

  getSnapshotBeforeUpdate(prevProps) {
    if (this.props.big !== prevProps.big) {
      return this.squareRef.current.getBoundingClientRect()
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, cachedPosition) {
    if (!cachedPosition) return
    const element = this.squareRef.current
    const newPosition = element.getBoundingClientRect()

    const translateX = cachedPosition.left - newPosition.left
    const translateY = cachedPosition.top - newPosition.top
    const scaleX = cachedPosition.width / newPosition.width
    const scaleY = cachedPosition.height / newPosition.height

    element.style.transition = ""
    element.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`
    requestAnimationFrame(() => {
      element.style.transition = "transform .5s"
      element.style.transform = ""
    })
  }

  render() {
    return this.props.big ? (
      <BigSquare ref={this.squareRef}>i am big</BigSquare>
    ) : (
      <SmallSquare ref={this.squareRef}>i am small</SmallSquare>
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
