import React from 'react';
import '../styles/TopicListItem'

const TopicListItem = (props) => {
  /*extract the label for the topic */
  const { id, label, link } = props;

  return (
    <div className="topic-list--item">
      <a key={ id } id={ id } label={ label } href={ link }>
        <h3>{ label }</h3>
      </a>
    </div>);
  
}

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder' 
}
export default TopicListItem
