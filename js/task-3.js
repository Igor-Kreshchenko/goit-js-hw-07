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

const galleryElements = images.reduce(
  (acc, { url, alt }) =>
    acc + `<li><img class = "img" src= ${url} alt= ${alt} ></img></li>`,
  '',
);

galleryRef.insertAdjacentHTML('afterbegin', galleryElements);

// Другое решение (через createElement)

// const galleryRef = document.querySelector('#gallery');

// const createItem = ({ url, alt }) => {
//   const newElement = document.createElement('li');
//   const newImage = document.createElement('img');

//   newImage.src = url;
//   newImage.alt = alt;
//   newImage.classList.add('img');

//   newElement.appendChild(newImage);
//   return newElement;
// };

// const allImages = images.map(image => createItem(image));

// galleryRef.append(...allImages);
