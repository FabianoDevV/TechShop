

const menu = document.querySelector(".menu-icon")
const submenuMobile = document.querySelector(".subMenuMobile")
const clickElemento = document.querySelector(".submenuConfig")

menu.addEventListener("click", () => {
    submenuMobile.classList.add("activeMenu");

});

clickElemento.addEventListener("click", () => {
    submenuMobile.classList.remove("activeMenu");

});