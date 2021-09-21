import React from 'react';
import GridCard from './GridCard';
import './trendingGrid.css';
import {useSelector} from 'react-redux';

const TrendingGrid = () => {

    const allCoins = useSelector((state) => state.allCoins);
    const trendingCoins = [...allCoins];

    trendingCoins.sort(function (a, b) {
        return a.price_change_percentage_24h - b.price_change_percentage_24h;
    });
    let topLosers = trendingCoins.slice(0, 3);
    let topGainers = trendingCoins.slice(trendingCoins.length - 3).reverse();

    let gridItems = [
        {
            id: 1,
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Eo_circle_green_arrow-up.svg',
            heading: 'Top Gainers (24h)',
            itemList: topGainers
        },
        {
            id: 2,
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Eo_circle_red_arrow-down.svg',
            heading: 'Top Losers (24h)',
            itemList: topLosers
        },
        {
            id: 3,
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Eo_circle_red_arrow-down.svg',
            heading: 'Top Losers (24h)',
            itemList: topLosers
        }
    ];

    return (
        <>
            <div id="trending-grid">
                {gridItems.map(oneItem => {
                    return (
                        <GridCard
                            key={oneItem.id}
                            logo={oneItem.logo}
                            heading={oneItem.heading}
                            itemList={oneItem.itemList}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default TrendingGrid
