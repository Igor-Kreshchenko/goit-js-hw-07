const counterValueRef = document.querySelector('#value');
const buttonDecrRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrRef = document.querySelector('button[data-action="increment"]');

let counterValue = Number(counterValueRef.textContent);

const decrementFn = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};

const incrementFn = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};

buttonDecrRef.addEventListener('click', decrementFn);
buttonIncrRef.addEventListener('click', incrementFn);
