const validation = new JustValidate('#form', {
  errorsContainer: '#errors-container_custom-container',
});

validation
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Digite um e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'E-mail não é valido',
    },
  ])
  .addField('#password', [
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'A senha deve ter 6 caracteres',
    },
  ])
  .onSuccess((event) => {
    document.getElementById('form').submit();
  });
