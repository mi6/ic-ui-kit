export const createDateInputForm = (): HTMLFormElement => {
  const form = document.createElement("form");
  const dateInput = document.createElement("ic-date-input");
  const submitBtn = document.createElement("ic-button");
  const resetBtn = document.createElement("ic-button");
  const formActions = document.createElement("div");

  formActions.style.display = "flex";
  formActions.style.gap = "8px";
  formActions.style.marginTop = "8px";

  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";
  resetBtn.type = "reset";
  resetBtn.textContent = "Reset";

  form.id = "date-input-form";

  dateInput.value = "13/03/1951";
  dateInput.label = "When would you like to collect your coffee?";

  form.appendChild(dateInput);
  form.appendChild(formActions);

  formActions.appendChild(submitBtn);
  formActions.appendChild(resetBtn);

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    console.log(
      (
        dateInput.querySelector(
          'input[name^="ic-date-input-"]'
        ) as HTMLInputElement
      )?.value
    );
  });

  return form;
};
