const routes = {
  "/": "home.html",
  "/soak-2022": "soak22fancy.html",
  "/soak-2023": "soak23.html",
  "/resource-library": "resources.html",
  "/donations": "donations.html",
};

function router() {
  const path = location.hash.slice(1) || "/";
  const file = routes[path];

  const app = document.getElementById("app");

  if (file) {
    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Page not found");
        }
        return response.text();
      })
      .then((html) => {
        app.innerHTML = html;
      })
      .catch((err) => {
        app.innerHTML = "<h1>404 - Page Not Found</h1>";
      });
  } else {
    app.innerHTML = "<h1>404 - Page Not Found</h1>";
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);