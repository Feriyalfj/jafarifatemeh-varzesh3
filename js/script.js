const navs = document.querySelectorAll(".nav > .nav-item");
const contents = document.querySelectorAll(".content");

navs.forEach((nav, index) => {
  nav.addEventListener("click", () => clickHandler(nav, index));
});

function removeAllActiceTabsClass() {
  navs.forEach((nav) => {
    nav.classList.remove("active-nav");
  });
}

function removeAllActiceContentsClass() {
  contents.forEach((content) => {
    content.classList.remove("active-content");
  });
}

function clickHandler(clickedTab, index) {
  removeAllActiceTabsClass();
  removeAllActiceContentsClass();
  clickedTab.classList.add("active-nav");
  contents[index].classList.add("active-content");
}
