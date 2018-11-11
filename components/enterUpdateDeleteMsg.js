import React, { createRef } from "react"
import { Flipper, Flipped, ExitContainer } from "react-flip-toolkit"
import { tween, styler } from "popmotion"
import anime from "animejs"

import styled from "styled-components"

const InlineBlockSpan = styled.span`
  display: inline-block;
  min-width: 0.5rem;
  font-size: 3.5rem;
`

const MessageContainer = styled.div`
  width: 1200px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
`

const WordContainer = styled.div`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`

class FlippedMessage extends React.Component {
  onAppear(el, index) {
    anime({
      targets: el,
      opacity: [0, 1],
      duration: 500,
      easing: "linear",
      delay: index * 50
    })
  }

  onExit(el, index, removeElement) {
    anime({
      targets: el,
      opacity: 0,
      duration: 500,
      easing: "linear",
      delay: index * 50
    })
  }

  render() {
    const { message } = this.props
    const letterDict = {}
    message.split(/\s*/g).forEach((l, i) => {
      letterDict[l] = (letterDict[l] || []).concat(i)
    })

    let letterIndex = 0

    return (
      <ExitContainer>
        <MessageContainer>
          {message.split(" ").map(word => {
            return (
              <WordContainer>
                {word.split("").map(l => {
                  const flipId = `${l}-${letterDict[l].indexOf(letterIndex)}`
                  letterIndex += 1
                  return (
                    <Flipped
                      flipId={flipId}
                      onAppear={this.onAppear}
                      onExit={this.onExit}
                      key={flipId}
                    >
                      <InlineBlockSpan>{l}</InlineBlockSpan>
                    </Flipped>
                  )
                })}
              </WordContainer>
            )
          })}
        </MessageContainer>
      </ExitContainer>
    )
  }
}

const TitleRow = styled.div`
  border-bottom: 4px solid var(--primary);
  padding: 0.25rem;
  text-align: center;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 2rem;
  h1 {
    margin-bottom: 1rem;
  }
`

class EnterUpdateDeleteStepper extends React.Component {
  state = {
    stage: []
  }

  static defaultProps = {
    onStartTransition: () => {},
    onEndTransition: () => {}
  }

  handleEnterUpdateDelete = ({
    hideEnteringElements,
    animateEnteringElements,
    animateExitingElements,
    animateFlippedElements
  }) => {
    this.props.onStartTransition()
    hideEnteringElements()
    this.setState(
      {
        stageIndex: -1,
        stage: [
          { title: "Exit", init: animateExitingElements },
          { title: "Update", init: animateFlippedElements },
          { title: "Enter", init: animateEnteringElements }
        ]
      },
      this.advanceStage
    )
  }

  advanceStage = () => {
    if (this.state.stageIndex + 1 === this.state.stage.length) {
      this.props.onEndTransition()
    } else {
      const newStageIndex = this.state.stageIndex + 1
      this.state.stage[newStageIndex].init()
      this.setState({
        stageIndex: newStageIndex
      })
    }
  }
  render() {
    const currentStage = this.state.stage[this.state.stageIndex]
    const { flipKey, defaultTitle } = this.props

    let btnText = "Start transition"
    if (this.state.stageIndex === this.state.stage.length - 1)
      btnText = "Restart translation"
    else if (this.state.stage[this.state.stageIndex + 1])
      btnText = (
        <div>
          <b>Next:</b>&nbsp;
          {this.state.stage[this.state.stageIndex + 1].title}
        </div>
      )

    const contents = (
      <TitleRow>
        <h1>{(currentStage && currentStage.title) || defaultTitle}</h1>
      </TitleRow>
    )
    {
      this.props.children
    }
    {
      Boolean(this.state.stage.length) && (
        <button onClick={this.advanceStage}>{btnText}</button>
      )
    }

    return (
      <Flipper
        flipKey={flipKey}
        handleEnterUpdateDelete={this.handleEnterUpdateDelete}
        spring={{ stiffness: 40, damping: 10 }}
      >
        <TitleRow>
          <h1>{(currentStage && currentStage.title) || defaultTitle}</h1>
        </TitleRow>
        {this.props.children}
        {Boolean(this.state.stage.length) && (
          <button onClick={this.advanceStage}>{btnText}</button>
        )}
      </Flipper>
    )
  }
}

class Translator extends React.Component {
  state = { msgIndex: 0, key: Math.random() }
  onEndTransition = () => {
    this.setState({ msgIndex: 0, key: Math.random() })
  }
  render() {
    const { firstMsg, secondMsg } = this.props
    const message = this.state.msgIndex === 0 ? firstMsg : secondMsg
    return (
      <div key={this.state.key}>
        <EnterUpdateDeleteStepper
          flipKey={message}
          onEndTransition={this.onEndTransition}
          defaultTitle="Exit-Update-Enter Demo"
        >
          <FlippedMessage message={message} />
        </EnterUpdateDeleteStepper>
        {this.state.msgIndex === 0 && (
          <button
            onClick={() => {
              this.setState({
                msgIndex: 1
              })
            }}
          >
            Translate sentence
          </button>
        )}
      </div>
    )
  }
}

export default Translator
