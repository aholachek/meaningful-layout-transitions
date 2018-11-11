import React, { Component } from "react"
import styled from "styled-components"
import { Flipped } from "react-flip-toolkit"
import anime from "animejs"

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Card = styled.li`
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23153eb8' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  border-radius: 4px;
  list-style-type: none;
  background-color: ${props => props.backgroundColor};
  color: white;
  margin-bottom: 1rem;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  > div {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.5rem;
  }
`

const Price = styled.div`
  font-weight: bold;
`

class ListView extends Component {
  onCardEnter = (el, i) => {
    anime({
      targets: el,
      opacity: [0, 1],
      translateY: [150, 0],
      delay: (this.props.items.length - 1 - i) * 30,
      duration: 200,
      easing: "easeOutSine"
    })
  }

  onCardExit = (el, i, removeComponent) => {
    anime({
      targets: el,
      opacity: 0,
      translateY: 100,
      delay: (this.props.items.length - 1 - i) * 50,
      duration: 200,
      easing: "easeOutSine",
      complete: removeComponent
    })
  }

  render() {
    return (
      <List>
        {this.props.items.map((item, index) => {
          return (
            <Flipped
              flipId={`${item.title}-card`}
              onExit={this.onCardExit}
              onAppear={this.onCardEnter}
            >
              <Card
                backgroundColor={item.color}
                onClick={() => this.props.onClick(index)}
              >
                <Flipped inverseFlipId={`${item.title}-card`}>
                  <div>
                    <h3>{item.title}</h3>
                    <Flipped flipId={`${item.price}-card`}>
                      <Price>${item.price}</Price>
                    </Flipped>
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
