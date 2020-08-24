import React, { useState } from 'react';

const ArtistForm = ({ addArtist }) => {

const [name, setName] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    addArtist(name);
    setName('');
}

  return (
    <form onSubmit={handleSubmit}>
        <label>Artist name:</label>
        <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="add artist" />
    </form>
  );
}

export default ArtistForm;