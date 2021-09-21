export const apiCallAction = (coins) => {
    return {
        type: 'GET_COINS',
        payLoad: coins
    }
}

// export default apiCallAction