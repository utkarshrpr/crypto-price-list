import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
// import markets from './markets.json';


function App() {
  // const coin_data = useMemo(() => markets, []); 
  const [coins, setCoins] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  // console.log(coins);

  useEffect(() => {
    async function getCoins() {
      await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
          setCoins(res.data);
          // console.log(res.data);
          setLoadingData(false);
        }).catch(err => {
          console.log(err);
        });
    }
    if (loadingData) {
      getCoins();
    }
  });
  // console.log(coins);
  return (
    <div>
      <Coin data={coins} />
    </div>
  );
}

export default App;