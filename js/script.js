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

const filterButtons = document.querySelectorAll("[data-filter]");
const destinations = document.querySelectorAll("[data-destination]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const region = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    destinations.forEach((card) => {
      card.hidden = region !== "Todos" && card.dataset.destination !== region;
    });
  });
});

const ugcModal = document.querySelector("[data-ugc-modal]");
const ugcTitle = document.querySelector("[data-ugc-title]");

function closeUgcModal() {
  if (!ugcModal) return;
  ugcModal.hidden = true;
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-ugc-open]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!ugcModal || !ugcTitle) return;
    ugcTitle.textContent = button.dataset.ugcOpen;
    ugcModal.hidden = false;
    document.body.classList.add("modal-open");
    ugcModal.querySelector("[data-ugc-close]")?.focus();
  });
});

document.querySelectorAll("[data-ugc-close]").forEach((button) => {
  button.addEventListener("click", closeUgcModal);
});

ugcModal?.addEventListener("click", (event) => {
  if (event.target === ugcModal) closeUgcModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeUgcModal();
});
