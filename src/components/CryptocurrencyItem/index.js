import './index.css'

const CryptocurrencyItem = props => {
  const {CryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = CryptoDetails

  return (
    <li className="currencyItem-container">
      <img src={currencyLogo} alt={currencyName} className="cryptoIcon" />
      <p className="crypto_name">{currencyName}</p>
      <p className="usdValue">{usdValue}</p>
      <p className="euroValue">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
