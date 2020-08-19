import React, { Component } from 'react'

export default class Asteroid extends Component {
  state = {
    top: 0
  }

  handleMove = () => {
    this.setState(prevState => ({
      top: prevState.top + 5
    }), () => {
      if (this.state.top >= 455) {
        this.props.handleRemoveAsteroid(this.props.id)
      }
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.handleMove()
    }, 167)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="asteroid" style={{top: this.state.top, left: this.props.left}}>
        <svg width="44" height="44" >
          <circle cx='22' cy='22' r="20" fill="none" stroke="#eee" strokeWidth="2px" />
        </svg>
      </div>
    )
  }
}
