const inputRef = document.querySelector('#validation-input');
const dataLengthValue = inputRef.getAttribute('data-length');

const validationCheck = () => {
  if (inputRef.value.length !== Number(dataLengthValue)) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  } else {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
};

inputRef.addEventListener('blur', validationCheck);
