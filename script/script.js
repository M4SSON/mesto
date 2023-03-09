const buttonOpen = document.getElementById('button-edit');
const buttonClose = document.getElementById('close-button');
const popup = document.getElementById('popup');
const inputName = document.getElementById('name-edit');
const inputWorkplace = document.getElementById('workplace-edit');
const saveButton = document.getElementById('save-button');
const name = document.getElementById('name');
const status = document.getElementById('workplace'); 
const form = document.getElementById('form');

function OpenEditForm(){
    popup.classList.add('popup_opened');
    inputName.value = name.textContent;
    inputWorkplace.value = status.textContent;
}

function CloseEditForm(){
    popup.classList.remove('popup_opened');
}

function ProfileEdit(){
    name.textContent = inputName.value;
    status.textContent = inputWorkplace.value;
    CloseEditForm();
}

buttonOpen.addEventListener('click', OpenEditForm);

form.addEventListener('submit', ProfileEdit);   
 
buttonClose.addEventListener('click', CloseEditForm);