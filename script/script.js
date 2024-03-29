const elements = document.querySelector('.elements');
const addButton = document.querySelector('.button_type_add');
const buttonOpen = document.querySelector('.button_type_edit');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__workplace'); 

const editPopup = document.querySelector('.popup_type_edit-form');
const closeButtons = document.querySelectorAll('.button_type_close');
const editForm = editPopup.querySelector('.popup__form_type_edit');
const inputName = form.querySelector('.popup__form-input_type_name');
const inputWorkplace = form.querySelector('.popup__form-input_type_workplace');

const addPopup = document.querySelector('.popup_type_add-form');
const addForm = addPopup.querySelector('.popup__form_type_add');
const placeName = addForm.querySelector('.popup__form-input_type_place');
const placePhoto = addForm.querySelector('.popup__form-input_type_photo');

const fullscreenPopup = document.querySelector('.popup_type_fullscreen-form');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function openPopup(popup){
  popup.classList.add('popup_opened');
}

function closePopup(popup){
  popup.classList.remove('popup_opened');
}

function openAddForm(){
  openPopup(addPopup);
  //inputPlace.value = '';
  //inputImage.value = '';   
}

function openEditForm(){
    openPopup(editPopup);
    inputName.value = profileName.textContent;
    inputWorkplace.value = profileStatus.textContent;
}

function editProfile(evt){
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputWorkplace.value;
    closePopup(editPopup);
}

function like(){
  const likeButton = document.querySelector('.button_type_like');
  function liked() {
    this.classList.toggle('button_type_liked');
  }
  likeButton.addEventListener('click', liked);
}

function remove(){
  const removeButton = document.querySelector('.button_type_remove');
  function removing(evt){
    const removeCard = evt.target.closest(".element");
    removeCard.remove();
  }
  removeButton.addEventListener('click', removing);
}

function full(){
  const fullscreenImage = document.getElementById('fullscreen-image');
  const fullscreenName = document.getElementById('fullscreen-name');
  const image = document.getElementById('place-image');
  const name = document.getElementById('place-name');
  fullscreenImage.src = image.src;
  fullscreenName.textContent = name.textContent;
  openPopup(fullscreenPopup);
}

function addElement(inputPlace, inputImage){
  let article = document.createElement('article');
  article.className = "element";
  article.innerHTML = `<img src="${inputImage}" class="element__mask-group" alt="${inputPlace}" id="place-image"><button class="button_type_remove button" type="button"></button>
  <div class="element__descroption"><h2 class="element__name" id="place-name">${inputPlace}</h2><button class="button_type_like button" type="button"></button>
  </div>`
  elements.prepend(article);
  const img = document.getElementById('place-image');
  img.addEventListener('click', full);
  like();
  remove();
  closePopup(addPopup);
}

function addPlace(evt){
  evt.preventDefault();
  const inputPlace = placeName.value;
  const inputIamge = placePhoto.value;
  addElement(inputPlace, inputIamge);
  evt.target.reset();
}

initialCards.forEach((mesto) => {
  addElement(mesto.name, mesto.link)
});

addButton.addEventListener('click', openAddForm);
addForm.addEventListener('submit', addPlace);   

buttonOpen.addEventListener('click', openEditForm);
editForm.addEventListener('submit', editProfile);   

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
})