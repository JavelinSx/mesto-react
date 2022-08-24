import avatar from '../image/Avatar.png';
import React from 'react'
import {api, workWithImage,updateAvatar,editProfile,addPhoto,confirmation} from './Utils';


function Main({onAddPlace, onEditAvatar, onEditProfile}){


    const [ userName, setUserName ] = React.useState('Жак-Ив Кусто');
    const [ userDescription , setUserDescription ] = React.useState('Исследователь океана');
    const [ userAvatar, setUserAvatar] = React.useState(avatar);
    const [ cards ] = React.useState([])

    React.useEffect(() => {
        api.getUserInfo()
        .then(res => {
            setUserName(res.name)
            setUserDescription(res.about)
            setUserAvatar(res.avatar)
        })
        .catch(err => console.log(err))
    }, [])
    React.useEffect(() => {
        api.getInitialCards()
        .then(res => {
            return res.map( card => { 
                return{
                    name: card.name,
                    link: card.link,
                    likes: card.likes,
                    id: card._id
                }
                
            })
        })
        .then()
    },[])

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

                </ul>
            </div>
        

        </section>
    )
}
export default Main;