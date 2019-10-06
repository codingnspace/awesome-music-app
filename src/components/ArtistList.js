import React from 'react'
import { MiniArtistView } from './Artist'
import { Link } from "react-router-dom"

import '../App.css';

const ArtistList = ({artists}) => {
    const artistList = artists
        .sort((a,b) => {
            const textA = a.name;
            const textB = b.name;
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
        .map(artist => {
            return (
                <Link to={`/artist/${artist.name}`} key={artist.id} >
                    <MiniArtistView artist={artist} />
                </Link>
            )
        })

  return (
      <div className="ArtistList">
        <h3>Artists</h3>
        {artistList}
      </div>
  );
}

export default ArtistList;
