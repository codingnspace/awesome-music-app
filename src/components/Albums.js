import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

import { getArtistAlbums, getArtist } from '../selectors'
import '../App.css';

class Albums extends Component {
    
    render() {
        const { artist, albums } = this.props
        const albumsUI = albums.map(album => (
            <article style={{width: '30%'}}>
                <picture>
                    <img src={album.cover} alt={album.name} style={{width: '100%', display: 'inline-block'}} />
                </picture>
            </article>
        ))

        return (
            <div>
                <h3>{artist.name}</h3>
                <p>{`${artist.num_of_listeners} Listeners`}</p>
                <Link to={`/artist/${artist.name}`}>
                    <h5>See All Albums</h5>
                </Link>
                <section className="albums">
                    <h4>Top Albums</h4>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        {albumsUI}
                    </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const artistName = ownProps.match.params.name

    return { 
        artist: getArtist(state)(artistName),
        albums: getArtistAlbums(state)(artistName),
    }
}

export default connect(mapStateToProps)(Albums)