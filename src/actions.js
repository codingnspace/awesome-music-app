/*
 * action types
 */

export const SET_ARTISTS = 'SET_ARTISTS'


/*
 * action creators
 */

export function setArtists(artists) {
  return { type: SET_ARTISTS, artists }
}

