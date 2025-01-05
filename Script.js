function resize() {
    const main = document.getElementById("main");
    const sidenav = document.getElementById("sidenav");
    const rectangle = document.getElementById("rectangle");
    const upper_cover = document.getElementById("upper_cover");
    const downer_cover = document.getElementById("downer_cover");
    if (window.innerWidth > 767) {
        main.style.margin = "15px 15px 15px " + (sidenav.offsetWidth + 30) + "px";
        rectangle.style.width = main.offsetWidth + "px";
        rectangle.style.height = "calc(100% - 30px)";
        upper_cover.style.width = (main.offsetWidth - 20) + "px";
        downer_cover.style.width = (main.offsetWidth - 20) + "px";
        upper_cover.style.height = "15px";
    } else {
        main.style.margin = (sidenav.offsetHeight + 30) + "px 15px 15px 15px";
        rectangle.style.height = "calc(100% - 45px - " + sidenav.offsetHeight + "px)";
        rectangle.style.width = "calc(100% - 30px)";
        upper_cover.style.width = (main.offsetWidth - 20) + "px";
        downer_cover.style.width = (main.offsetWidth - 20) + "px";
        upper_cover.style.height = (sidenav.offsetHeight + 30) + "px";
    }
}

function toggle() {;
    if (this.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
}

function default_LightDark() {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const dn = document.getElementById("dn");
    if (currentTheme.matches) {
        dn.checked = true;
        document.body.classList.add('dark');
    }
    dn.addEventListener('change', toggle);
}

window.addEventListener('DOMContentLoaded', resize);
window.addEventListener('DOMContentLoaded', default_LightDark);
window.addEventListener('load', resize);
window.addEventListener('resize', resize);
