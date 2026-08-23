const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
