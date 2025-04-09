
const routes = {
  "/": "<h1>Welcome to the Landing Page</h1><p>This is the main landing page of the site.</p>",
  "/about": "<h1>About</h1><p>Testing This is the about page.</p>",
  "/services": "<h1>Services</h1><p>Here are the services we offer.</p>",
  "/gallery": "<h1>Gallery</h1><p>Check out our work!</p>",
  "/contact": "<h1>Contact</h1><p>Get in touch with us.</p>",
};

function router() {
  const path = location.hash.slice(1) || "/";
  document.getElementById("app").innerHTML = routes[path] || "<h1>404 - Not Found</h1>";
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
