const $signUpForm = document.forms.signupForm;
const $deleteBtn = document.querySelector('[data-delete]');
if ($signUpForm) {
  const $emailInput = $signUpForm.elements.email;
  const $nameInput = $signUpForm.elements.name;
  const LSKey = 'signUpForm';
  const dataFromLS = JSON.parse(window.localStorage.getItem(LSKey));
  $emailInput.value = dataFromLS.email;
  $nameInput.value = dataFromLS.name;
  $emailInput.addEventListener('input', (e) => {
    const prevData = JSON.parse(window.localStorage.getItem(LSKey));
    const objectToSave = {
      ...prevData,
      [e.target.name]: e.target.value,
    };
    window.localStorage.setItem(LSKey, JSON.stringify(objectToSave));
  });
  $nameInput.addEventListener('input', (e) => {
    const prevData = JSON.parse(window.localStorage.getItem(LSKey));
    const objectToSave = {
      ...prevData,
      [e.target.name]: e.target.value,
    };
    window.localStorage.setItem(LSKey, JSON.stringify(objectToSave));
  });
}
$deleteBtn.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    fetch('/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: e.target.name }),
    })
      .then(
        (resolve) => {
          if (resolve.status === 204) {
            e.target.closest('.divForDelete').remove();
          } else alert("You don't have permission to delete a post");
        },
      );
  }
});
