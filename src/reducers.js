import { combineReducers } from 'redux'
import {
  SET_ARTISTS,
} from './actions'


function data(state = [], action) {
  switch (action.type) {
    case SET_ARTISTS:
      return {
        ...state,
        artists: action.artists
      }
    default:
      return state
  }
}

const musicApp = combineReducers({
  data
})

export default musicApp