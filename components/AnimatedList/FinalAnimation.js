import React, { Component } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"

const shouldFlip = index => (prev, current) => {
  return index === prev || index === current
}

const listData = [
  {
    color: "blue"
  },
  {
    color: "purple"
  },
  {
    color: "warm-purple"
  }
]
const ListItem = ({ index, onClick, color }) => (
  <Flipped
    flipId={`listItem-${index}`}
    stagger="card"
    shouldInvert={shouldFlip(index)}
  >
    <div
      className="listItem"
      onClick={() => onClick(index)}
      style={{
        backgroundColor: `var(--${color})`
      }}
    >
      <Flipped inverseFlipId={`listItem-${index}`}>
        <div className="listItemContent">
          <Flipped
            flipId={`avatar-${index}`}
            stagger="card-content"
            shouldFlip={shouldFlip(index)}
          >
            <div className="avatar" />
          </Flipped>
          <div className="description">
            {listData.slice(0, 3).map((d, i) => (
              <Flipped
                flipId={`description-${index}-${i}`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
              >
                <div />
              </Flipped>
            ))}
          </div>
        </div>
      </Flipped>
    </div>
  </Flipped>
)

const ExpandedListItem = ({ index, onClick, color }) => (
  <Flipped
    flipId={`listItem-${index}`}
    stagger="card"
    onStart={el =>
      setTimeout(() => {
        el.classList.add("animated-in")
      }, 600)
    }
  >
    <div
      className="expandedListItem"
      onClick={() => onClick(index)}
      style={{
        backgroundColor: `var(--${color})`
      }}
    >
      <Flipped inverseFlipId={`listItem-${index}`}>
        <div className="expandedListItemContent">
          <Flipped flipId={`avatar-${index}`} stagger="card-content">
            <div className="avatar avatarExpanded" />
          </Flipped>
          <div className="description">
            {listData.slice(0, 3).map((d, i) => (
              <Flipped
                flipId={`description-${index}-${i}`}
                stagger="card-content"
              >
                <div />
              </Flipped>
            ))}
          </div>
          <div className="additional-content">
            {listData.slice(0, 3).map((d, i) => (
              <div key={i} />
            ))}
          </div>
        </div>
      </Flipped>
    </div>
  </Flipped>
)

export default class AnimatedList extends Component {
  state = { focused: null }
  onClick = index => {
    this.setState({
      focused: this.state.focused === index ? null : index
    })
  }

  render() {
    return (
      <Flipper
        flipKey={this.state.focused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{
          card: {
            reverse: this.state.focused !== null,
            speed: 0.5
          }
        }}
        decisionData={this.state.focused}
      >
        <ul className="list">
          {listData.map(({ color }, index) => {
            return (
              <li key={index}>
                {index === this.state.focused ? (
                  <ExpandedListItem
                    index={this.state.focused}
                    onClick={this.onClick}
                    color={color}
                  />
                ) : (
                  <ListItem
                    index={index}
                    onClick={this.onClick}
                    color={color}
                  />
                )}
              </li>
            )
          })}
        </ul>
      </Flipper>
    )
  }
}
