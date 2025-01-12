let entry = 1;

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
    if (currentTheme.matches) {
        dn.checked = true;
        document.body.classList.add('dark');
    }
    shift();
    var title = localStorage.getItem('title');
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
    location.replace("http://127.0.0.1:5500/");
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

async function shift_title(title) {
    const main = document.getElementById("main");
    const rectangle = document.getElementById("rectangle");
    try {
        const response = await fetch("/HTML/" + title + ".html");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        main.style.opacity = 0;
        setTimeout(async () => {
            main.innerHTML = await response.text();
            rectangle.scrollTo(0, 0);
        }, 300);
        setTimeout(() => {
            main.style.opacity = 1;
        }, 300);
    } catch (error) {
        console.error('Failed to load:', error);
    }
}