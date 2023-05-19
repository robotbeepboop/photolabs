import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  /* use object or array to store likes [tried array, try object next] */
  const [ likes, setLikes ] = useState({});

  const checkLikes = (id) => {
    if (!likes[id]) {
      //if photo is not liked, add it to the likes object
      setLikes({ ...likes, [id]: true })
    }
    setLikes({ ...likes, [id]: false });
  };

  return(
    <div className="home-route">
      <TopNavigationBar topics={ props.topics } />
      <PhotoList photos={ props.photos } likes={ likes } checkLikes={ checkLikes } />
    </div>
  );
}
export default HomeRoute;
