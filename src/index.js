import React from 'react';
import ReactDOM from 'react-dom';
import CoinTable from './CoinTable';
import Header from './Header';
import TrendingGrid from './TrendingGrid';
import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('myHeader')
);

// ReactDOM.render(<React.StrictMode>
//   <TrendingGrid />
// </React.StrictMode>,
// document.getElementById('myGrid'));

ReactDOM.render(
  <React.StrictMode>
    <CoinTable />
  </React.StrictMode>,
  document.getElementById('myTable')
);

