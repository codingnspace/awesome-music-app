import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

import { getArtistTopAlbums, getArtistTopSongs, getArtist } from '../selectors'
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
        console.log(this.props, 'this.props')
        const { artist, topAlbums, topSongs } = this.props
        const topAlbumsUI = topAlbums.map(topAlbum => (
            <article style={{width: '30%'}}>
                <picture>
                    <img src={topAlbum.cover} alt={topAlbum.name} style={{width: '100%', display: 'inline-block'}} />
                </picture>
            </article>
        ))

        const topSongsUI = topSongs.map(topSong => {
            return (
                <div className="song" key={topSong.id}>
                  <div className="song-info">
                    <h4 className="song-name">{topSong.name}</h4>
                    <h5>{topSong.albumName}</h5>
                  </div>
                  <div className="song-length">{topSong.length}</div>
                </div>
            )
        })


        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img alt={artist.name} src={artist.img} key={artist.id} style={{width: '20%', borderRadius: '50%'}} />
                </div>
                <h3>{artist.name}</h3>
                <p>{`${artist.num_of_listeners} Listeners`}</p>
                <section className="top-songs">
                    <h4>Top Songs</h4>
                    <Link to={`/songs/${artist.name}`}>
                        <h5>See All Songs</h5>
                    </Link>
                    <div>
                        {topSongsUI}
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