import React from 'react';
import './trendingGrid.css';

function GridCard({logo, heading, itemList}) {
    return (
        <>
            <div id='grid-card'>
                <div style={{alignSelf: 'end', textAlign: 'right'}}><img src={logo} style={{ width: '15px', height: '15px' }} /></div>
                <div style={{alignSelf: 'end', paddingLeft: '10px'}}><b>{heading}</b></div>
                <div style={{alignSelf: 'end', color: 'rgb(56, 97, 251)', fontSize: '12px'}}>24h Change</div>
                {itemList.map((item, index) => {
                    return (
                        <>
                            <div style={{alignSelf: 'center', textAlign: 'right', fontSize: '12px', paddingRight: '5px'}}>
                                {index + 1}
                            </div>
                            <div style={{paddingLeft: '10px'}}>
                            <img src={item.image} style={{width:'15px', height:'15px', marginRight: '2px'}} />
                            <span style={{fontSize: '12px'}}> <b>{item.name}</b></span>
                            <span style={{fontSize: '10px', color: '#808a9d'}}> {item.symbol.toUpperCase()}</span>
                            </div>
                            <div style={{fontSize: '12px', color: item.price_change_percentage_24h < 0 ? '#f00606' : '#11d811'}}>
                                {item.price_change_percentage_24h.toFixed(2)}%
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    );
}

export default GridCard
