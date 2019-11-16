const INITIAL_STATE = {
    isTrue: false,

}

export default function fromFavoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_TRUE':

            return {
                ...state,
                isTrue: action.isTrue
            }
        default:
            return state
    }
}
