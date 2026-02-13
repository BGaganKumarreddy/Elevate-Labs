const routes = {
    "/": "<h1>Home</h1><p>Welcome to Home Page</p>",
    "/about": "<h1>About</h1><p>This is About Page</p>",
    "/contact": "<h1>Contact</h1><p>This is Contact Page</p>"
};

function render(path) {
    const content = document.getElementById("content");
    content.innerHTML = routes[path] || "<h1>404</h1>";
}

function navigate(path) {
    history.pushState({}, "", path);
    render(path);
}

document.addEventListener("click", function (e) {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigate(e.target.getAttribute("href"));
    }
});

window.addEventListener("popstate", function () {
    render(location.pathname);
});

render(location.pathname);
