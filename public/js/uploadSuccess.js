const uploadBtn = document.querySelector('.upload-btn');
const uploadForm = document.querySelector('.upload-form');
// const imageContainer = document.querySelector('.image-container');
// const textContainer = document.querySelector('.text-container');
// const soundBtnContainer = document.querySelector('.sound-btn-container');
const cardsContainer = document.querySelector('.cards-container');
uploadBtn?.addEventListener('click', async (event) => { //! ? - оператор опциональной последовательности
  const formData = new FormData(uploadForm); //! собираем данные с формы
  // formData.append('file', uploadForm.file);
  const inputs = Object.fromEntries(formData); //! собираем объект из FormData
  // console.log(inputs);
  try {
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    // console.log(result); //! проверять в консоли браузера
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    const imageElement = document.createElement('img');
    imageElement.src = result.image_path;
    imageElement.alt = `Uploaded image: ${result.text}`;
    imageContainer.append(imageElement);
    cardContainer.append(imageContainer);
    const textBlock = document.createElement('div');
    textBlock.className = 'text-block';
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';
    textContainer.innerHTML = result.text;
    textBlock.append(textContainer);
    cardContainer.append(textBlock);
    cardsContainer.prepend(cardContainer);
    const messageElement = document.createElement('div');
    messageElement.className = 'upload-message';
    messageElement.innerHTML = 'Картинка загружена и сохранена в базе данных';
    uploadForm.append(messageElement);
    setTimeout(() => messageElement.innerHTML = '', 3000);
    // Очистка формы
    uploadForm.reset();
  } catch (error) {
    console.error('Ошибка:', error);
    alert(`Ошибка добавления картинки: ${error.message}`);
  }
});
