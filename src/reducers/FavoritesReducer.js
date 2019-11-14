const INITIAL_STATE = {
    Favorites: [],
}

export default function setFavorites(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SET_FAVORITES':
            return {
                ...state,
                Favorites: action.Favorites
            }
            default:
                return state
    }
}

