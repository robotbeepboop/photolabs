import { useState } from "react";

function useApplicationData() {
  const [ favourites, setFavourites ] = useState([]); //use array, not object. remember class example ***
  const [ viewModal, setViewModal ] = useState(false);
  const [ favPhotoExist, setFavPhotoExist ] = useState(false);
  
  
  const toggleFavs = (photo_id) => {
    const newFavourites = [];
    if  (!favourites.includes(photo_id)) {
      newFavourites = [...favourites, photo_id];
    } else {
      newFavourites = favourites.filter(photo => photo !== photo_id);
    }
    
    setFavourites(newFavourites);
  };
  
  const openModalHandler = () => {
     setViewModal(true);
  };
  
  const closeModalHandler = () => {
    setViewModal(false);
  };
  
  const appData = {
    favourites,
    setFavourites,
    viewModal,
    setViewModal,
    favPhotoExist,
    setFavPhotoExist,
    toggleFavs,
    openModalHandler,
    closeModalHandler
  };

  return appData;
}
