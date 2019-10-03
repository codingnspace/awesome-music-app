import React, {Component} from 'react';
import { connect } from 'react-redux'
import {artists} from './data'
import {setArtists} from './actions'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.setArtists(artists)
  }
  render() {
    const artistList = artists
    .sort((a,b) => {
      const textA = a.name;
      const textB = b.name;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    .map(artist => {
    return (
      <div className="artist" style={{width: '188px', display: 'inline-block', height: '188px',}}>
        <img alt={artist.name} src={artist.img} key={artist.id} style={{height: '100%', width: '100%', borderRadius: '50%'}} />
        <p>{artist.name}</p>
      </div>
    )
  })

  // console.log(artists[0])
  const song = artists[1].albums[0].songs[0]
  const songUI = (
    <div className="song">
      <div className="song-number" style={{display: 'inline-block'}}>{song.id == 0 ? 1 : song.id +1}</div>
      <div className="song-name" style={{display: 'inline-block'}}>{song.name}</div>
      <div className="song-length" style={{display: 'inline-block'}}>{song.length}</div>
    </div>
  )

  const songList = artists[1].albums[0].songs.map(song => {
    const songId = parseInt(song.id, 10)
    return (
      <div className="song">
        <div className="song-number" style={{display: 'inline-block'}}>{songId === 0 ? 1 : songId +1}</div>
        <div className="song-name" style={{display: 'inline-block'}}>{song.name}</div>
        <div className="song-length" style={{display: 'inline-block'}}>{song.length}</div>
      </div>
    )
  })

  const album = artists[1].albums[0]
  const albumUI = (
    <div className="album">
      <div className="album-cover-container">
        <img src={album.cover} alt={album.name} />
      </div>
      <div className="album-info-songs-wrapper">
        <div className="album-info">
          <h3>{album.name}</h3>
          <h4>Album by {album.artist}</h4>
          <h5>{album.songs.length} songs - {album.release_year}</h5>
        </div>
        <div className="album-songs">
          {songList}
        </div>
      </div>
    </div>
  )
  return (
    <div className="App">
      <h3>Artists</h3>
      {artistList}

      <h3>Song</h3>
      {songUI}

      <h3>Song List</h3>
      {songList}

      <h3>Album UI</h3>
      {albumUI}
    </div>
  );
  }
}

export default connect(
  null,
  {setArtists}
)(App);
