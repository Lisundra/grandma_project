const form = document.querySelector('#regForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.login || !res.password) {
    alert('Введите  все данные для регистрации');
  } else {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      if (result.regDone) {
        setTimeout(() => {
          window.location.href = '/';
        }, 200);
      }
      if (result.err) {
        console.error(result.err);
        const errMsg = document.querySelector('.regErrMsg');
        errMsg.innerText = result.err;
      }
    } catch (error) {
      console.error('Ошибка регистрации', error);
      alert('Ошибка регистрации');
    }
  }
});
