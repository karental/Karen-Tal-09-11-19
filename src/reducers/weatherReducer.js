const INITIAL_STATE = {
    weather: [],
}

export default function weatherReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                weather: action.weather
            }
        default:
            return state
    }
}
