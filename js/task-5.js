const inputRef = document.querySelector('input#name-input');
const spanRef = document.querySelector('span#name-output');

const changeName = event => {
  event.target.value !== ''
    ? (spanRef.textContent = event.target.value)
    : (spanRef.textContent = 'незнакомец');
};

inputRef.addEventListener('input', changeName);
