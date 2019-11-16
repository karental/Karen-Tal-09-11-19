const INITIAL_STATE = {
    cityKey: ''
}

export default function cityKeyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_KEY':
            return {
                ...state,
                CityKey: action.CityKey
            }
        default:
            return state
    }
}
