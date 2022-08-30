import avatar from '../image/Avatar.png';
import React from 'react'
import Card from './Card'
import {api} from '../utils/utils.js';
import { CurrentUserContext } from './CurrentUserContext';


function Main({onAddPlace, onEditAvatar, onEditProfile, onCardClick}){

    const [ userName, setUserName ] = React.useState('Жак-Ив Кусто');
    const [ userDescription , setUserDescription ] = React.useState('Исследователь океана');
    const [ userAvatar, setUserAvatar] = React.useState(avatar);
    const [ cards, setCards ] = React.useState([])
    const userContext = React.useContext(CurrentUserContext)

    React.useEffect(() => {
        api.getInitialCards()
        .then(cards => setCards(cards))
    }, [])

    React.useEffect(() => {
        setUserName(userContext.name)
        setUserDescription(userContext.about)
        setUserAvatar(userContext.avatar)
    }, [userContext])

    function handleCardLike(card){
        const isLiked = card.likes.some(like => like._id === userContext._id)
        api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
        })
    }

    function handleCardDelete(card){
        api.deleteCard(card._id)
        .then((newPhotos) => {
            setCards((state) => state.filter((c) => c._id === card._id ? newPhotos : c))
        })
    }

    const cardItems = cards.map(card => {
        return <li key={card._id} className="photo__item">
                    <Card card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
                </li>
    })
    
    return(
        
        <section className="main">
            
            <div className="profile">
                <img src={userAvatar} alt="Аватар" className="profile__avatar"></img>
                <button className="profile__button_update-avatar" onClick={onEditAvatar} type="button"></button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__button_edit-profile" onClick={onEditProfile} type="button"></button>
                    <p className="profile__activity">{userDescription}</p>
                </div>
                <button className="profile__button_add-photo" onClick={onAddPlace} type="button"></button>
            </div>

            <div className="photo">
                <ul className="photo__grid">
                    {cardItems}
                </ul>
            </div>
        

        </section>
    )
}
export default Main;