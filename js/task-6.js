const inputRef = document.querySelector('#validation-input');
const dataLengthValue = inputRef.getAttribute('data-length');

const validationCheck = function () {
  if (this.value.length !== Number(dataLengthValue)) {
    this.classList.add('invalid');
    this.classList.remove('valid');
  } else {
    this.classList.add('valid');
    this.classList.remove('invalid');
  }
};

inputRef.addEventListener('blur', validationCheck);
