export const COLUMNS =[
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Image',
        accessor: 'image',
        Cell: tableProps => (
            <img
              src={tableProps.row.original.image}
              width={20}
              alt='Player'
            />
          )
    },
    {
        Header: 'Symbol',
        accessor: 'symbol'
    },
    {
        Header: 'Price',
        accessor: 'current_price'
    },
    {
        Header: 'Price Change',
        accessor: 'price_change_percentage_24h'
    },
    {
        Header: 'Volume',
        accessor: 'total_volume'
    },
    {
        Header: 'Market Cap',
        accessor: 'market_cap'
    }
    
]