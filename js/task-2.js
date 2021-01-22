const total = 100;
const ordered = 50;

const isAvailable =
  total >= ordered
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';
console.log(isAvailable);

// if (total >= ordered) {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// } else {
//     console.log('На складе недостаточно товаров!');
// }
