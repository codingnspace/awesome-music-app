import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

import { getArtistAlbums, getArtist } from '../selectors'
import '../App.css';

class Albums extends Component {
    
    render() {
        const { artist, albums } = this.props
        const albumsUI = albums.map(album => (
            <article style={{width: '30%', marginBottom: '40px'}}>
                <picture>
                    <img src={album.cover} alt={album.name} style={{width: '100%', display: 'inline-block'}} />
                </picture>
            </article>
        ))

        return (
            <div>
                <h3 style={{marginBottom: '0', textAlign: 'center'}}>{`All Albums by ${artist.name}`}</h3>
                <Link style={{textAlign: 'center'}} to={`/artist/${artist.name}`}>
                    <h5>{`See more ${artist.name}`}</h5>
                </Link>
                <section className="albums">
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