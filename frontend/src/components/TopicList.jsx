import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

//removed default props
const TopicList = (props) => {
  const mappedTopics = props.topics.map((topic) => {
    return (  
      <TopicListItem 
      key={ topic.id }
      label={ topic.label }
      link={ topic.link }/>
    )
  });

  return (
    <div className="top-nav-bar--topic-list">
      { mappedTopics }
    </div>
  );
};

export default TopicList
