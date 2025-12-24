let deferredPrompt;
const installBtn = document.getElementById("installBtn");

installBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "inline-block";
});

installBtn.addEventListener("click", () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(() => {
    installBtn.style.display = "none";
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
