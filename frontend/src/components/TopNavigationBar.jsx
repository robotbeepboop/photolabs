import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={ props.topics } selectTopic={ props.selectTopic } />
      <FavBadge isFavPhotoExist={ props.favPhotoExist } />
    </div>
  )
}

export default TopNavigation;
