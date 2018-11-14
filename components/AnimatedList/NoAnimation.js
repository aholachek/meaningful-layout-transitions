import React, { Component } from "react"

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
  <div
    className="listItem"
    onClick={() => onClick(index)}
    style={{
      backgroundColor: `var(--${color})`
    }}
  >
    <div className="listItemContent">
      <div className="avatar" />
      <div className="description">
        {listData.map((d, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  </div>
)

const ExpandedListItem = ({ index, onClick, color }) => (
  <div
    className="expandedListItem"
    onClick={() => onClick(index)}
    style={{
      backgroundColor: `var(--${color})`
    }}
  >
    <div className="expandedListItemContent">
      <div className="avatar avatarExpanded" />
      <div className="description">
        {listData.map((d, i) => (
          <div key={i} />
        ))}
      </div>
      <div className="additional-content">
        {listData.map((d, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  </div>
)

export default class AnimatedList extends Component {
  state = { focused: null }
  onClick = index =>
    this.setState({
      focused: this.state.focused === index ? null : index
    })
  render() {
    return (
      <div className="staggered-list-content">
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
      </div>
    )
  }
}
