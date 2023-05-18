import React from 'react';
import '../styles/TopicListItem'

const TopicListItem = (props) => {
  /*extract the label for the topic */
  const { id, label, link } = props;

  return (
    <div className="topic-list--item">
      <h3>{ label }</h3>
    </div>);
  
}

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder' 
}
export default TopicListItem
