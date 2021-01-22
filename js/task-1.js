const listRef = document.querySelector('#categories');
const categories = document.querySelectorAll('.item');

const getCategoriesNumber = function (listRef) {
  const categoriesNumber = listRef.children.length;

  console.log(`В списке ${categoriesNumber} категории`);
};

getCategoriesNumber(listRef);

const showCategoriesTitles = function (categories) {
  categories.forEach(category => {
    console.log(`Категория: ${category.firstElementChild.textContent}`);
    console.log(
      `Количество элементов: ${category.children[1].children.length}`,
    );
  });
};

showCategoriesTitles(categories);

// Без функций
const listRef = document.querySelector('#categories');
