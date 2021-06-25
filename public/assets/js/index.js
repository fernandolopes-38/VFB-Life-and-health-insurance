let form = null;
let phone = null;
let langSelect = null;

window.addEventListener('load', () => {
  form = document.querySelector('form');
  phone = document.querySelector('#phone');
  langSelect = document.querySelector('#langSelect');

  form.addEventListener('submit', handleSubmit);
  phone.addEventListener('input', handlePhoneChange);
  langSelect.addEventListener('change', handleLanguageChange);
});

const handleSubmit = (event) => {
  event.preventDefault();
  const data = {
    name: form.elements.name.value,
    phone: form.elements.phone.value,
    email: form.elements.email.value,
    type: form.elements.type.value,
    checkbox: form.elements.checkboxAgreed.checked,
  };

  console.log(data);
};

const handleLanguageChange = (event) => {
  console.log(event.target.value);
};

const handlePhoneChange = (event) => {
  if (event.data) {
    if (event.target.value.length === 3) phone.value += '-';
    else if (event.target.value.length === 7) phone.value += '-';
  }
};
