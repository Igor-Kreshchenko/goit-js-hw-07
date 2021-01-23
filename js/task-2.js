const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const createElement = element => {
  const newElementRef = document.createElement('li');
  newElementRef.textContent = element;
  return newElementRef;
};

const ingredientsMap = ingredients.map(ingredient => createElement(ingredient));

ingredientsListRef.append(...ingredientsMap);
