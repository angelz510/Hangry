document.querySelector('form').addEventListener('submit', createUser);

function createUser(e){
  e.preventDefault();
  const email = document.querySelector('#email').value;  
  const password = document.querySelector('#password').value;
  const newUser = {email, password};

  fetch('http://localhost:4000/api/v1/users',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
  .then (stream => stream.json())
  .catch((err)=> console.log(err))
  window.location.replace('/');
}
