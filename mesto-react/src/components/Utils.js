import Api from "./Api"

export const api = new Api();

export const configWorkWithImage = {
    popupWithImageSelector: '.popup_type_photo-open',
    templateCardSelector: '.photo__item-template',
    gallerySelector: '.photo__grid',
  }
  
  export const configUpdateAvatar = {
    popupSelector: '.popup__type_update-avatar',
    avatarSelector: '.profile__avatar',
    buttonEditSelector: ".profile__button_update-avatar",
    formSelector: ".popup__form-avatar-change",
    inputSelector: '.popup__input',
  }
  export const configEditProfile = {
    popupSelector: '.popup__type_edit-profile',
    nameSelector: '.profile__name',
    activitySelector: '.profile__activity',
    buttonSelector: ".profile__button_edit-profile",
    formSelector: ".popup__form_edit-profile",
    inputSelector: '.popup__input',
  }
  export const configAddPhoto = {
    popupSelector: '.popup__type_add-photo',
    buttonSelector: ".profile__button_add-photo",
    formSelector: ".popup__form_add-photo",
    inputSelector: '.popup__input',
  }
  
  export const configConfirmation = {
    popupSelector: '.popup__type_confirmation',
    formSelector: ".popup__form_confirmation",
  }
  
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
  
  
  