const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let email = document.querySelector('.emailInput');
let submitEmail = document.querySelector('.email');
let signUp = document.querySelector('.container');
let thanks = document.querySelector('.thanksContainer');
let errorMessage = document.querySelector('.error');
let dismiss = document.querySelector('.dismiss');
document.querySelector('.subscribe').addEventListener("click" , function(e){
    e.preventDefault()
    if (email.value && email.value.match(validEmail)){
        submitEmail.innerHTML = email.value;
        signUp.classList.add('hidden');
        thanks.classList.remove('hidden')
    }
    else {
        email.classList.add('inputError');
        errorMessage.classList.remove('hideError')
    }
})
dismiss.addEventListener('click' ,function(e){
    e.preventDefault()
    signUp.classList.remove('hidden');
    thanks.classList.add('hidden') 
}
)
