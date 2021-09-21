import React from 'react';
import CoinRow from './CoinRow';
import './coinTable.css';
// import store from './redux/store';
// import {connect} from 'react-redux';
import {useSelector} from 'react-redux';

function CoinTable() {
  
  const allCoins = useSelector((state) => state.allCoins)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>24H Change</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {allCoins.map(oneCoin => {
            return (
              <CoinRow
                key={oneCoin.id}
                name={oneCoin.name}
                image={oneCoin.image}
                symbol={oneCoin.symbol}
                marketCap={oneCoin.market_cap}
                price={oneCoin.current_price}
                priceChangeDay={oneCoin.price_change_percentage_24h}
                volume={oneCoin.total_volume}
              />
            )
          })}
        </tbody>
      </table>
    </>
  );
}

export default CoinTable;