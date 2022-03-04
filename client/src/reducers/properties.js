import * as actionTypes from '../constants/actionTypes';

export default (state = {properties: []}, action) => {
    switch (action.type){
        case actionTypes.CREATE_PROPERTY:
            state.properties.push(action.payload)
            return state
        default:
            return state;
    }
}