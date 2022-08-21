import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';


function App() {
  
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true)
  }
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true)
  }
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true)
  }

  const closeAllPopups = () => {
    setAddPlacePopupOpen(false)
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
  }

  return (

      <div className="page">
        <Header />
        <Main  onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick}/>
        <Footer />

        <PopupWithForm typePopup="edit-profile" titlePopup="Редактировать профиль" isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">

            <input type="text" className="popup__input" name="username" placeholder="Имя" minLength="2" maxLength="40" required></input>
            <input type="text" className="popup__input" name="useractivity" placeholder="Деятельность на картинку" minLength="2" maxLength="200" required></input>

        </PopupWithForm>

        <PopupWithForm typePopup="add-photo" titlePopup="Новое место" isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Добавить">

            <input type="text" className="popup__input" name="name" placeholder="Название" minLength="2" maxLength="30" required></input>
            <input type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required></input>

        </PopupWithForm>

        <PopupWithForm typePopup="update-avatar" titlePopup="Обновить аватар" isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Обновить">

            <input type="url" className="popup__input" name="useravatar" placeholder="Ссылка на картинку аватара" required></input>

        </PopupWithForm>


        


        <template className="photo__item-template">
            <li className="photo__item">
                <button className="photo__item-delete" type="button"></button>
                <img src="#" alt="#" className="photo__item-img"></img>
                <div className="photo__description">
                    <h2 className="photo__item-title">1</h2>
                    <div className="photo__item-like-container">
                        <button className="photo__item-like" type="button"></button>
                        <span className="photo__item-like-count"></span>
                    </div>

                </div>
            </li>
        </template>
    </div>

  );
}

export default App;
