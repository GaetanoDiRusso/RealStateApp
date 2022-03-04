import * as api from '../api/auth'
import * as actionTypes from '../constants/actionTypes'

export const signup = (formData) => async (dispatch) => {
    try {
        const {data} = await api.signUp(formData);

        console.log(data);
    } catch (error) {
        console.log(error)
        console.log(error.response.data)
    }
}

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.signIn(formData);

        dispatch({type: actionTypes.LOGIN, user: data});
        navigate('/');
    } catch (error) {
        console.log(error)
        dispatch({type: actionTypes.AUTH_ERROR, errorMessage: error.response.data})
    }
}

export const updateProfile = (userData)=> async (dispatch) => {
    try {
        const {data} = await api.updateProfile(userData);

        dispatch({type: actionTypes.UPDATE_PROFILE, user: data});
    } catch (error) {
        console.log(error);
        console.error(error.response.data);
    }
}

export const logout = (navigate)=> async (dispatch) => {
    dispatch({type: actionTypes.LOGOUT, user: null});
    navigate('/')
}