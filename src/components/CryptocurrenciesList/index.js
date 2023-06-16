import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {CryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachCurrency => ({
      currencyName: eachCurrency.currency_name,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
      id: eachCurrency.id,
      currencyLogo: eachCurrency.currency_logo,
    }))

    this.setState({CryptoList: formattedData, isLoading: false})
  }

  render() {
    const {CryptoList, isLoading} = this.state
    return (
      <ul className="currencies-list">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          CryptoList.map(eachCurrency => (
            <CryptocurrencyItem
              CryptoDetails={eachCurrency}
              key={eachCurrency.id}
            />
          ))
        )}
      </ul>
    )
  }
}

export default CryptocurrenciesList
