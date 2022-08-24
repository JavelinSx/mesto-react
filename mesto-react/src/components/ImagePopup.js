
function ImagePopup({card, onClose}){

    return(
        <div className={`popup popup_type_photo-openName ${card ? 'popup_open' : ''}`}>
            <div className="popup__container">
                <button className="popup__button-close" onClick={onClose} type="button"></button> 
                <figure className="popup__photo-card">
                    <img src={card ? card.link : "#"} alt={card ? card.name : 'empty'} className="popup__photo-wide"/>
                    <figcaption className="popup__photo-title">{card ? card.name : 'empty'}</figcaption>
                </figure>
            </div>    
        </div>
    )
}

export default ImagePopup