export const getArtists = state => state.data.artists

export const getArtist = state => artistName => getArtists(state).find(artist => artist.name === artistName)

export const getArtistAlbums = state => artistName => getArtist(state)(artistName).albums


export const getArtistTopAlbums = state => artistName => {
    return (
        getArtistAlbums(state)(artistName)
            .sort((a,b) => {
                const streamingRankA = parseInt(a.num_of_streams, 10)
                const streamingRankB = parseInt(b.num_of_streams, 10)
                return (streamingRankA < streamingRankB) ? -1 : (streamingRankA > streamingRankB) ? 1 : 0
            })
            .slice(0,3)
    )
}


export const getArtistSongs = state => artistName =>  {
    return (
        getArtistAlbums(state)(artistName)
            .reduce((accum, cur) => {
                cur.songs.forEach(song => {
                    song.albumName = cur.name
                    song.albumCover = cur.cover
                })
                return accum.concat(cur.songs)
            }, [])
    )
}

export const getSearchTerm = state => state.data.search

export const getArtistFilteredSongs = state => artistName => search => {
    const searchTerm = search
    if (search === '') {
        return getArtistSongs(state)(artistName)
    } else {
        console.log('in selector', searchTerm)
        return (
            getArtistSongs(state)(artistName)
            .filter(song => {
                console.log(song.name.toLowerCase().includes(searchTerm.toLowerCase()), searchTerm)
                return song.name.toLowerCase().includes(searchTerm.toLowerCase())
            })
        )
    }
    
}


export const getArtistTopSongs = state => artistName => {
    return (
        getArtistSongs(state)(artistName)
            .sort((a,b) => {
                const streamingRankA = parseInt(a.num_of_streams, 10)
                const streamingRankB = parseInt(b.num_of_streams, 10)

                return (streamingRankA < streamingRankB) ? -1 : (streamingRankA > streamingRankB) ? 1 : 0
            })
            .slice(0,3)
    )
}
