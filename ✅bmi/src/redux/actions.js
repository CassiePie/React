export const SET_LENGTH = 'SET_LENGTH'
export const ADD_WEIGHT = 'ADD_WEIGHT'
export const REMOVE_WEIGHT = 'REMOVE_WEIGHT'


export function setLength(length) {
    
    return {
        type: SET_LENGTH,
        length
    }

};

export function addWeight(weight) {
    
    return {
        type: ADD_WEIGHT,
        weight
    }

};

export function removeWeight(weight) {
    
    return {
        type:REMOVE_WEIGHT,
        weight
    }

};