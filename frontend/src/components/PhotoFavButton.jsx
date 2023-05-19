import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  /* deconstruction array for usestate, default is false so that a user may 'like' it later*/
  const { id, likes, checkLikes } = props;
  return (
    /* change fav state to true and make the favicon red */
    <div className="photo-list--fav-icon" onClick={() => checkLikes(id)}>
      <FavIcon fill={ likes ? '#800020' : '#D3D3D3' } />
    </div>
  );
}

export default PhotoFavButton;
