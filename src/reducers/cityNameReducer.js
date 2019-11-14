const INITIAL_STATE = {
    cityName: '',
}

export default function getCityName(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'GET_CITY_NAME':
            return {
                ...state,
                cityName: action.cityName
            }
            default:
                return state
    }
}
