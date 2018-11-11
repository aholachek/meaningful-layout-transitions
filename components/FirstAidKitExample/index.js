import React, { Component } from "react"
import PropTypes from "prop-types"
import { Flipper, ExitContainer } from "react-flip-toolkit"
import ListView from "./ListView"
import ItemView from "./ItemView"
import styled from "styled-components"

const Container = styled.div`
  width: 450px;
  margin: 2rem auto;
  overflow: hidden;
  border-radius: 4px;
  height: 45rem;
  color: var(--primary);
  ul {
    list-style: none;
  }
`

const OverflowHidden = styled.div`
  overflow: hidden;
  padding: 2rem;
`
const ContentContainer = styled.div`
  background-color: var(--grey);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

const Title = styled.div`
  cursor: pointer;
  background-color: white;
  position: relative;
  padding: 1rem;
  box-shadow: 0 0px 35px rgba(50, 50, 93, 0.25), 0 0px 15px rgba(0, 0, 0, 0.15);
  h1 {
    font-size: 1.5rem;
    margin: 0;
  }
`

const simultaneousAnimations = ({
  hideEnteringElements,
  animateEnteringElements,
  animateExitingElements,
  animateFlippedElements
}) => {
  hideEnteringElements()
  animateExitingElements()
  animateFlippedElements()
  animateEnteringElements()
}

const config = [
  { title: "Nice Product", price: 10, color: "#5C6BC0" },
  { title: "Cool Product", price: 20, color: "#7E57C2" },
  { title: "Awesome Product", price: 30, color: "#AB47BC" },
  { title: "Desirable Product", price: 40, color: "#EC407A" }
]

class AnimatedRouter extends Component {
  static propTypes = {}

  state = { itemIndex: undefined }

  render() {
    return (
      <Flipper
        flipKey={this.state.itemIndex}
        handleEnterUpdateDelete={simultaneousAnimations}
      >
        <Container>
          <Title onClick={() => this.setState({ itemIndex: undefined })}>
            <h1>
              {this.state.itemIndex !== undefined
                ? `◀ ${config[this.state.itemIndex].title}`
                : "Online Store"}
            </h1>
          </Title>
          <ContentContainer>
            <ExitContainer>
              <OverflowHidden>
                {this.state.itemIndex !== undefined ? (
                  <ItemView item={config[this.state.itemIndex]} />
                ) : (
                  <ListView
                    items={config}
                    onClick={index =>
                      this.setState({
                        itemIndex: index
                      })
                    }
                  />
                )}
              </OverflowHidden>
            </ExitContainer>
          </ContentContainer>
        </Container>
      </Flipper>
    )
  }
}

export default AnimatedRouter
