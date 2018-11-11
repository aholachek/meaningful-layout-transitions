import React from "react"
import { Flipped } from "react-flip-toolkit"
import styled, { keyframes } from "styled-components"
import anime from "animejs"

const fadeInLeft = keyframes`
  from {
    opacity:0;
    transform: translateX(75px);
  }
  to {
    opacity: 1;
    transform: translateX(0);

  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  animation: ${props =>
    props.type === "fade" ? `${fadeInLeft} 300ms forwards` : ""};
`

const BackgroundCard = styled.div`
  position: relative;
  width: 110%;
  left: 10%;
  border-radius: 4px;
  margin-bottom: 2rem;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  > div {
    background-color: ${props => props.color};
    background-image: ${props => `url("${props.img}")`};
    height: 8rem;
    width: 150%;
    ${"" /* height: 150%; */}
    position:relative;
  }
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
  animation: ${props =>
    props.type !== "fade" ? `${fadeInRight} 0500ms forwards` : ""};
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
    margin-bottom: 0.5rem;
  }
`

const onDescriptionEnter = (el, i) => {
  anime({
    targets: el,
    opacity: [0, 1],
    translateY: [50, 0],
    easing: "easeOutSine",
    duration: 500
  })
}

const onDescriptionExit = (el, i, removeComponent) => {
  anime({
    targets: el,
    opacity: 0,
    translateY: 50,
    easing: "easeOutSine",
    duration: 500,
    complete: removeComponent
  })
}

export const ItemView = ({ item, type }) => {
  return (
    <Container type={type}>
      <Quantity type={type}>
        <QuantityButton>+</QuantityButton>
        <div>1</div>
        Quantity
        <QuantityButton>-</QuantityButton>
      </Quantity>
      <div>
        <Flipped flipId={`${item.title}-card`} shouldFlip={() => !type}>
          <BackgroundCard color={item.color} img={item.img}>
            <Flipped inverseFlipId={`${item.title}-card`} scale>
              <div />
            </Flipped>
          </BackgroundCard>
        </Flipped>
        <Flipped flipId={`${item.title}-price`} shouldFlip={() => !type}>
          <Price>
            <h4>${item.price}</h4>
          </Price>
        </Flipped>
        <Flipped
          flipId={`${item.title}-description`}
          onAppear={onDescriptionEnter}
          onExit={(!type || type === "exit") && onDescriptionExit}
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
