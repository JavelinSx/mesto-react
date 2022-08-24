import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'


function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setIsSelectedCard] = React.useState(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState()

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

  return (

    <div className="page">
      <Header />
      <Main  onAddPlace={handleAddPlaceClick} 
             onEditAvatar={handleEditAvatarClick} 
             onEditProfile={handleEditProfileClick} 
             onCardClick={handleCardClick}/>
      <Footer />

      <PopupWithForm typePopup="edit-profile" 
                     titlePopup="Редактировать профиль" 
                     isOpened={isEditProfilePopupOpen} 
                     onClose={closeAllPopups} 
                     buttonText="Сохранить">

        <input type="text" className="popup__input" name="username" placeholder="Имя" minLength="2" maxLength="40" required></input>
        <input type="text" className="popup__input" name="useractivity" placeholder="Деятельность на картинку" minLength="2" maxLength="200" required></input>

      </PopupWithForm>

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
  </div>

  );
}

export default App;
