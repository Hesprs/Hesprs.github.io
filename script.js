let entry = 1;
let layer = 0;

function cover_resize() {
    const cover = document.getElementById("cover");
    const sidenav = document.getElementById("sidenav");
    const rectangle_0 = document.getElementById("rectangle_0");
    const rectangle_1 = document.getElementById("rectangle_1");
    if (window.innerWidth >= 768) {
        cover.style.width = (window.innerWidth - sidenav.offsetWidth - 45) + "px";
        cover.style.height = (window.innerHeight - 30) + "px";
    } else {
        cover.style.width = (window.innerWidth - 30) + "px";
        cover.style.height = (window.innerHeight - sidenav.offsetHeight - 45) + "px";
    }
    rectangle_0.style.width = cover.offsetWidth + "px";
    rectangle_0.style.height = cover.offsetHeight + "px";
    rectangle_1.style.width = cover.offsetWidth + "px";
    rectangle_1.style.height = cover.offsetHeight + "px";
}

function toggle() {
    const dn = document.getElementById("dn");
    if (dn.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

function change_1() {
    entry = 1;
    shift_title("aphroselene");
    shift();
}

function change_2() {
    entry = 2;
    shift();
}

function change_3() {
    entry = 3;
    shift_title("about");
    shift();
}

function change_4() {
    const dn = document.getElementById("dn");
    if (dn.checked) {
        dn.checked = false;
        document.body.classList.remove('dark');
        shift();
    } else {
        dn.checked = true;
        document.body.classList.add('dark');
        shift();
    }
}

function initialize() {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const dn = document.getElementById("dn");
    const background = document.getElementById("background");
    setTimeout(() => {
        background.style.opacity = 1;
    }, 800);
    var title = localStorage.getItem('title');
    if (currentTheme.matches) {
        dn.checked = true;
        document.body.classList.add('dark');
    }
    cover_resize();
    shift();
    if (title !== null) {
        shift_title(title);
        localStorage.removeItem('title');
    } else {
        shift_title("aphroselene");
    }
}

function inpage_navi() {
    let current_page = window.location.href;
    current_page = current_page.replace("https://hesprs.github.io/", "");
    location.replace("https://hesprs.github.io");
    localStorage.setItem('title', current_page);
}

function shift() {
    const a = document.getElementById("1");
    const b = document.getElementById("2");
    const c = document.getElementById("3");
    const dn = document.getElementById("dn");
    if (window.innerWidth >= 767) {
        if (entry === 1) {
            if (dn.checked) {
                a.style = "border-radius: 10px 10px 0px 0px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);";
            } else {
                a.style = "border-radius: 10px 10px 0px 0px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);";
            }
            c.style = "border-radius: 0px 0px 10px 10px;";
            b.style = "border-radius: 0px;";
        } else if (entry === 2) {
            if (dn.checked) {
                b.style = "border-radius: 0px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);";
            } else {
                b.style = "border-radius: 0px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);";
            }
            a.style = "border-radius: 10px 10px 0px 0px;";
            c.style = "border-radius: 0px 0px 10px 10px;";
        } else if (entry === 3) {
            if (dn.checked) {
                c.style = "border-radius: 0px 0px 10px 10px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);";
            } else {
                c.style = "border-radius: 0px 0px 10px 10px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);";
            }
            a.style = "border-radius: 10px 10px 0px 0px;";
            b.style = "border-radius: 0px;";
        }
    } else {
        if (entry === 1) {
            if (dn.checked) {
                a.style = "border-radius: 10px 0px 0px 10px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);";
            } else {
                a.style = "border-radius: 10px 0px 0px 10px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);";
            }
            c.style = "border-radius: 0px 10px 10px 0px;";
            b.style = "border-radius: 0px;";
        } else if (entry === 2) {
            if (dn.checked) {
                b.style = "border-radius: 0px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);";
            } else {
                b.style = "border-radius: 0px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);";
            }
            a.style = "border-radius: 10px 0px 0px 10px;";
            c.style = "border-radius: 0px 10px 10px 0px;";
        } else if (entry === 3) {
            if (dn.checked) {
                c.style = "border-radius: 0px 10px 10px 0px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);";
            } else {
                c.style = "border-radius: 0px 10px 10px 0px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);";
            }
            a.style = "border-radius: 10px 0px 0px 10px;";
            b.style = "border-radius: 0px;";
        }
    }
}

function shift_title(title) {
    const rectangle_0 = document.getElementById("rectangle_0");
    const rectangle_1 = document.getElementById("rectangle_1");
    const cover = document.getElementById("cover");
    cover.style.opacity = 1;
    let timer = 0;
    if (layer === 0) {
        layer = 1;
    } else {
        layer = 0;
    }
    setTimeout(() => {
        timer = 1;
        cover.style.pointerEvents = "auto";
    }, 200);
    fetch("/Contents/" + title + ".txt")
    .then(async (result) => {
        if (!result.ok) {
            const res = await fetch("/Contents/404.txt");
            return res.text();
        } else {
            return result.text();
        }
    })
    .then(result => {
        if (layer === 0) {
            if (timer === 1) {
                rectangle_0.scrollTo(0, 0);
                rectangle_0.innerHTML = result;
                rectangle_1.innerHTML = "";
                rectangle_0.style.pointerEvents = "auto";
                rectangle_0.style.visibility = "visible";
                rectangle_1.style.visibility = "hidden";
                cover.style.opacity = 0;
                cover.style.pointerEvents = "none";
            } else {
                const interval = setInterval(() => {
                    if (timer === 1) {
                        rectangle_0.scrollTo(0, 0);
                        rectangle_0.innerHTML = result;
                        rectangle_1.innerHTML = "";
                        rectangle_0.style.pointerEvents = "auto";
                        rectangle_0.style.visibility = "visible";
                        rectangle_1.style.visibility = "hidden";
                        cover.style.opacity = 0;
                        cover.style.pointerEvents = "none";
                        clearInterval(interval);
                    }
                }, 50);
            }
        } else {
            if (timer === 1) {
                rectangle_1.scrollTo(0, 0);
                rectangle_1.innerHTML = result;
                rectangle_0.innerHTML = "";
                rectangle_0.style.pointerEvents = "none";
                rectangle_1.style.visibility = "visible";
                rectangle_0.style.visibility = "hidden";
                cover.style.opacity = 0;
                cover.style.pointerEvents = "none";
            } else {
                const interval = setInterval(() => {
                    if (timer === 1) {
                        rectangle_1.scrollTo(0, 0);
                        rectangle_1.innerHTML = result;
                        rectangle_0.innerHTML = "";
                        rectangle_0.style.pointerEvents = "none";
                        rectangle_1.style.visibility = "visible";
                        rectangle_0.style.visibility = "hidden";
                        cover.style.opacity = 0;
                        cover.style.pointerEvents = "none";
                        clearInterval(interval);
                    }
                }, 50);
            }
        }
    });
}