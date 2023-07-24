import {
    SET_LENGTH,
    ADD_WEIGHT,
    REMOVE_WEIGHT
} from './actions';

const initialState = {
    length: '',
    weights: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LENGTH:
            return {
                ...state,
                length: action.length
            };
        case ADD_WEIGHT:
            return {
                ...state,
                weights: [...state.weights, action.weight]
            };
        case REMOVE_WEIGHT:
            return {
                ...state,
                weights: state.weights.filter(weight => weight !== action.weight)
            };
        default:
            return state;
    }
}

export default reducer;