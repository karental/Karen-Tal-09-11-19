const INITIAL_STATE = {
    favoritesWeather: [],

}

export default function favoritesWeatherReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_FAVORITES_WEATHER':

            return {
                ...state,
                favoritesWeather: action.favoritesWeather
            }
        case 'REMOVE_FAVORITES_WEATHER':

            return {
                ...state,
                favoritesWeather: action.favoritesWeather
            }
        default:
            return state
    }
}
