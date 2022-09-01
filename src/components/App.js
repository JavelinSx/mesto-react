import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

import {CurrentUserContext} from './CurrentUserContext'
import { api } from '../utils/utils';


function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setIsSelectedCard] = React.useState(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({name:'empty', about:'empty', avatar:'empty'})
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getInitialCards()
    .then(cards => setCards(cards))
  }, [])

  React.useEffect(() => {
      api.getUserInfo()
      .then((user) => {
        setCurrentUser(user)
      })
  },[])

  function handleCardLike(card){
    const isLiked = card.likes.some(like => like._id === currentUser._id)
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
    })
  }

  function handleCardDelete(card){
    api.deleteCard(card._id)
    setCards((cards) => cards.filter((c) => c._id !== card._id))
  }

  const handleAddPlace = ({name, link}) => {
    api.addCard(name,link)
    .then(newCard => {
      setCards([newCard, ...cards])
    })
    closeAllPopups()
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }
  const handleEditProfileClick = () => {

    setIsEditProfilePopupOpen(true)
  }
  const handleCardClick = (card) => {
    setIsImagePopupOpen(true)
    setIsSelectedCard(card)
  }

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsImagePopupOpen(false)
  }

  const handleUpdateUser = (name, about) => {
    api.editUserInfo(name, about)
    .then(userUpdate => setCurrentUser(userUpdate))
    closeAllPopups()
  }
  
  const handleUpdateAvatar = ({avatar}) => {
      api.editAvatar(avatar)
      .then(userUpdate => setCurrentUser({
        name:currentUser.name,
        about:currentUser.about,
        avatar:userUpdate.avatar}))
      closeAllPopups()
  }


  return (

    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>

        <Header />

        <Main  onAddPlace={handleAddPlaceClick} 
               onEditAvatar={handleEditAvatarClick} 
               onEditProfile={handleEditProfileClick} 
               cards={cards}
               onCardClick={handleCardClick}
               onCardLike={handleCardLike}
               onCardDelete={handleCardDelete}
        />

        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} 
                          onClose={closeAllPopups} 
                          onUpdateUser={handleUpdateUser} 
        />

        <EditAvatarPopup  isOpen={isEditAvatarPopupOpen} 
                          onClose={closeAllPopups} 
                          onUpdateAvatar={handleUpdateAvatar} 
        />

        <AddPlacePopup isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopups}
                       onAddPlace={handleAddPlace} 
        />

        <PopupWithForm typePopup="confirmation" 
                      titlePopup="Вы уверены?"  
                      onClose={closeAllPopups} 
                      buttonText="Да"
        />
        
        <ImagePopup card={selectedCard} 
                    onClose={closeAllPopups} 
                    isOpened={isImagePopupOpen}
        />
      </CurrentUserContext.Provider> 

    </div>

  );
}

export default App;
