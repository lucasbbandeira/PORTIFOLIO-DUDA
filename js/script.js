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
    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
      item.classList.toggle("is-active", item === button);
    });
    destinations.forEach((card) => {
      card.hidden = region !== "Todos" && card.dataset.destination !== region;
    });
  });
});

const ugcModal = document.querySelector("[data-ugc-modal]");
const ugcTitle = document.querySelector("[data-ugc-title]");
const ugcVideo = document.querySelector("[data-ugc-video]");
const ugcBrand = document.querySelector("[data-ugc-brand]");
const ugcFormat = document.querySelector("[data-ugc-format]");
const ugcDescription = document.querySelector("[data-ugc-description]");

function closeUgcModal() {
  if (!ugcModal) return;
  if (ugcVideo) {
    ugcVideo.pause();
    ugcVideo.removeAttribute("src");
    ugcVideo.removeAttribute("poster");
    ugcVideo.load();
  }
  ugcModal.hidden = true;
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-ugc-open]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!ugcModal || !ugcTitle) return;
    ugcTitle.textContent = button.dataset.title || "Conteúdo UGC";
    if (ugcBrand) ugcBrand.textContent = button.dataset.brand || "";
    if (ugcFormat) ugcFormat.textContent = button.dataset.format || "";
    if (ugcDescription) ugcDescription.textContent = button.dataset.description || "";
    if (ugcVideo) {
      ugcVideo.src = button.dataset.src || "";
      ugcVideo.poster = button.dataset.poster || "";
      ugcVideo.load();
    }
    ugcModal.hidden = false;
    document.body.classList.add("modal-open");
    ugcModal.querySelector("[data-ugc-close]")?.focus();
    ugcVideo?.play().catch(() => {});
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

const homeVideoModal = document.querySelector("[data-home-video-modal]");
const homeVideoPlayer = document.querySelector("[data-home-video-player]");
const homeVideoCategory = document.querySelector("[data-home-video-category]");
const homeVideoTitle = document.querySelector("[data-home-video-title]");
const homeVideoDescription = document.querySelector("[data-home-video-description]");

function closeHomeVideo() {
  if (!homeVideoModal || !homeVideoPlayer) return;
  homeVideoPlayer.pause();
  homeVideoPlayer.removeAttribute("src");
  homeVideoPlayer.load();
  homeVideoModal.hidden = true;
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-video-src]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!homeVideoModal || !homeVideoPlayer || !homeVideoCategory || !homeVideoTitle || !homeVideoDescription) return;
    homeVideoPlayer.src = button.dataset.videoSrc;
    homeVideoPlayer.poster = button.dataset.videoPoster || "";
    homeVideoCategory.textContent = button.dataset.videoCategory || "";
    homeVideoTitle.textContent = button.dataset.videoTitle || "";
    homeVideoDescription.textContent = button.dataset.videoDescription || "";
    homeVideoModal.hidden = false;
    document.body.classList.add("modal-open");
    homeVideoModal.querySelector("[data-home-video-close]")?.focus();
    homeVideoPlayer.play().catch(() => {});
  });
});

document.querySelectorAll("[data-home-video-close]").forEach((button) => {
  button.addEventListener("click", closeHomeVideo);
});

homeVideoModal?.addEventListener("click", (event) => {
  if (event.target === homeVideoModal) closeHomeVideo();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeHomeVideo();
});

document.querySelectorAll("[data-copy-coupon]").forEach((button) => {
  button.addEventListener("click", async () => {
    const coupon = button.dataset.copyCoupon;
    if (!coupon) return;
    try {
      await navigator.clipboard.writeText(coupon);
    } catch {
      const field = document.createElement("textarea");
      field.value = coupon;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    const originalLabel = button.textContent;
    button.textContent = "CUPOM COPIADO ✓";
    window.setTimeout(() => { button.textContent = originalLabel; }, 2200);
  });
});
