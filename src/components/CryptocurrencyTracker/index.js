import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="App-bg">
        <h1 className="heading">CryptoCurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="bg-image"
        />
        <div className="list-container">
          <div className="table-heading-container">
            <h1 className="conversion">Currency Type</h1>
            <div className="conversion-heading-container">
              <h1 className="conversion">USD</h1>
              <h1 className="conversion">EURO</h1>
            </div>
          </div>
          <CryptocurrenciesList />
        </div>
      </div>
    )
  }
}

export default CryptocurrencyTracker
