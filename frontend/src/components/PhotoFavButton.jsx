import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  /* deconstruction array for usestate, default is false so that a user may 'like' it later*/
  const [ fav, setFav ] = useState(false);
  
  return (
    /* change fav state to true and make the favicon red */
    <div className="photo-list--fav-icon" onClick={(() => {setFav(!fav);, [ fav ])}>
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={ fav === true ? '#800020' : '#D3D3D3' } />
      </div>
    </div>
  );
}

export default PhotoFavButton;
