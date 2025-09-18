const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eye-icon");
const eyePath = document.getElementById("eye-path");
const eyeOutline = document.getElementById("eye-outline");

eyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    eyePath.setAttribute("d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.249-3.615M9.88 9.88a3 3 0 104.24 4.24");
    eyeOutline.setAttribute("d", "M3 3l18 18");
  } else {
    passwordInput.type = "password";

    eyePath.setAttribute("d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z");
    eyeOutline.setAttribute("d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z");
  }
});
