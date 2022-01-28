// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  banana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruitbg-container">
          <h1 className="title">
            Bob ate <span className="text">{mango}</span> mangoes{' '}
            <span className="text">{banana}</span> bananas
          </h1>
          <div className="bg-container2">
            <div className="mainbg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div>
                <button type="button" className="button" onClick={this.mango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="mainbg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div>
                <button type="button" className="button" onClick={this.banana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
