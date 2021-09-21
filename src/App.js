import React, {useEffect} from 'react';
import Header from './Header';
import TrendingGrid from './TrendingGrid';
import CoinTable from './CoinTable';
import {useDispatch} from 'react-redux';
import {fetchUsers} from './redux/actions/action';

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers());
        const interval = setInterval(() => {
            dispatch(fetchUsers());
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
