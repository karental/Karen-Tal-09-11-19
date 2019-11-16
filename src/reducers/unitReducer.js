const INITIAL_STATE = {
    unit: true
}

export default function weatherReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_UNIT':
            return {
                ...state,
                unit: action.unit
            }
        default:
            return state
    }
}
