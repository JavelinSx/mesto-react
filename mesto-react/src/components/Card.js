function Card({card, onCardClick}){
    const handleCardClick = () => {
        onCardClick(card)
    }

    return (
        <li className="photo__item">
            <button className="photo__item-delete" type="button"></button>
            <img src={card.link} alt={card.name} onClick={handleCardClick} className="photo__item-img"></img>
            <div className="photo__description">
                <h2 className="photo__item-title">{card.name}</h2>
                <div className="photo__item-like-container">
                    <button className="photo__item-like" type="button"></button>
                    <span className="photo__item-like-count">{card.likes.length > 0 ? card.likes.length : null}</span>
                </div>
            </div>
        </li>
    )
}
export default Card