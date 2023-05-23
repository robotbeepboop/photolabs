import React, { useState } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [liked, setLiked] = useState(false);

  const clickHandler = () => {
    setLiked(!liked);
    props.toggleFavs(photo_id);
  };

  return (
    <div className="photo-list--fav-icon" onClick={ clickHandler }>
      <FavIcon fill={ liked ? '#800020' : '#D3D3D3' } />
    </div>
  );
}

export default PhotoFavButton;
