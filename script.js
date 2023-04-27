const shareButton = document.querySelector("button");

const showSharingOptions = () => {
  const sharingMenu = document.querySelector(".sharing-menu");
  sharingMenu.classList.toggle("sharing-menu-active");
};

shareButton.addEventListener("click", showSharingOptions);
