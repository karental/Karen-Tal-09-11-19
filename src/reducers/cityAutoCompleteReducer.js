const INITIAL_STATE = {
    citySuggetions: [],
}



export default function cityAutoCompleteReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SET_SUGGETIONS':
            return {
                ...state,
                citySuggetions: action.citySuggtions
            }
            default:
                return state
    }
}
