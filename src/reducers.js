import { combineReducers } from 'redux'
import {
  SET_ARTISTS,
  SET_SEARCH_FILTER
} from './actions'

const defaultState = {artists: [], search: ''}
function data(state = defaultState, action) {
  switch (action.type) {
    case SET_ARTISTS:
      return {
        ...state,
        artists: action.artists
      }
    
    case SET_SEARCH_FILTER:
      return {
        ...state,
        search: action.searchTerm
      }
    default:
      return state
  }
}

const musicApp = combineReducers({
  data
})

export default musicApp