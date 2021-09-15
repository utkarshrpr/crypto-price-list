import React from 'react';

const Coin = ({ name, image, symbol, price, marketCap, priceChangeDay, volume }) => {
    var priceChangeDayTag;
    if (priceChangeDay < 0)
        priceChangeDayTag = <td style={{color: '#f00606'}}>{priceChangeDay.toFixed(2)}%</td>;
    else
        priceChangeDayTag = <td style={{color: '#11d811' }}>{priceChangeDay.toFixed(2)}%</td>;

    return (
        
        <tr>
            <td>
                <img src={image} style={{width: '20px', height: '20px', marginRight: '10px'}} />
                <span style={{fontSize: '13px'}}><b>{name} </b></span>
                <span style={{fontSize: '13px', color: '#808a9d'}}>{symbol.toUpperCase()}</span>
            </td>
            {priceChangeDayTag}
            <td>${price.toFixed(2)}</td>
            <td>${volume.toLocaleString()}</td>
            <td>${marketCap.toLocaleString()}</td>
        </tr>
        
    )
}

export default Coin
