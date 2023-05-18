import React from 'react';
import '../styles/TopicListItem'

const TopicListItem = (props) => {
  /*extract the label for the topic */
  <div className="topic-list--item">
    <h3>{ props.label }</h3>
  </div>
}

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder' 
}
export default TopicListItem
