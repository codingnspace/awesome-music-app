import React, {Component} from 'react';
import { connect } from 'react-redux'

import '../App.css';

export const MiniArtistView = ({artist}) => {
    return (
        <div className="artist" style={{width: '188px', display: 'inline-block', height: '188px',}}>
            <img alt={artist.name} src={artist.img} key={artist.id} style={{height: '100%', width: '100%', borderRadius: '50%'}} />
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
                  <div style={{display: 'inline-block'}}>
                    <h4 className="song-name">{topSong.name}</h4>
                    <h5>{topSong.albumName}</h5>
                  </div>
                  <div className="song-length" style={{float: 'right'}}>{topSong.length}</div>
                </div>
            )
        })

        console.log(topSongs, 'TOP SONGS')

        return (
            <div>
                <h3>{artist.name}</h3>
                <p>{`${artist.num_of_listeners} Listeners`}</p>
                <section className="top-songs">
                    <h4>Top Songs</h4>
                    <div>
                        {topSongsUI}
                    </div>
                </section>
                <section className="top-albums">
                    <h4>Top Albums</h4>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        {topAlbumsUI}
                    </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { artists } = state.data

    const artist = artists.find(artist => artist.name === ownProps.match.params.name)
    const albums = artist.albums
    const topAlbums = albums
        .sort((a,b) => {
            const streamingRankA = parseInt(a.num_of_streams, 10)
            const streamingRankB = parseInt(b.num_of_streams, 10)
            return (streamingRankA < streamingRankB) ? -1 : (streamingRankA > streamingRankB) ? 1 : 0
        })
        .slice(0,3)
    
    const songs = artist.albums.reduce((accum, cur) => {
        cur.songs.forEach(song => {
            song.albumName = cur.name
            song.albumCover = cur.cover
        })
        return accum.concat(cur.songs)
    }, [])

    const topSongs = songs
        .sort((a,b) => {
            const streamingRankA = parseInt(a.num_of_streams, 10)
            const streamingRankB = parseInt(b.num_of_streams, 10)

            return (streamingRankA < streamingRankB) ? -1 : (streamingRankA > streamingRankB) ? 1 : 0
        })
        .slice(0,3)

    return { 
        artist,
        topAlbums,
        topSongs
    }
}

export default connect(mapStateToProps)(ArtistDetailView)