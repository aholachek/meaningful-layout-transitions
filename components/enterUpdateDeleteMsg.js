import React, { createRef } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"
import { tween, styler } from "popmotion"

import styled from "styled-components"

const InlineBlockSpan = styled.span`
  display: inline-block;
  min-width: 0.5rem;
`

class EnterUpdateDelete extends React.Component {
  componentDidUpdate(prevProps, prevState) {}
}

class MessageManager extends React.Component {
  state = {
    msgIndex: 0,
    stage: []
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.msgIndex !== this.state.msgIndex) {
      this.setState({ stage: [] })
    }
  }

  handleEnterUpdateDelete({
    hideEnteringElements,
    animateEnteringElements,
    animateExitingElements,
    animateFlippedElements
  }) {
    hideEnteringElements()
    this.setState({
      stage: [
        { title: "delete", init: animateExitingElements },
        { title: "update", init: animateFlippedElements },
        { title: "enter", init: animateEnteringElements }
      ]
    })
  }
  render() {
    const { messages } = this.props
    const letterDict = {}
    const msg = messages[this.state.msgIndex]
    msg.split("").forEach((l, i) => {
      letterDict[l] = (letterDict[l] || []).concat(i)
    })

    return (
      <div>
        <button
          onClick={() => {
            this.setState(({ msgIndex }) => ({
              msgIndex: (msgIndex + 1) % messages.length
            }))
          }}
        >
          translate
        </button>
        <div>
          <h1>
            {this.state.stage[0] && this.state.stage[0].title}
          </h1>
        </div>
        <Flipper
          flipKey={msg}
          handleEnterUpdateDelete={this.handleEnterUpdateDelete}
        >
          {msg.split("").map((l, i) => {
            return (
              <Flipped
                flipId={`${l}-${letterDict[l].indexOf(i)}`}
                onAppear={el => {
                  const elStyler = styler(el)
                  tween({
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                    duration: 250
                  }).start(elStyler.set)
                }}
                onExit={(el, index, removeElement) => {
                  const elStyler = styler(el)
                  tween({
                    to: { opacity: 0 },
                    duration: 250
                  }).start({
                    update: elStyler.set,
                    complete: removeElement
                  })
                }}
              >
                <InlineBlockSpan>{l}</InlineBlockSpan>
              </Flipped>
            )
          })}
        </Flipper>
      </div>
    )
  }
}

export default MessageManager
