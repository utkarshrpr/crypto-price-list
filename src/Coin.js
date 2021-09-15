import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './components/columns';
import './components/table.css';

const Coin = (props) => {

    // const tableColumns = useMemo(() => COLUMNS, []);
    // const tableData = useMemo(() => data, []);
    const tableColumns = COLUMNS;
    const tableData = props.data;
    // console.log(props);

    const tableInstance = useTable({
        columns: tableColumns,
        data: tableData
    });
    // console.log(tableInstance);
    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}

                        </tr>

                    ))}

            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}

                            </tr>
                        )
                    })}

            </tbody>
        </table>

    );

    // var priceChangeTag;
    // if (priceChange < 0)
    //     priceChangeTag = <td style={{color: '#f00606', width: '12%' }}>{priceChange.toFixed(2)}%</td>;
    // else
    //     priceChangeTag = <td style={{color: '#11d811' }}>{priceChange.toFixed(2)}%</td>;

    // return (
    //     <div>

    //      {coins.map(coin => {
    //        return(
    //         <Coin
    //          key={coin.id}
    //          name={coin.name}
    //          image={coin.image}
    //          symbol={coin.symbol}
    //          marketCap={coin.market_cap}
    //          price={coin.current_price}
    //          priceChange={coin.price_change_percentage_24h}
    //          volume={coin.total_volume}
    //          />
    //        )
    //      })
    //      }

    //     </div>
    //   );

    // return (

    //     <tr>
    //         <td>
    //             <img src={image} style={{width: '20px', height: '20px', marginRight: '10'}} />
    //             <span style={{fontSize: '13px'}}><b>{name} </b></span>
    //             <span style={{fontSize: '13px', color: '#808a9d'}}>{symbol.toUpperCase()}</span>
    //         </td>
    //         {priceChangeTag}
    //         <td>${price.toFixed(2)}</td>
    //         <td>${volume.toLocaleString()}</td>
    //         <td>${marketCap.toLocaleString()}</td>
    //     </tr>

    // );
}

export default Coin
