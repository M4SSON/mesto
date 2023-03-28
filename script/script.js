const buttonOpen = document.getElementById('button-edit');
const buttonClose = document.getElementById('close-button');
const popup = document.getElementById('popup');
const inputName = document.getElementById('name-edit');
const inputWorkplace = document.getElementById('workplace-edit');
const saveButton = document.getElementById('save-button');
const name = document.getElementById('name');
const status = document.getElementById('workplace'); 
const form = document.getElementById('form');

function openEditForm(){
    popup.classList.add('popup_opened');
    inputName.value = name.textContent;
    inputWorkplace.value = status.textContent;
}

function closeEditForm(){
    popup.classList.remove('popup_opened');
}

function profileEdit(){
    name.textContent = inputName.value;
    status.textContent = inputWorkplace.value;
    closeEditForm();
}

buttonOpen.addEventListener('click', openEditForm);

saveButton.addEventListener('submit', profileEdit);   
 
buttonClose.addEventListener('click', closeEditForm);