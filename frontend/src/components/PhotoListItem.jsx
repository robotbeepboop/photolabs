import React from 'react';
import '../styles/PhotoListItem.scss';
/* make photo able to be 'liked' */
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  /*{ props.hideUserName === true && <div><p>{ props.imageSource }</p><p>{ props.id }</p></div>}
  call the fav button function*/
  const { username, imageSource, key, id, hideUsername, likes, checkLikes } = props;
  <div className='photo-list--item'>
    <PhotoFavButton id={ id } likes={ likes } checkLikes={ checkLikes }/>
    <img className='photo-list--item-photo' src={ imageSource } />
  </div>
}

export default PhotoListItem
