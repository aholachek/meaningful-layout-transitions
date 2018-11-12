import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import { Flipped } from "react-flip-toolkit"
import anime from "animejs"

const fadeInRight = keyframes`
  from {
    opacity:0;
    transform: translateX(-75px);
  }
  to {
    opacity: 1;
    transform: translateX(0);

  }
`
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  animation: ${props =>
    props.type === "fade" ? `${fadeInRight} 300ms forwards` : ""};
`

const Card = styled.li`
  border-radius: 4px;
  list-style-type: none;
  color: white;
  margin-bottom: 1rem;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 4.5rem;
  overflow: hidden;
  > div {
    border-radius: 4px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 300%;
      top: -50%;
      width: 150%;
      background-color: ${props => props.backgroundColor};
      background-image: ${props => `url("${props.img}")`};
      z-index: 0;
    }
  }
`
const CardContents = styled.div`
  padding: 1.5rem 1rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: relative;
  h3 {
    margin-top: 0;
  }
`

const Price = styled.div`
  font-weight: bold;
  width: 3rem;
  height: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

class ListView extends Component {
  onCardEnter = (el, i) => {
    anime({
      targets: el,
      opacity: [0, 1],
      translateY: [100, 0],
      delay: (this.props.items.length - 1 - i) * 20,
      duration: 500,
      easing: "easeOutSine"
    })
  }

  onCardExit = (el, i, removeComponent) => {
    anime({
      targets: el,
      opacity: 0,
      translateY: 100,
      delay: (this.props.items.length - 1 - i) * 10,
      duration: 500,
      easing: "easeOutSine",
      complete: removeComponent
    })
  }

  onTitleAppear = (el, i) => {
    anime({
      targets: el,
      opacity: [0, 1],
      duration: 600,
      easing: "easeOutSine",
      delay: (this.props.items.length - 1 - i) * 50 + 200,
    })
  }

  render() {
    const { type, items } = this.props
    return (
      <List type={type}>
        {items.map((item, index) => {
          return (
            <Flipped
              flipId={!type ? `${item.title}-card` : `${item.title}-card-list` }
              onExit={(!type || type === "exit") && this.onCardExit}
              onAppear={this.onCardEnter}
              shouldFlip={() => !type}
              shouldInvert={() => !type}
            >
              <Card
                backgroundColor={item.color}
                onClick={() => this.props.onClick(index)}
                img={item.img}
              >
                <Flipped inverseFlipId={`${item.title}-card`}>
                  <div>
                    <CardContents>
                      <Flipped
                        flipId={`${
                          item.title
                        }--title-only-for-appear-animations`}
                        onAppear={this.onTitleAppear}
                      >
                        <h3>{item.title}</h3>
                      </Flipped>
                      <Flipped
                        flipId={`${item.title}-price`}
                        shouldFlip={() => !type}
                      >
                        <Price>${item.price}</Price>
                      </Flipped>
                    </CardContents>
                  </div>
                </Flipped>
              </Card>
            </Flipped>
          )
        })}
      </List>
    )
  }
}

export default ListView
