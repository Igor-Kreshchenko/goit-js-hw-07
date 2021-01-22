let credits = 23580;
const pricePerDroid = 3000;
const droidNumber = prompt('Введите требуемое количество дроидов');

if (droidNumber === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = pricePerDroid * droidNumber;
  const canBuy =
    credits > totalPrice
      ? `Вы купили ${droidNumber} дроидов, на счету осталось ${(credits -= totalPrice)} кредитов.`
      : 'Недостаточно средств на счету!';
  console.log(canBuy);
}
