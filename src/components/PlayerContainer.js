import React, { Component } from 'react'

export default class PlayerContainer extends Component {
  render() {
    return (
      <div style={{top: this.props.top, left: this.props.left}} className="player">
        <svg width='30' height='50'>
          <polygon points="15,0 0,50 15,40 30,50" style={{stroke: "white", strokeWidth: 2, fill: 'none'}} />
        </svg>
      </div>
    )
  }
}
