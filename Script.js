/* Under Mintenance */
window.addEventListener('load', () => {
  const overlay = document.querySelector('.popup-overlay');
  const closeButton = document.querySelector('.close-button');

  overlay.style.display = 'block';

  closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
});
