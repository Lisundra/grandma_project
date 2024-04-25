const uploadBtn = document.querySelector('.upload-btn');
const uploadForm = document.querySelector('.upload-form');

uploadBtn.addEventListener('click', async (event) => {
  const formData = new FormData(uploadForm); //! собираем данные с формы
//   formData.append('file', uploadForm.file);
  const inputs = Object.fromEntries(formData); //! собираем объект из FormData
  console.log(inputs);
  try {
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    console.log(result);
    if (result) {
      const messageElement = document.createElement('div');
      messageElement.className = 'upload-message';
      messageElement.innerHTML = 'Картинка загружена и сохранена в базе данных';
      uploadForm.append(messageElement);
    }
    // Очистка формы
    uploadForm.reset();
  } catch (error) {
    console.error('Ошибка:', error);
    alert(`Ошибка добавления картинки: ${error.message}`);
  }
});
