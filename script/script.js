const buttonOpen = document.getElementById('button-edit');
const buttonClose = document.getElementById('close-button');
const popupEdit = document.getElementById('edit-popup');
const inputName = document.getElementById('name-edit');
const inputWorkplace = document.getElementById('workplace-edit');
const saveButton = document.getElementById('save-button');
const profileName = document.getElementById('name');
const profileStatus = document.getElementById('workplace'); 
const form = document.getElementById('form');

function openEditForm(){
    popupEdit.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputWorkplace.value = profileStatus.textContent;
}

function closeEditForm(){
    popupEdit.classList.remove('popup_opened');
}

function profileEdit(evt){
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputWorkplace.value;
    closeEditForm();
}

buttonOpen.addEventListener('click', openEditForm);
form.addEventListener('submit', profileEdit);   
buttonClose.addEventListener('click', closeEditForm);

//-----------------------------------------------------------------------------------------

const elements = document.querySelector('.elements');
const addButton = document.getElementById('add-button');
const addPopup = document.getElementById('add-popup');
const closeButtonAdd = document.getElementById('close-button-add');
const saveButtonAdd = document.getElementById('save-button-add');
const addForm = document.getElementById('add-form');
const placeName = document.getElementById('new-place-name');
const placePhoto = document.getElementById('new-place-photo');
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


const fullscreenPopup = document.querySelector('.popup__fullscreen');
const fullscreenCloseButton = document.getElementById('close-button-fullscreen');


function full(){
  const fullscreenImage = document.querySelector('.popup__fullsrceen-image');
  const fullscreenName = document.querySelector('.popup__fullsrceen-title');
  const image = document.getElementById('place-image');
  const name = document.getElementById('place-name');
  fullscreenImage.src = image.src;
  fullscreenName.textContent = name.textContent;
  fullscreenPopup.classList.add('popup_opened');
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
  closeAddForm();

}

function openAddForm(){
    addPopup.classList.add('popup_opened');   
}

function closeAddForm(){
    addPopup.classList.remove('popup_opened');
}

function addPlace(evt){
  evt.preventDefault();
  const inputPlace = placeName.value;
  const inputIamge = placePhoto.value;
  addElement(inputPlace, inputIamge);
  closeAddForm();
}

initialCards.forEach((mesto) => {
  addElement(mesto.name, mesto.link)
});

addButton.addEventListener('click', openAddForm);
closeButtonAdd.addEventListener('click', closeAddForm);
addForm.addEventListener('submit', addPlace);   
 


