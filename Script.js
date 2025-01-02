function resize() {
    var main = document.getElementById("main");
    var sidenav = document.getElementById("sidenav");
    var rectangle = document.getElementById("rectangle");
    var upper_cover = document.getElementById("upper_cover");
    if (window.innerWidth >= 767) {
        main.style.margin = "15px 15px 15px " + (sidenav.offsetWidth + 30) + "px";
        rectangle.style.width = (main.offsetWidth - 3) + "px";
        rectangle.style.height = "calc(100% - 33px)";
        upper_cover.style.height = 15 + "px";
    } else {
        main.style.margin = (sidenav.offsetHeight + 30) + "px 15px 15px 15px";
        rectangle.style.height = "calc(100% - 53px - " + sidenav.offsetHeight + "px)";
        rectangle.style.width = "calc(100% - 33px)";
        upper_cover.style.height = (sidenav.offsetHeight + 30) + "px";
    }
}

window.addEventListener('load', resize);
window.addEventListener('resize', resize);
