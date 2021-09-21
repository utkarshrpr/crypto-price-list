
const initialState = {
    allCoins: []
}

const reducer = (previousState = initialState, action) => {
    const {type, payLoad} = action;
    switch(type) {
        case 'GET_COINS':
            return {
                ...previousState,
                allCoins: payLoad
            }
        default:
            return previousState

    }
}

export default reducer