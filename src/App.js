import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from './Coin';
import './app.css';


function App() {
  const [coins, setCoins] = useState([]); 
  
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
        // console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  });

  return (
    <React.Fragment>
     {coins.map(coin => {
       return(
        <Coin
         key={coin.id}
         name={coin.name}
         image={coin.image}
         symbol={coin.symbol}
         marketCap={coin.market_cap}
         price={coin.current_price}
         priceChangeDay={coin.price_change_percentage_24h}
         volume={coin.total_volume}
         />
       )
     })}  

    </React.Fragment>
  );
}

export default App;