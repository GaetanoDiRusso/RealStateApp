import { combineReducers } from 'redux'

import properties from './properties'
import auth from './auth'

export const reducers = combineReducers({properties, auth})