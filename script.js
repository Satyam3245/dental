document.addEventListener("DOMContentLoaded", () => {

  const nameInputs = document.querySelectorAll('input[placeholder*="Name"]');
  const phoneInputs = document.querySelectorAll('input[placeholder*="Mobile"], input[placeholder*="Phone"]');

  nameInputs.forEach(input => {
    input.addEventListener("input", (e) => {
      let value = e.target.value;
      value = value.replace(/[^a-zA-Z\s]/g, "");
      e.target.value = value;
    });
  });

  phoneInputs.forEach(input => {
    input.addEventListener("input", (e) => {

      let value = e.target.value;

      value = value.replace(/[^0-9]/g, "");

      if (value.length > 10) {
        value = value.slice(0, 10);
      }

      e.target.value = value;

    });
  });

  const forms = document.querySelectorAll("form");

  forms.forEach(form => {

    form.addEventListener("submit", (e) => {

      const nameField = form.querySelector('input[placeholder*="Name"]');
      const phoneField = form.querySelector('input[placeholder*="Mobile"], input[placeholder*="Phone"]');
      const checkbox = form.querySelector('input[type="checkbox"]');
      if (nameField) {

        const nameValue = nameField.value.trim();

        if (nameValue === "") {
          alert("Please enter your name");
          e.preventDefault();
          return;
        }

        if (!/^[A-Za-z\s]+$/.test(nameValue)) {
          alert("Name must contain only alphabets");
          e.preventDefault();
          return;
        }
      }
      if (phoneField) {
        const phoneValue = phoneField.value.trim();
        if (phoneValue === "") {
          alert("Please enter phone number");
          e.preventDefault();
          return;
        }
        if (!/^[0-9]{10}$/.test(phoneValue)) {
          alert("Phone number must be 10 digits");
          e.preventDefault();
          return;
        }
      }
      if (checkbox && !checkbox.checked) {
        alert("Please agree to the Terms and Privacy Policy");
        e.preventDefault();
        return;
      }
      alert("Consultation is Booked!");

    });

  });

});