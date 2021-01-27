const counterValueRef = document.querySelector('#value');
const buttonDecrRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrRef = document.querySelector('button[data-action="increment"]');

let counterValue = Number(counterValueRef.textContent);

// Решение 1

function decrementFn() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

function incrementFn() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}

buttonDecrRef.addEventListener('click', decrementFn);
buttonIncrRef.addEventListener('click', incrementFn);

// Решение c this и привязкой к объекту

// function decrementFn() {
//   counterValue -= 1;
//   this.textContent = counterValue;
// }

// function incrementFn() {
//   counterValue += 1;
//   this.textContent = counterValue;
// }

// const bindedDecrFn = decrementFn.bind(counterValueRef);
// const bindedIncrFn = incrementFn.bind(counterValueRef);

// buttonDecrRef.addEventListener('click', bindedDecrFn);
// buttonIncrRef.addEventListener('click', bindedIncrFn);
