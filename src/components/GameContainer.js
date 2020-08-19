import React, { Component } from 'react'
import MenuContainer from './MenuContainer'
import AsteroidsContainer from './AsteroidsContainer'

export default class GameContainer extends Component {
  state = {
    isPlaying: false
  }

  startGame = () => {
    this.setState({
      isPlaying: true
    })
  }

  endGame = () => {
    this.setState({
      isPlaying: false
    })
  }

  render() {
    return (
      <div className="game-container">
        { this.state.isPlaying 
        ? <AsteroidsContainer endGame={this.endGame} />
        : <MenuContainer startGame={this.startGame} /> 
        }
      </div>
    )
  }
}
