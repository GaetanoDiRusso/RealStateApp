import * as actionTypes from '../constants/actionTypes'
import * as api from '../api/properties'

export const createProperty = (propertyInfo) => async (dispatch) => {
    try {
        const { data } = await api.createProperty(propertyInfo);

        dispatch({type: actionTypes.CREATE_PROPERTY, payload: data});
    } catch (error) {
        console.error(error)
        console.error(error.response.data)
    }
}