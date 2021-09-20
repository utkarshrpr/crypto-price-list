import React from 'react';
import axios from 'axios';
import Header from './Header';
import TrendingGrid from './TrendingGrid';
import CoinTable from './CoinTable';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            allCoins: [],             
        }
    }

    getCoins = async () => {
        try {
            let resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            this.setState({ allCoins: resp.data });
        } catch (err) {
            console.error(err.message);
        }
    }  

    componentDidMount() {
        this.getCoins();
        const interval = setInterval(() => {
            this.getCoins();
        }, 30000);
        return () => clearInterval(interval);
    }

    render() {
        return (
            <>
                <Header />
                <TrendingGrid trendingCoins={[...this.state.allCoins]} />
                <CoinTable coinList={this.state.allCoins} />
            </>
        );
    }
}

export default App
