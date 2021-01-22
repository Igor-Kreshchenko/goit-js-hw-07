const listRef = document.querySelector('#categories');
const categoriesRef = document.querySelectorAll('.item');

const getCategoriesNumber = function (listRef) {
  const categoriesNumber = listRef.children.length;

  console.log(`В списке ${categoriesNumber} категории`);
};

getCategoriesNumber(listRef);

const showDescrOfCategories = function (categories) {
  categories.forEach(category => {
    console.log(`Категория: ${category.firstElementChild.textContent}`);
    console.log(
      `Количество элементов: ${category.lastElementChild.children.length}`,
    );
  });
};

showDescrOfCategories(categoriesRef);
