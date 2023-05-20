import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  /*extract the label for the topic */
  return (
    <div className="topic-list--item">
      <h3>{ props.label }</h3>
    </div>
  );
  
}
export default TopicListItem
