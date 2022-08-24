import avatar from '../image/Avatar.png';
import React from 'react'
import Card from './Card'
import {api} from './Utils';


function Main({onAddPlace, onEditAvatar, onEditProfile, onCardClick}){


    const [ userName, setUserName ] = React.useState('Жак-Ив Кусто');
    const [ userDescription , setUserDescription ] = React.useState('Исследователь океана');
    const [ userAvatar, setUserAvatar] = React.useState(avatar);
    const [ cards, setCards ] = React.useState([])

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([dataUser, dataCard]) => {
            setUserName(dataUser.name)
            setUserDescription(dataUser.about)
            setUserAvatar(dataUser.avatar)
            setCards(dataCard)
        })
        .catch(err => console.log(err))
    }, [])

    const cardItems = cards.map(card => {
        return <Card key={card._id} card={card} onCardClick={onCardClick}></Card>
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