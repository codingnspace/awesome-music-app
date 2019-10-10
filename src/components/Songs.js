import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

import { getSearchTerm, getArtist, getArtistFilteredSongs } from '../selectors'
import { setSearchFilter } from '../actions'
import '../App.css';

function SongList({songs}) {
    return songs.map(song => (
        <div className="song" key={song.id+song.name}>
            <div class="song-info">
                <h4 className="song-name">{song.name}</h4>
                <h5>{song.albumName}</h5>
            </div>
            <div className="song-length">{song.length}</div>
        </div>
    ))
}
class Songs extends Component {
    handleChange = (e) => {
        this.props.setSearchFilter(e.target.value)
        // this.props.onChange(e.target.value)
    }
      
    render() {
        const { artist, songs } = this.props
        console.log('COMPONENT RE_RENDERED')
        console.log(this.props, 'SONGD')

        return (
            <div>
                <h3>{artist.name}</h3>
                <p>{`${artist.num_of_listeners} Listeners`}</p>
                <Link to={`/artist/${artist.name}`}>
                    <h5>{`See More ${artist.name}`}</h5>
                </Link>
                <section className="albums">
                    <h4>All Songs</h4>
                    <input type="text" id="filter" 
                        onChange={this.handleChange}/>
                    <div>
                        <SongList songs={songs} />
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