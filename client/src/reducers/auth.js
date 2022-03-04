import * as actionTypes from '../constants/actionTypes';

export default (state = {authData: null, errorMessage: null}, action) => {
    switch (action.type){
        case actionTypes.LOGIN:
        case actionTypes.UPDATE_PROFILE:
            localStorage.setItem('profile', JSON.stringify(action?.user));
            return {...state, authData: action.user, errorMessage: null}
        case actionTypes.LOGOUT:
            localStorage.removeItem('profile');
            return {...state, authData: action.user, errorMessage: null}
        case actionTypes.AUTH_ERROR:
            return {...state, authData: null, errorMessage: action.errorMessage}
        default:
            return {authData: JSON.parse(localStorage.getItem('profile'))?.token};
    }
}