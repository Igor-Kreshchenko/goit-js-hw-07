const inputRef = document.querySelector('#controls > input');
const boxesRef = document.querySelector('#boxes');

const createBtnRef = document.querySelector('button[data-action="render"]');
const clearBtnRef = document.querySelector('button[data-action="destroy"]');

const numberOfBoxes = Number(inputRef.value);

const createBoxes = function (amount) {
  const allEls = [];

  for (let i = 0; i <= amount; i += 1) {
    const newEl = document.createElement('div');
    newEl.style.backgroundColor = 'tomato';
    newEl.style.width = '30px';
    newEl.style.height = '30px';

    allEls.push(newEl);
  }

  return allEls;
};

console.log(createBoxes(5));

createBtnRef.addEventListener(
  'click',
  boxesRef.append(...createBoxes(numberOfBoxes)),
);
