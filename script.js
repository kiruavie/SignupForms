document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm_password");
  var passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", (e) => {
    // Check that all required fields have been completed

    var requiredInputs = document.querySelectorAll("[required]");

    for (let i = 0; i < requiredInputs.length; i++) {
      if (!requiredInputs[i].value.trim()) {
        e.preventDefault();
        showError("Please fill in all required fields");
        return;
      }
    }

    // Check if passwords match

    if (passwordInput !== confirmPasswordInput) {
      e.preventDefault();
      showError("The passwords do not match.");
    } else {
      passwordError.style.display = "none";
    }
  });

  // validation real time
  // passwordInput.addEventListener("input", validatePasswords);
  // confirmPasswordInput.addEventListener("input", validatePasswords);

  function validatePasswords() {
    if (passwordInput !== confirmPasswordInput) {
      showError("The passwords do not match.");
    } else {
      passwordError.style.display = "none";
    }
  }
  function showError(message) {
    passwordError.innerHTML = message;
    passwordError.style.display = "block";
  }
});
