import React from 'react';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  /* initial props display */
  { props.hideUserName === true && <><p>{ props.imageSource }</p><p>{ props.id }</p></>}
  <>
    <p>{ props.username }</p>
    <p>{ props.imageSource }</p>
    <p>{ props.id }</p>
  </>
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${ process.env.PUBLIC_URL }/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem
