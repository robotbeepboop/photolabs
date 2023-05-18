import React from 'react';
import '../styles/PhotoListItem.scss';
/* make photo able to be 'liked' */
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  /*{ props.hideUserName === true && <div><p>{ props.imageSource }</p><p>{ props.id }</p></div>}
  call the fav button function*/
  <>
    <PhotoFavButton />
    <img className='photo-list-item' src={ props.imageSource } />
  </>
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${ process.env.PUBLIC_URL }/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem
