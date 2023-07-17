/*-------DARK-MOOD-BUTTON--------*/
const dark = document.querySelector("#dark-mode");
const bodyMode = document.body;

function change() {
  dark.checked
    ? document.body.classList.add("dark")
    : bodyMode.classList.remove("dark");
}

dark.addEventListener("change", change);
