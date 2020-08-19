import React, { Component } from 'react'

export default class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        <h1 className="game-title">Welcome To Asteroids</h1>
        <button onClick={() => this.props.startGame()} type="button" className="start-button">
          start
        </button>
      </div>
    )
  }
}
