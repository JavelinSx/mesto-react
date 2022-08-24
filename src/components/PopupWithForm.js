

function PopupWithForm({typePopup, titlePopup, isOpened, onClose, buttonText, children}){
    return(

        <div className={`popup popup_type_${typePopup} ${isOpened ? 'popup_open' : ''}`}>
            <div className="popup__container">
                <button className="popup__button-close" type="button" onClick={onClose}></button>
                <form className="popup__form" name={`${typePopup}`} noValidate>
                    <h2 className="popup__title">{titlePopup}</h2>
                    
                    {children}

                    <button className="popup__button-submit" type="submit">{buttonText}</button>
                </form>
            </div> 
        </div>

    )
}

export default PopupWithForm;