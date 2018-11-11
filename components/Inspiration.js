import React, { Component } from "react"
import styled from "styled-components"

export default styled.div`
  z-index: 100;
  position: absolute;
  right: 3rem;
  bottom: 1rem;
  font-size: 1.25rem;
  a {
    margin-left: .5rem;
    color: ${props => (props.dark ? "var(--primary)" : "white")};
    text-decoration: none;
    font-weight: bold;
    transform: translateY(50%);
    &:visited {
      color: ${props => (props.dark ? "var(--primary)" : "white")};
    }
  }
`
