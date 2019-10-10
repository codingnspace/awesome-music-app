import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { connect } from 'react-redux'
import {artists} from './data'
import {setArtists} from './actions'
import ArtistList from './components/ArtistList'
import Albums from './components/Albums'
import Songs from './components/Songs'

import ArtistDetailView from './components/ArtistWithSelector'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.setArtists(artists)
  }
  render() {

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route exact path="/">
            <h1 className="app-header">Sweet Music App</h1>
            <ArtistList artists={artists} />
          </Route>
          <Route path="/artist/:name" render={(props) => <ArtistDetailView  {...props} />} />
          <Route path="/albums/:name" render={(props) => <Albums  {...props} />} />
          <Route path="/songs/:name" render={(props) => <Songs {...props} />} />
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
