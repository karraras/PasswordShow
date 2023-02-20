let eyes = document.querySelector(".eyes");
let input = document.querySelector("input");
eyes.addEventListener("click", (e) => {
  e.target.parentElement.classList.toggle("pop");

  if (eyes.classList.contains("pop")) {
    input.type = "password";
  } else {
    input.type = "text";
  }
});

document.querySelector(".lock").addEventListener("click", () => {
  eyes.style.display = "none";
  document.querySelector("input").value = "";
  document.querySelector(".inputs").style.boxShadow = "";
});
window.oninput = function () {
  eyes.style.display = "block";

  document.querySelector(".inputs").style.boxShadow = "0px 0px 5px 0px #00edff";
};
