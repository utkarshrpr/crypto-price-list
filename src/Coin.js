import React from 'react';

const Coin = ({ name, image, symbol, price, marketCap, priceChange, volume }) => {
    var priceChangeTag;
    if (priceChange < 0)
        priceChangeTag = <td style={{color: '#f00606', width: '12%' }}>{priceChange.toFixed(2)}%</td>;
    else
        priceChangeTag = <td style={{color: '#11d811' }}>{priceChange.toFixed(2)}%</td>;

    return (
        
        <tr>
            <td>
                <img src={image} style={{width: '20px', height: '20px', marginRight: '10px'}} />
                <span style={{fontSize: '13px'}}><b>{name} </b></span>
                <span style={{fontSize: '13px', color: '#808a9d'}}>{symbol.toUpperCase()}</span>
            </td>
            {priceChangeTag}
            <td>${price.toFixed(2)}</td>
            <td>${volume.toLocaleString()}</td>
            <td>${marketCap.toLocaleString()}</td>
        </tr>
        
    )
}

export default Coin
