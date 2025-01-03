function resize() {
    var main = document.getElementById("main");
    var sidenav = document.getElementById("sidenav");
    var rectangle = document.getElementById("rectangle");
    var upper_cover = document.getElementById("upper_cover");
    if (window.innerWidth > 767) {
        main.style.margin = "15px 15px 15px " + (sidenav.offsetWidth + 30) + "px";
        rectangle.style.width = main.offsetWidth + "px";
        rectangle.style.height = "calc(100% - 30px)";
        upper_cover.style.height = 15 + "px";
    } else {
        main.style.margin = (sidenav.offsetHeight + 30) + "px 15px 15px 15px";
        rectangle.style.height = "calc(100% - 45px - " + sidenav.offsetHeight + "px)";
        rectangle.style.width = "calc(100% - 30px)";
        upper_cover.style.height = (sidenav.offsetHeight + 30) + "px";
    }
}
window.addEventListener('DOMContentLoaded', resize);
window.addEventListener('load', resize);
window.addEventListener('resize', resize);