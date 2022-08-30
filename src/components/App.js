import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup';
import {CurrentUserContext} from './CurrentUserContext'
import { api } from '../utils/utils';


function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setIsSelectedCard] = React.useState(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({name:'', about:''})

  React.useEffect(() => {
      api.getUserInfo()
      .then((user) => {
        setCurrentUser(user)
      })
  },[])

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
    console.log()
    api.editUserInfo(name, about)
    .then(userUpdate => setCurrentUser(userUpdate))
    closeAllPopups()
  }

  return (

    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main  onAddPlace={handleAddPlaceClick} 
              onEditAvatar={handleEditAvatarClick} 
              onEditProfile={handleEditProfileClick} 
              onCardClick={handleCardClick}/>
        <Footer />


        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <PopupWithForm typePopup="add-photo" 
                      titlePopup="Новое место" 
                      isOpened={isAddPlacePopupOpen} 
                      onClose={closeAllPopups} 
                      buttonText="Добавить">

          <input type="text" className="popup__input" name="name" placeholder="Название" minLength="2" maxLength="30" required></input>
          <input type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required></input>

        </PopupWithForm>

        <PopupWithForm typePopup="update-avatar" 
                      titlePopup="Обновить аватар" 
                      isOpened={isEditAvatarPopupOpen} 
                      onClose={closeAllPopups} 
                      buttonText="Обновить">

          <input type="url" className="popup__input" name="useravatar" placeholder="Ссылка на картинку аватара" required></input>

        </PopupWithForm>

        <PopupWithForm typePopup="confirmation" 
                      titlePopup="Вы уверены?"  
                      onClose={closeAllPopups} 
                      buttonText="Да"/>
        

        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpened={isImagePopupOpen}/>
      </CurrentUserContext.Provider> 

    </div>

  );
}

export default App;
