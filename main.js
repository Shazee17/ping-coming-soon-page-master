const form = document.querySelector('#form');
const email = document.querySelector('#email-field');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('CLICKED');
    const emailVal = email.value;

    if(emailValidation(emailVal)){
        form.classList.remove('error');
        form.classList.add('success');

        setTimeout(() => {
            form.reset();
            form.classList.remove('success');
        }, 3000);
          
    }
    else{
        form.classList.add('error');
        form.classList.remove('success');
    }
});

function emailValidation(email){
    return (String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ));
  }