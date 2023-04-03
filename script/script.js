const buttonOpen = document.getElementById('button-edit');
const buttonClose = document.getElementById('close-button');
const popup = document.getElementById('popup');
const inputName = document.getElementById('name-edit');
const inputWorkplace = document.getElementById('workplace-edit');
const saveButton = document.getElementById('save-button');
const profileName = document.getElementById('name');
const profileStatus = document.getElementById('workplace'); 
const form = document.getElementById('form');

function openEditForm(){
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputWorkplace.value = profileStatus.textContent;
}

function closeEditForm(){
    popup.classList.remove('popup_opened');
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