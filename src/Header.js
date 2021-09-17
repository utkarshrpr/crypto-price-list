import React from 'react';
import './header.css';

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <div style={{ display: "flex" }}>
                        <div><img src="data:image/png;base64,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" />
                        </div>
                    </div>
                </nav>
                <nav>
                    <div style={{ display: "flex" }}>
                        <span id='navHeading'><b>Cryptos:
                            <span id='navHeadingData'> 11,870</span></b></span>
                        <span id='navHeading'><b>Exchanges:
                            <span id='navHeadingData'> 409</span></b></span>
                        <span id='navHeading'><b>Market Cap:
                            <span id='navHeadingData'> $2,077,698,587,271</span></b></span>
                        <span id='navHeading'><b>24h Vol:
                            <span id='navHeadingData'> $132,933,601,016</span></b></span>
                        <span id='navHeading'><b>Dominance:
                            <span id='navHeadingData'> BTC: 41.4% ETH: 18.8%</span></b></span>
                        <span id='navHeading'><b>ETH Gas:
                            <span id='navHeadingData'> 36 Gwei</span></b></span>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header
