

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(
    '.toggle input[type="checkbox"]'
  );
  const egoCheckbox = document.getElementById("ego");

  function updateCheckboxes() {
    if (egoCheckbox.checked) {
      checkboxes.forEach((checkbox) => {
        if (checkbox !== egoCheckbox) {
          checkbox.checked = false;
          checkbox.disabled = true;
        }
      });
    } else {
      checkboxes.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }
  }

  egoCheckbox.addEventListener("change", updateCheckboxes);

  updateCheckboxes();
  
});
