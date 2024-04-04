import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const evenOrOdd = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <h1 className="count-heading">Count {count}</h1>
        <p className="count-verdict">Count is {evenOrOdd}</p>
        <button
          className="increment-btn"
          type="button"
          onClick={this.onIncrement}
        >
          Increment
        </button>
        <p className="note-text">Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
