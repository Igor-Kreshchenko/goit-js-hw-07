const countryName = prompt('Укажите страну');
const countryOne = 'китай';
const countryTwo = 'чили';
const countryThree = 'австралия';
const countryFour = 'индия';
const countryFive = 'ямайка';
let price;

switch (countryName.toLowerCase()) {
  case countryOne:
    price = '100';
    break;

  case countryTwo:
    price = '250';
    break;

  case countryThree:
    price = '170';
    break;

  case countryFour:
    price = '80';
    break;

  case countryFive:
    price = '120';
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

console.log(`Доставка в ${countryName} будет стоить ${price} кредитов`);
