function emailCheck() {
    const email = document.getElementsByTagName('input')[0].value;
    const senha = document.getElementsByTagName('input')[1].value;
    if (email === 'tryber@teste.com' && senha === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  }
  
  document.getElementsByTagName('button')[0].addEventListener('click', emailCheck);


 