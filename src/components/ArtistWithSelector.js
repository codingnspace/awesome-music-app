import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

import { getArtistTopAlbums, getArtistTopSongs, getArtist } from '../selectors'

import { SongList } from './Songs'
import '../App.css';

export const MiniArtistView = ({artist}) => {
    return (
        <div className="mini-artist">
            <img alt={artist.name} src={artist.img} key={artist.id} />
            <p>{artist.name}</p>
        </div>
    )
}

class ArtistDetailView extends Component {
    
    render() {
        const { artist, topAlbums, topSongs } = this.props
        const topAlbumsUI = topAlbums.map(topAlbum => (
            <article style={{width: '30%'}} key={topAlbum.id+topAlbum.name}>
                <picture>
                    <img src={topAlbum.cover} alt={topAlbum.name} style={{width: '100%', display: 'inline-block'}} />
                </picture>
            </article>
        ))

        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img alt={artist.name} src={artist.img} key={artist.id} style={{width: '20%', borderRadius: '50%'}} />
                </div>
                <h3 style={{textAlign: 'center',marginBottom: 0}}>{artist.name}</h3>
                <p style={{textAlign: 'center',marginTop: '8px'}}>{`${artist.num_of_listeners} Listeners`}</p>
                <section className="top-songs">
                    <h4 style={{marginBottom: '0'}}>Top Songs</h4>
                    <Link to={`/songs/${artist.name}`}>
                        <h5 style={{marginTop: '8px'}}>See All Songs</h5>
                    </Link>
                    <div>
                        <SongList songs={topSongs} artist={artist} match={this.props.match} />
                    </div>
                </section>
                <section className="top-albums">
                    <h4>Top Albums</h4>
                    <Link to={`/albums/${artist.name}`}>
                        <h5>See All Albums</h5>
                    </Link>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        {topAlbumsUI}
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
        topAlbums: getArtistTopAlbums(state)(artistName),
        topSongs: getArtistTopSongs(state)(artistName)
    }
}

export default connect(mapStateToProps)(ArtistDetailView)