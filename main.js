

const btnTheme = document.querySelector(".fa-moon");


btnTheme.addEventListener("click", toggleTheme);
document.addEventListener("scroll", scroll.scrollUp);

const getBodyClass = localStorage.getItem("class-body-theme");
const getBtnClass = localStorage.getItem("class-btn-theme");

addThemeClass(getBodyClass, getBtnClass);
