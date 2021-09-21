import React, {useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import TrendingGrid from './TrendingGrid';
import CoinTable from './CoinTable';
import {useDispatch} from 'react-redux';
import {apiCallAction} from './redux/actions/action';

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(apiCallAction());
        const interval = setInterval(() => {
            dispatch(apiCallAction());
        }, 30000);
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
