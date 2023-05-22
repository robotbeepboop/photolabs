import React, { useCallback, useState } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  //state for whether a photo is liked by the user or not
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="photo-list--fav-icon" onClick={() => setIsLiked(!isLiked)}>
      <FavIcon fill={ isLiked ? '#800020' : '#D3D3D3' } />
    </div>
  );
}

export default PhotoFavButton;
