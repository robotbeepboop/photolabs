import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = () => {
  const mappedPhotos = props.photos.map((photo) => {
    return <PhotoListItem 
    username={ photo.username }
    imageSource={ photo.imageSource }
    id={ photo.id }
    hideUserName={ photo.hideUserName }/>;
  });

  <ul className="photo-list">
    { mappedPhotos }
  </ul>
}

PhotoList.defaultProps = {
  photos: [
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 1,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 2,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 3,
     hideUserName: false,
    }
   ]
}

export default PhotoList
