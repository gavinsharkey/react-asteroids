import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import PlayerContainer from './PlayerContainer'
import Asteroid from './Asteroid'

export default class AsteroidsContainer extends Component {
  state = {
    playerTop: 400,
    playerLeft: 420,
    asteroids: []
  }

  getRandomLeft = () => {
    return Math.floor(Math.random() * Math.floor(900))
  }

  handleKeyDown = e => {
    if (e.key === 'ArrowLeft') {
      this.setState(prevState => ({
        playerLeft: prevState.playerLeft - 5
      }))
    } else if (e.key === 'ArrowRight') {
      this.setState(prevState => ({
        playerLeft: prevState.playerLeft + 5
      }))
    }
  }

  handleRemoveAsteroid = id => {
    console.log('remove')
    this.setState(prevState => ({
      asteroids: prevState.asteroids.filter(asteroid => asteroid.id !== id)
    }))
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
    this.asteroidInterval = setInterval(() => {
      this.setState(prevState => ({
        asteroids: [...prevState.asteroids, { id: uuid(), left: this.getRandomLeft() }]
      }))
    }, 5000)
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
    clearInterval(this.asteroidInterval)
  }

  render() {
    return (
      <div>
        <button onClick={this.props.endGame} className='exit-button'>Exit</button>
        { this.state.asteroids.map(asteroid => (
          <Asteroid
            handleRemoveAsteroid={this.handleRemoveAsteroid}
            key={asteroid.id}
            id={asteroid.id}
            left={asteroid.left}
            playerLeft={this.state.playerLeft}
            playerTop={this.state.playerTop}
          />
        )) }
        <PlayerContainer left={this.state.playerLeft} top={this.state.playerTop} />
      </div>
    )
  }
}
