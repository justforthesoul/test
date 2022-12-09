export const initFormStates = () => {
  const anyTimeCheckbox = document.querySelector('.modal-form__checkbox-any-time');
  const timeCheckboxBlock = document.querySelector('.modal-form__checkbox-block');

  if (!anyTimeCheckbox || !timeCheckboxBlock) {
    return;
  }

  anyTimeCheckbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      timeCheckboxBlock.disabled = true;
      timeCheckboxBlock.querySelectorAll('input').forEach((input) => {
        input.checked = false;
      });
      return;
    }
    timeCheckboxBlock.disabled = false;
  });
};
