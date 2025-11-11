document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("helloButton");
  if (button) {
    button.addEventListener("click", () => {
      alert("Привет! Рад, что ты посетил сайт");
    });
  }
});
