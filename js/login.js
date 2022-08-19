import Fetch from "../services/Fetch.js";
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const emailValue = email.value
    const passwordValue = password.value

if(emailValue ===''){
    setErrorFor(email, 'Mail connot be blank');
}  else {
        setSuccessFor(email)
}


if (passwordValue  === '' ){
    setErrorFor(password, 'Password connt be blank')
} else {
    setSuccessFor(password);
}

}


function setErrorFor(input, message){
    const formCantrol = input.parentElement;
    const small = formCantrol.querySelector('small')
    small.innerText = message;
    formCantrol.className = 'form-control error'
}
   
  function setSuccessFor(input){
      const formCantrol = input.parentElement;
      formCantrol.className = 'form-control success';
  }





const userModel = {
    mail: '',
    password: '',
};

inputs.forEach(item => {
    item.addEventListener('input', (e) =>{
        const key = e.target.getAttribute('name');
        userModel[key] = e.target.value
    })
    
});

/*button.addEventListener('click',() =>{
    fetch('http://localhost:3000/auth/signin',{
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(userModel)
    })
    .then((response) => {
         return response.json()
     }).then(({token}) => {
        Fetch.token = token
        sessionStorage.setItem('token', token)
        window.location.href = 'index.html'
     })
})*/