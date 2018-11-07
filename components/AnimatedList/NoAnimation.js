import React, { Component } from "react"
const listData = [...Array(3).keys()]

const ListItem = ({ index, onClick }) => (
  <div className="listItem" onClick={() => onClick(index)}>
    <div className="listItemContent">
      <div className="avatar" />
      <div className="description">
        {listData.map(i => (
          <div key={i} />
        ))}
      </div>
    </div>
  </div>
)

const ExpandedListItem = ({ index, onClick }) => (
  <div className="expandedListItem" onClick={() => onClick(index)}>
    <div className="expandedListItemContent">
      <div className="avatar avatarExpanded" />
      <div className="description">
        {listData.map(i => (
          <div key={i} />
        ))}
      </div>
      <div className="additional-content">
        {listData.map(i => (
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
          {listData.map(index => {
            return (
              <li key={index}>
                {index === this.state.focused ? (
                  <ExpandedListItem
                    index={this.state.focused}
                    onClick={this.onClick}
                  />
                ) : (
                  <ListItem index={index} key={index} onClick={this.onClick} />
                )}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
