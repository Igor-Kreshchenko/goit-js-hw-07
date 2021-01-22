const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt('Введите пароль');

switch (userInput) {
  case null:
    message = 'Отменено пользователем!';
    break;

  case ADMIN_PASSWORD:
    message = 'Добро пожаловать!';
    break;

  default:
    message = 'Доступ запрещен, неверный пароль!';
}

// if (userInput === null) {
//     message = 'Отменено пользователем!';
// }  else if (userInput === ADMIN_PASSWORD){
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// }

alert(message);
