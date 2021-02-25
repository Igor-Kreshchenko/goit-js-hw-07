const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');


const changeName = event => {
  const currentElRef = event.target;

  currentElRef.value !== ''
    ? (spanRef.textContent = currentElRef.value)
    : (spanRef.textContent = 'незнакомец');
};

inputRef.addEventListener('input', changeName);


