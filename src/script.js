const email = document.getElementById('input-email');
const senha = document.getElementById('input-senha');
const btn = document.getElementById('btn-submit');

const inputReset = () => {
  email.innerText = '';
  senha.innerText = '';
};

const validationEmail = () => {
  if (email.value !== '' && email.value.includes('@')) {
    inputReset();
    return true;
  }
  inputReset();
  return false;
};

const validationSenha = () => {
  if (senha.value.length > 5 ) {
    return true;
  } else {
    return false;
  }
};


const validations = () => {
  try {
    if(validationEmail() && validationSenha()) {
      alert('Obrigado pelas informações');
    }
    else {
      throw new Error('Preencha os campos corretamente.')
    }
  } catch(error) {
    alert(error.message)
  }
};

btn.addEventListener('click', () => {
  validations();
})