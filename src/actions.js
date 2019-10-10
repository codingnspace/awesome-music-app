/*
 * action types
 */

export const SET_ARTISTS = 'SET_ARTISTS'
export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER'


/*
 * action creators
 */

export function setArtists(artists) {
  return { type: SET_ARTISTS, artists }
}

export function setSearchFilter(searchTerm) {
  return { type: SET_SEARCH_FILTER, searchTerm}
}

