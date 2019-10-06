import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { connect } from 'react-redux'
import {artists} from './data'
import {setArtists} from './actions'
import ArtistList from './components/ArtistList'

import ArtistDetailView from './components/Artist'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.setArtists(artists)
  }
  render() {

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
      <div className="song" key={songId}>
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
    <Router>
      <div className="App">
        {/* <ArtistList artists={artists} /> */}

        {/* <h3>Song</h3>
        {songUI}

        <h3>Song List</h3>
        {songList}

        <h3>Album UI</h3>
        {albumUI} */}

        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route exact path="/">
            <ArtistList artists={artists} />
          </Route>
          <Route path="/artist/:name" render={(props) => <ArtistDetailView  {...props} />} />
        </Switch>
      </div>
    </Router>
  );
  }
}

export default connect(
  null,
  {setArtists}
)(App);
