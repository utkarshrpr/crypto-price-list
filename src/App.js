import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import TrendingGrid from './TrendingGrid';
import CoinTable from './CoinTable';
import {useDispatch} from 'react-redux';

const App = () => {

    const dispatch = useDispatch()

    const getCoins = async () => {
        try {
            const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            dispatch({type: 'GET_COINS', payLoad: resp.data})
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCoins();
        const interval = setInterval(() => {
            getCoins();
        }, 10000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <Header />
            <TrendingGrid key='trendingCoinsGrid' />
            <CoinTable />
        </>
    )
}


export default App
