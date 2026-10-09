(() => {
  "use strict";

  const toast = document.getElementById("lobbyToast");
  let toastTimeout;

  function showNotice(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => {
      toast.classList.remove("visible");
    }, 2400);
  }

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.dataset.action) {
        case "new-game":
          showNotice("Your journey will begin in the next chapter.");
          break;
        case "continue":
          showNotice("No saved journey is available yet.");
          break;
        case "settings":
          showNotice("Settings will be added in a later step.");
          break;
      }
    });
  });
})();
