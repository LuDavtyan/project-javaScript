const form = document.getElementById('form');
const username = document.getElementById('name');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const lastnameValue = lastname.value

if(usernameValue ===''){
 setErrorFor(username,'Name connot be blank' );
} else{
    setSuccessFor(username);
}

if(  emailValue ===''){
    setErrorFor(email, 'Mail connot be blank');
}  else {
        setSuccessFor(email)
}
if(  lastnameValue ===''){
    setErrorFor(lastname, 'Last name connot be blank');
}  else {
        setSuccessFor(lastname)
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

  const inputs = document.querySelectorAll('input')
  const button = document.querySelector('button')
  
  const userModel = {
      lastname:'',
      name:'',
      email:'',
      password:''
  };
  
  inputs.forEach(item =>{
      item.addEventListener('input',(e) =>{
          const key = e.target.getAttribute('name');
          userModel[key] = e.target.value
      })
  });
  
 /* button.addEventListener('click',() =>{
      fetch('http://localhost:3000/auth/signup',{
          method:'POST',
          headers: {
              'content-type': 'application/json'
          },
          body:JSON.stringify(userModel)
      })
      .then((response) => {
          if(response.status === 200 && response.ok){
                return response.json()
          }
      })
      .then((result)=>{
        sessionStorage.setItem('token', result.token)
          window.location.href = 'index.html'
      })
  })*/


