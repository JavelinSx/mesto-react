

function PopupWithForm(props){
    return(
        <>
        <div className={`popup popup_type_${props.typePopup} ${props.isOpened ? 'popup_open' : ''}`}>
            <div className="popup__container">
                <button className="popup__button-close" type="button" onClick={props.onClose}></button>
                <form className="popup__form" name={`${props.typePopup}`} novalidate>
                    <h2 className="popup__title">{props.titlePopup}</h2>
                    
                    {props.children}


                    <button className="popup__button-submit" type="submit">{props.buttonText}</button>
                </form>
            </div> 
        </div>
        </>
    )
}

export default PopupWithForm;