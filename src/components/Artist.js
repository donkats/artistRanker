import React, { useState } from 'react';

const Artist = () => {

    const initialState = [
        { name: 'Prince', photo: 'photo1' },
        { name: 'Sting', photo: 'photo2' },
        { name: 'Michael Jackson', photo: 'photo3' }
    ];
    
    const [ artists, setArtists ] = useState( initialState );

  return (
    <div className="artist-container">
        <h2 className="main-heading">Artist app</h2>
        <div>
            { artists.length ? (
                artists.map( ( item, index ) =>  (
                    <Item
                    key={ `${item.text}-${index}`}
                    artist={item}
                    index={index}
                     />


                ) )
            ) : '' }
        </div>
    </div>
  );
}

export default Artist;
