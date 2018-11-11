import React from "react"
import { Flipped } from "react-flip-toolkit"
import styled, { keyframes } from "styled-components"
import anime from "animejs"

const Container = styled.div`
  position: relative;
  display: flex;
`

const BackgroundCard = styled.div`
  background-color: ${props => props.color};
  object-fit: cover;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23153eb8' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 8rem;
  position: relative;
  width: 110%;
  left: 10%;
  border-radius: 4px;
  margin-bottom: 2rem;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h4 {
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
  p {
    margin-top: 0;
  }
  > div {
    width: 70%;
  }
`

const Price = styled.div`
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 5rem;
  padding: 1rem;
  left: 25%;
  top: 5%;
  height: 3rem;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.12);
  h4 {
    font-size: 1.5rem;
  }
`

const fadeInRight = keyframes`
  from {
    transform: translateX(-50px);
    opacity:0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const Quantity = styled.div`
  animation: ${fadeInRight} 0.3s forwards;
  position: relative;
  top: 100px;
  flex-basis: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  div {
    font-size: 2rem;
  }
`
const QuantityButton = styled.div`
  width: 3rem;
  height: 3rem;
  font-size: 2.5rem;
  border-radius: 100px;
  border: 2px solid var(--primary);
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  &:first-of-type {
    // stupid
    align-items: center;
  }
`

const onDescriptionEnter = (el, i) => {
  anime({
    targets: el,
    opacity: [0, 1],
    translateY: [30, 0],
    easing: "easeOutSine",
    duration: 300,

  })
}

const onDescriptionExit = (el, i, removeComponent) => {
  anime({
    targets: el,
    opacity: 0,
    translateY: 50,
    easing: "easeOutSine",
    duration: 300,
    complete: removeComponent
  })
}

export const ItemView = ({ item }) => {
  return (
    <Container>
      <Quantity>
        <QuantityButton>+</QuantityButton>
        <div>1</div>
        Quantity
        <QuantityButton>-</QuantityButton>
      </Quantity>
      <div>
        <Flipped flipId={`${item.title}-card`}>
          <BackgroundCard color={item.color} />
        </Flipped>
        <Flipped flipId={`${item.price}-card`}>
          <Price>
            <h4>${item.price}</h4>
          </Price>
        </Flipped>
        <Flipped
          flipId={`${item.title}-description`}
          onAppear={onDescriptionEnter}
          onExit={onDescriptionExit}
        >
          <Description>
            <div>
              <h4>This product is great for...</h4>
              <p>You, your parents, friends, colleagues, sworn enemies</p>
            </div>
            <div>
              <h4>You might want to buy this product if...</h4>
              <p>You enjoy being seen as "of the moment" or "with it"</p>
            </div>
          </Description>
        </Flipped>
      </div>
    </Container>
  )
}

export default ItemView
