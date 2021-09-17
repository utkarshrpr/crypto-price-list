import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CoinRow from './CoinRow';
import './coinTable.css';
import TrendingGrid from './TrendingGrid';

function CoinTable() {
  const [allCoins, setCoins] = useState([]);
  
  const getCoins = async () => {
    try {
      const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      setCoins(resp.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCoins();
    const interval=setInterval(() => {
      getCoins();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <>
     {/* <TrendingGrid trendingCoins={allCoins.slice(0,9)} key='trendingCoinsGrid' /> */}
     {allCoins.map(oneCoin => {
       return(
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
    </>
  );
}

export default CoinTable;