document.addEventListener("readystatechange", function (event) {
    if (event.target.readyState === "complete") {
        init();
    }
});

function init() {
    var openBtn = document.querySelector("[data-js-nav-open]");
    var closeBtn = document.querySelector("[data-js-nav-close]");
    var navbar = document.querySelector("[data-js-nav-section]");

    openBtn.addEventListener("click", function () {
        navbar.classList.add("-active");
    });

    closeBtn.addEventListener("click", function () {
        navbar.classList.remove("-active");
    });
}