(() => {
  "use strict";
  const toast = document.getElementById("lobbyToast");
  let toastTimeout;
  function showNotice(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove("visible"), 2400);
  }
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.action === "new-game") showNotice("Your journey will begin in the next chapter.");
      if (button.dataset.action === "continue") showNotice("No saved journey is available yet.");
      if (button.dataset.action === "settings") showNotice("Settings will be added in a later step.");
    });
  });
})();
