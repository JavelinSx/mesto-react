import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from './CurrentUserContext';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}){
    const userContext = React.useContext(CurrentUserContext)
    const [avatar, setAvatar] = React.useState(userContext.avatar)
    const avatarRef = React.useRef()
    
    React.useEffect(() => {
        setAvatar(userContext.avatar)

    },[userContext])

    function handleChangeLink(e){
        setAvatar(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        onUpdateAvatar({
            avatar: avatarRef.current.value
        })
    }



    return(
        <PopupWithForm  typePopup="update-avatar" 
                        titlePopup="Обновить аватар" 
                        isOpen={isOpen} 
                        onClose={onClose} 
                        onSubmit={handleSubmit}
                        buttonText="Обновить">

            <input  type="url" 
                    ref={avatarRef}
                    onChange={handleChangeLink}
                    value={avatar}
                    className="popup__input" 
                    name="useravatar" 
                    placeholder="Ссылка на картинку аватара" 
                    required>
            </input>

        </PopupWithForm>
    )




}

export default EditAvatarPopup