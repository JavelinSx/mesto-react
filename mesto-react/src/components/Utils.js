import Api from "./Api"


export const workWithImage = {
    popupWithImageSelector: '.popup_type_photo-open',
    templateCardSelector: '.photo__item-template',
    gallerySelector: '.photo__grid',
  }
  
  export const updateAvatar = {
    popupSelector: '.popup__type_update-avatar',
    avatarSelector: '.profile__avatar',
    buttonEdit: document.querySelector(".profile__button_update-avatar"),
    form: document.querySelector(".popup__form-avatar-change"),
    inputLink: document.querySelector('[name="useravatar"]'),
  }
  export const editProfile = {
    popupSelector: '.popup__type_edit-profile',
    nameSelector: '.profile__name',
    activitySelector: '.profile__activity',
    button: document.querySelector(".profile__button_edit-profile"),
    form: document.querySelector(".popup__form_edit-profile"),
    inputName: document.querySelector('[name="username"]'),
    inputActivity: document.querySelector('[name="useractivity"]'),
  }
  export const addPhoto = {
    popupSelector: '.popup__type_add-photo',
    button: document.querySelector(".profile__button_add-photo"),
    form: document.querySelector(".popup__form_add-photo"),
    inputName: document.querySelector('[name="name"]'),
    inputLink: document.querySelector('[name="link"]'),
  }
  
  export const confirmation = {
    popupSelector: '.popup__type_confirmation',
    form: document.querySelector(".popup__form_confirmation"),
  }
  
  export const api = new Api();
  
  export const validationSelectors = {
    popupSelector: ".popup",
    formEditSelector: ".popup__form-edit",
    formAddPhotoSelector: ".popup__form-add-photo",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_invalid",
    errorClass: "popup__input-error_active",
    toggleSubmit: "popup__submit-deactive",
  };
  
  
  