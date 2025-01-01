function resize() {
    var main = document.getElementById("main");
    var sidenav = document.getElementById("sidenav");
    var rectangle = document.getElementById("rectangle");
    var upper_cover = document.getElementById("upper_cover");
    if (window.innerWidth >= 767) {
        main.style.margin = "20px 20px 20px " + (sidenav.offsetWidth + 40) + "px";
        rectangle.style.width = (main.offsetWidth - 3) + "px";
        rectangle.style.height = "calc(100% - 43px)";
        upper_cover.style.height = 20 + "px";
    } else {
        main.style.margin = (sidenav.offsetHeight + 40) + "px 20px 20px 20px";
        rectangle.style.height = "calc(100% - 63px - " + sidenav.offsetHeight + "px)";
        rectangle.style.width = "calc(100% - 43px)";
        upper_cover.style.height = (sidenav.offsetHeight + 40) + "px";
    }
}

window.addEventListener('load', resize);
window.addEventListener('resize', resize);