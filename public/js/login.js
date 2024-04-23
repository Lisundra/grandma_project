const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(loginForm);
  const loginData = Object.fromEntries(data);
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
      credentials: 'include',
    });
    if (response.ok) {
      location.assign('/');
    } else if (response.status === 401) {
      alert('Неверная почта или пароль');
      setTimeout();
    }
  } catch (error) {
    console.error('Ошибка:', error);
  }
});
