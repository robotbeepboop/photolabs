import React from 'react';
import FavBadge from './components/FavBadge';
import TopicList from './TopicList';
import topics from '../mocks/topics'
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge />
    </div>
  )
}

export default TopNavigation;
