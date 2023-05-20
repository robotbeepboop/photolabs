import React from 'react';
import FavIcon from './FavIcon';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={ props.topics } />
      <FavIcon />
    </div>
  )
}

export default TopNavigation;
