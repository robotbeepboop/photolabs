import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const mappedPhotos = props.photos.map((photo) => {
    return <PhotoListItem 
    username={ photo.user.username }
    imageSource={ photo.urls.thumb }
    key={ photo.id }
    id={ photo.id }
    hideUserName={ photo.hideUserName }
    likes={ props.likes }
    checkLikes={ props.checkLikes }/>;
  });

  return (
    <ul className="photo-list">
    { mappedPhotos }
    </ul>
  ); 
}

export default PhotoList
