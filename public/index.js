const menutBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

menutBtn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
