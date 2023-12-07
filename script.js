const loginSec = document.querySelector(".login-section");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const wrapper = document.querySelector(".wrapper");
const loader = document.querySelector(".loader");
const loaderContainer = document.querySelector(".container");
const loginGreeting = document.querySelector(".login-greeting");
const registerGreeting = document.querySelector(".register-greeting");

registerLink.addEventListener("click", () => {
  loginSec.classList.add("active")
})

loginLink.addEventListener("click", () => {
  loginSec.classList.remove("active")
})

loginBtn.addEventListener("click", () => {
  wrapper.style.display = "none";
  loaderContainer.style.display = "flex";
  loader.style.display = "flex";
  loginGreeting.style.display = "block";
})

registerBtn.addEventListener("click", () => {
  wrapper.style.display = "none";
  loaderContainer.style.display = "flex";
  loader.style.display = "flex";
  registerGreeting.style.display = "block";
})