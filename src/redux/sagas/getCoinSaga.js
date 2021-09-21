import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

const getApi = async () => {
    try {
        const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        // dispatch({type: 'GET_COINS', payLoad: resp.data})
        // dispatch(apiCallAction(resp.data));
        console.log(resp);
        return resp.data;
    } catch (err) {
        console.error(err.message);
    }
};

function* fetchCoins(action) {
    try {
        const coins = yield call(getApi);
        console.log("sadsasa" + coins)
        yield put({type: 'GET_COINS', payLoad: coins});
    } catch(err) {
        console.error(err.message);
    }
}

function* coinSaga() {
    yield takeEvery('GET_COINS_REQUESTED', fetchCoins);
}

export default coinSaga;

