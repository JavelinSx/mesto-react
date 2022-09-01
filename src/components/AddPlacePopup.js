import React from "react"
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup({isOpen, onClose, onAddPlace}){

    const[name, setName] = React.useState('')
    const[link, setLink] = React.useState('')

    function handleChangeName(e){
        setName(e.target.value)
    }
    function handleChangeAbout(e){
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
          name: name,
          link: link,
        });
      }
    return(
        <PopupWithForm  typePopup="add-photo" 
                        titlePopup="Новое место" 
                        onSubmit={handleSubmit}
                        isOpen={isOpen} 
                        onClose={onClose} 
                        buttonText="Добавить">

            <input  type="text" 
                    className="popup__input" 
                    name="name" 
                    onChange={handleChangeName}
                    placeholder="Название" 
                    minLength="2" 
                    maxLength="30" 
                    required>
            </input>

            <input  type="url" 
                    className="popup__input" 
                    name="link" 
                    onChange={handleChangeAbout}
                    placeholder="Ссылка на картинку" 
                    required>
            </input>

        </PopupWithForm>
    )
}

export default AddPlacePopup