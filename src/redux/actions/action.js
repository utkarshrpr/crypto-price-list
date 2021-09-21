import axios from 'axios';

const apiCallAction = (coins) => {
    return {
        type: 'GET_COINS',
        payLoad: coins
    }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            dispatch(apiCallAction(resp.data)) 
        } catch (err) {
            console.error(err.message);
        }

    }
}