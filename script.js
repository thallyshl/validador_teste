const form = document.querySelector('.form');
form.addEventListener('submit', e => {
    e.preventDefault()

    checkInputs()

});

const checkInputs = () => {

    const errorValidation = (input) => {
        const info = input.parentElement;
        console.log(info);
        info.classList.add('error');
    }

    const sucessValidation = (input) => {
        const info = input.parentElement;
        info.classList.add('sucess');
    }
    const user = document.querySelector("#user");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    if (user.value == "") {
        errorValidation(user, "Preencha esse campo");
        const small = form.querySelector('#small1');
        small.innerText = "Preencha esse campo";
        small.className = 'error';
    } else {
        sucessValidation(user, "");
        const small = form.querySelector('#small1');
        small.innerText = '';
    }

    if (email.value == "") {
        errorValidation(email);
        const small = form.querySelector('#small2');
        small.innerText = "Preencha esse campo";
        small.className = 'error';
    } else {
        sucessValidation(email);
        const small = form.querySelector('#small2');
        small.innerText = '';
    }
    if (password.value == ""){
        errorValidation(password);
        const small = form.querySelector('#small3');
        small.innerText = "Preencha esse campo";
        small.className = 'error';
    }else if(password.value.length < 8   ){
        errorValidation(password);
        const small = form.querySelector('#small3');
        small.innerText = "Sua senha precisa ter pelo menos 8 caracteres";
        small.className = 'error';
    }else{
        sucessValidation(password);
        const small = form.querySelector('#small3');
        small.innerText = '';
    }


}

