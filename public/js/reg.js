const form = document.querySelector('#regForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.login || !res.password) {
    alert('Введите все данные для регистрации');
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

function addGrandmotherInput() {
  const inputGrandmother = document.createElement('input');
  inputGrandmother.name = 'grandmother';
  inputGrandmother.type = 'text';
  inputGrandmother.className = 'inputGrandmother';
  inputGrandmother.id = 'inputGrandmother';
  inputGrandmother.placeholder = 'Имя бабушки';

  const selectRole = document.querySelector('.selectRole');
  const parentLabel = selectRole.parentNode;
  parentLabel.insertBefore(inputGrandmother, selectRole.nextSibling);
}

function removeGrandmotherInput() {
  const inputGrandmother = document.querySelector('.inputGrandmother');
  if (inputGrandmother) {
    inputGrandmother.remove();
  }
}

document.querySelector('.selectRole').addEventListener('change', (event) => {
  const selectedRole = event.target.value;
  if (selectedRole === 'child') {
    addGrandmotherInput();
  } else {
    removeGrandmotherInput();
  }
});
