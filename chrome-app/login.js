const login = document.querySelector("#login");
const loginInput = login.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  login.classList.add(HIDDEN_CLASSNAME);
  printUser();
}

function printUser() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  login.classList.remove(HIDDEN_CLASSNAME);
  login.addEventListener("submit", onLoginSubmit);
} else {
  printUser();
}
