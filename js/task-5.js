const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

// Решение 1

const changeName = event => {
  const currentElRef = event.target;

  currentElRef.value !== ''
    ? (spanRef.textContent = currentElRef.value)
    : (spanRef.textContent = 'незнакомец');
};

inputRef.addEventListener('input', changeName);

// Решение с this и привязкой функции к объекту

// const changeName = function () {
//   inputRef.value !== ''
//     ? (this.textContent = inputRef.value)
//     : (this.textContent = 'незнакомец');
// };

// const bindedChangeName = changeName.bind(spanRef);

// inputRef.addEventListener('input', bindedChangeName);
