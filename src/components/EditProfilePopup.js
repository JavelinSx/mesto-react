import PopupWithForm from "./PopupWithForm"
import React from "react"
import { CurrentUserContext } from './CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}){

    const userContext = React.useContext(CurrentUserContext)
    const[name, setName] = React.useState('')
    const[about, setAbout] = React.useState('')

    React.useEffect(() => {
        setName(userContext.name)
        setAbout(userContext.about)
    },[userContext])

    function handleChangeName(e){
        setName(e.target.value)
    }
    function handleChangeAbout(e){
        setAbout(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
          name: name,
          about: about,
        });
      } 
    return(
        <PopupWithForm  typePopup="edit-profile" 
                        titlePopup="Редактировать профиль" 
                        isOpen={isOpen} 
                        onClose={onClose} 
                        onSubmit={handleSubmit}
                        buttonText="Сохранить">

            <input  
                    type="text" 
                    className="popup__input" 
                    value={name}
                    onChange={handleChangeName}
                    name="username" 
                    placeholder="Имя" 
                    minLength="2" 
                    maxLength="40" 
                    required>
            </input>
            <input 
                    type="text" 
                    className="popup__input" 
                    value={about}
                    onChange={handleChangeAbout}
                    name="useractivity" 
                    placeholder="Деятельность" 
                    minLength="2" 
                    maxLength="200" 
                    required>
            </input>

        </PopupWithForm>
    )
}

export default EditProfilePopup