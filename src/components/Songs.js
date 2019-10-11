import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

import { getSearchTerm, getArtist, getArtistFilteredSongs } from '../selectors'
import { setSearchFilter } from '../actions'
import '../App.css';

export function Song({song, artist}) {
    return (
        <div className="song" key={song.id}>
           <div className="song-info">
             <img src={song.albumCover} alt={artist.name} style={{width: '70px', display: 'inline-block', verticalAlign: 'top'}} />
             <div style={{display: 'inline-block', verticalAlign: 'top', marginLeft: '15px'}}>
                 <h4 className="song-name">{song.name}</h4>
                 <h5>{song.albumName}</h5>
             </div>
           </div>
           <div className="song-length">{song.length}</div>
         </div>
    )
}

export function SongList({songs, artist}) {
    return songs.map(song => (
        <Song song={song} key={song.id+song.name} artist={artist}  />
    ))
}

class Songs extends Component {
    handleChange = (e) => {
        this.props.setSearchFilter(e.target.value)
    }
      
    render() {
        const { artist, songs } = this.props

        return (
            <div style={{textAlign: 'center'}}>
                <h3 style={{marginBottom: '0'}}>{`See All of ${artist.name}'s  Songs`}</h3>
                <Link to={`/artist/${artist.name}`}>
                    <h5 style={{marginTop: '8px'}}>{`See More ${artist.name}`}</h5>
                </Link>
                <section className="all-songs">
                    <input type="text" id="filter"
                        placeHolder="Search songs..." 
                        onChange={this.handleChange}/>
                    <div>
                        <SongList songs={songs} artist={artist} />
                    </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const artistName = ownProps.match.params.name
    const search = getSearchTerm(state)
    return { 
        artist: getArtist(state)(artistName),
        songs: getArtistFilteredSongs(state)(artistName)(search),
        state
    }
}

export default connect(
    mapStateToProps,
    {setSearchFilter}
)(Songs)