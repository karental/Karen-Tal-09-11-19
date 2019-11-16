const INITIAL_STATE = {
    myFavorites: [],
}

export default function getFavoritesFromLocalStorage(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_FAVORITES':
            return {
                ...state,
                myFavorites: action.myFavorites
            }
        default:
            return state
    }
}
