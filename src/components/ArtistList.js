import React, { useState } from 'react';
import ArtistForm from './ArtistForm';
import { v4 } from 'uuid';

const ArtistList = () => {

  const [artists, setArtists] = useState([
    { name: 'Prince', id: 1 },
    { name: 'Sting', id: 2 },
    { name: 'Michael Jackson', id: 3 }
  ]);

  const addArtist = (name) => {
    setArtists([...artists, { name, id: v4() }]);
  }

  return (
    <div className="artist-list">
      <ul>
        {artists.map(artist => {
          return (<li key={artist.id}>{artist.name}</li>)
        })}
      </ul>
      <ArtistForm addArtist={addArtist} />
    </div>
  );
}

export default ArtistList;
