import { render } from '@testing-library/react';
import React from 'react';

class CoinRow extends React.Component {


    render() {
        var priceChangeDayTag;
        if (this.props.priceChangeDay < 0)
            priceChangeDayTag = <td style={{ color: '#f00606' }}>{this.props.priceChangeDay.toFixed(2)}%</td>;
        else
            priceChangeDayTag = <td style={{ color: '#11d811' }}>{this.props.priceChangeDay.toFixed(2)}%</td>;
        return (

            <tr>
                <td>
                    <img src={this.props.image} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    <span style={{ fontSize: '13px' }}><b>{this.props.name} </b></span>
                    <span style={{ fontSize: '13px', color: '#808a9d' }}>{this.props.symbol.toUpperCase()}</span>
                </td>
                {priceChangeDayTag}
                <td>${this.props.price.toFixed(2)}</td>
                <td>${this.props.volume.toLocaleString()}</td>
                <td>${this.props.marketCap.toLocaleString()}</td>
            </tr>

        );
    }
}

export default CoinRow
