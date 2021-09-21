
const initialState = {
    allCoins: []
}

const reducer = (previousState = initialState, action) => {
    // const {type, payLoad} = action;
    switch(action.type) {
        case 'GET_COINS_REQUESTED':
            return {
                ...previousState
            }
        case 'GET_COINS':
            return {
                ...previousState,
                allCoins: action.payLoad
            }
        default:
            return previousState

    }
}

export default reducer