const buttonOpen = document.getElementById('button-edit');
buttonOpen.addEventListener('click', function(event){
    const popup = document.getElementById('popup');
    popup.classList.remove('popup_hidden');

    let profileName = document.getElementById('name').textContent;
    let workplace = document.getElementById('workplace').textContent;

    const inputName = document.getElementById('name-edit');
    const inputWorkplace = document.getElementById('workplace-edit');
    inputName.setAttribute('placeholder', profileName);
    inputWorkplace.setAttribute('placeholder', workplace);

    inputName.addEventListener('input', function(event){
        const valueName = inputName.value;
        const name = document.getElementById('name');
        const saveButton = document.getElementById('save-button');

        saveButton.addEventListener('click', function(event){
            name.textContent = valueName;
            inputName.value = '';
            popup.classList.add('popup_hidden');
        })
    })

    inputWorkplace.addEventListener('input', function(event){
        const valueStatus = inputWorkplace.value;
        const status = document.getElementById('workplace');
        const saveButton = document.getElementById('save-button');

        saveButton.addEventListener('click', function(event){
            status.textContent = valueStatus;
            inputWorkplace.value = '';
            popup.classList.add('popup_hidden');
        })


    })
    
})

const buttonClose = document.getElementById('close-button');
buttonClose.addEventListener('click', function(event){
    const popup = document.getElementById('popup');
    popup.classList.add('popup_hidden');
})