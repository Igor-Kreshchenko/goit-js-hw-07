const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Решение через insertAdjacentHTML

const galleryRef = document.querySelector('#gallery');

const imagesMap = images.reduce(
  (acc, image) =>
    acc +
    `<li><img class = "img" src="${image.url}" alt="${image.alt}"></img></li>`,
  '',
);

galleryRef.insertAdjacentHTML('beforeend', imagesMap);

// Другое решение
// const galleryRef = document.querySelector('#gallery');

// const createElementRef = element => document.createElement('li');
// const createImgRef = img => document.createElement('img');

// const elementsMap = images.map(element => {
//   const newElement = createElementRef(element);
//   const image = createImgRef(element);
//   image.setAttribute('src', element.url);
//   image.setAttribute('alt', element.alt);
//   image.classList.add('img');

//   newElement.appendChild(image);
//   return newElement;
// });

// galleryRef.append(...elementsMap);
