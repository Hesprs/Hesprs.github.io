let entry = 1;
let layer = true;
let isDragging = false;
let offset = 0;
let hovered = false;
let sidenav_minimal = false;
let sidenav_width = 150;
let already = false;
let dark = '';

function cover_resize() {
    const cover = document.getElementById('cover');
    const sidenav = document.getElementById('sidenav');
    const rectangle_0 = document.getElementById('rectangle_0');
    const rectangle_1 = document.getElementById('rectangle_1');
    if (window.innerWidth >= 768) {
        if (already) {
            already = false;
            dn_complete();
        }
        cover.style.height = (window.innerHeight - 30) + 'px';
        if (window.innerWidth - sidenav_width - 45 < 300) {
            cover.style.width = '300px';
            sidenav_width = window.innerWidth - 345;
        } else {
            cover.style.width = (window.innerWidth - sidenav_width - 45) + 'px';
        }
        sidenav.style.width = sidenav_width + 'px';
    } else {
        if (!sidenav_minimal) {
            already = true;
            dn_minimal();
        }
        sidenav.style.width = 'calc(100% - 30px)';
        cover.style.width = (window.innerWidth - 30) + 'px';
        cover.style.height = (window.innerHeight - sidenav.offsetHeight - 45) + 'px';
    }
    rectangle_0.style.width = cover.offsetWidth + 'px';
    rectangle_0.style.height = cover.offsetHeight + 'px';
    rectangle_1.style.width = cover.offsetWidth + 'px';
    rectangle_1.style.height = cover.offsetHeight + 'px';
}

function toggle() {
    const dn = document.getElementById('dn');
    if (dn.checked) {
        document.body.classList.add('dark');
        dark = ' checked';
    } else {
        document.body.classList.remove('dark');
        dark = '';
    }
}

function change_1() {
    entry = 1;
    shift_title('aphroselene');
    shift();
}

function change_2() {
    entry = 2;
    shift();
}

function change_3() {
    entry = 3;
    shift_title('about');
    shift();
}

function change_4() {
    const dn = document.getElementById('dn');
    if (dn.checked) {
        dn.checked = false;
        dark = '';
        document.body.classList.remove('dark');
        shift();
    } else {
        dn.checked = true;
        dark = ' checked';
        document.body.classList.add('dark');
        shift();
    }
}

function initialize() {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const dn = document.getElementById('dn');
    const background = document.getElementById('background');
    setTimeout(() => {
        background.style.opacity = 1;
    }, 800);
    if (currentTheme.matches) {
        dark = ' checked';
        dn.checked = true;
        document.body.classList.add('dark');
    }
    shift();
    already = true;
    cover_resize();
    var title = localStorage.getItem('title');
    if (title !== null) {
        shift_title(title);
        localStorage.removeItem('title');
    } else {
        shift_title('aphroselene');
    }
}

function inpage_navi() {
    let current_page = window.location.href;
    current_page = current_page.replace('https://hesprs.github.io/', '');
    location.replace('https://hesprs.github.io');
    localStorage.setItem('title', current_page);
}

function shift() {
    const a = document.getElementById('1');
    const b = document.getElementById('2');
    const c = document.getElementById('3');
    const dn = document.getElementById('dn');
    if (window.innerWidth >= 767) {
        if (entry === 1) {
            if (dn.checked) {
                a.style = 'border-radius: 10px 10px 0px 0px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);';
            } else {
                a.style = 'border-radius: 10px 10px 0px 0px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);';
            }
            c.style = 'border-radius: 0px 0px 10px 10px;';
            b.style = 'border-radius: 0px;';
        } else if (entry === 2) {
            if (dn.checked) {
                b.style = 'border-radius: 0px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);';
            } else {
                b.style = 'border-radius: 0px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);';
            }
            a.style = 'border-radius: 10px 10px 0px 0px;';
            c.style = 'border-radius: 0px 0px 10px 10px;';
        } else if (entry === 3) {
            if (dn.checked) {
                c.style = 'border-radius: 0px 0px 10px 10px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);';
            } else {
                c.style = 'border-radius: 0px 0px 10px 10px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);';
            }
            a.style = 'border-radius: 10px 10px 0px 0px;';
            b.style = 'border-radius: 0px;';
        }
    } else {
        if (entry === 1) {
            if (dn.checked) {
                a.style = 'border-radius: 10px 0px 0px 10px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);';
            } else {
                a.style = 'border-radius: 10px 0px 0px 10px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);';
            }
            c.style = 'border-radius: 0px 10px 10px 0px;';
            b.style = 'border-radius: 0px;';
        } else if (entry === 2) {
            if (dn.checked) {
                b.style = 'border-radius: 0px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);';
            } else {
                b.style = 'border-radius: 0px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);';
            }
            a.style = 'border-radius: 10px 0px 0px 10px;';
            c.style = 'border-radius: 0px 10px 10px 0px;';
        } else if (entry === 3) {
            if (dn.checked) {
                c.style = 'border-radius: 0px 10px 10px 0px; background-color: rgb(75, 75, 75); color: rgb(190, 222, 248);';
            } else {
                c.style = 'border-radius: 0px 10px 10px 0px; background-color: rgb(190, 222, 248); color: rgb(109, 173, 208);';
            }
            a.style = 'border-radius: 10px 0px 0px 10px;';
            b.style = 'border-radius: 0px;';
        }
    }
}

function shift_title(title) {
    const rectangle_0 = document.getElementById('rectangle_0');
    const rectangle_1 = document.getElementById('rectangle_1');
    const cover = document.getElementById('cover');
    cover.style.opacity = 1;
    let timer = 0;
    if (layer) {
        layer = false;
    } else {
        layer = true;
    }
    setTimeout(() => {
        timer = 1;
        cover.style.pointerEvents = 'auto';
    }, 200);
    fetch('/Contents/' + title + '.txt')
    .then(async (result) => {
        if (!result.ok) {
            const res = await fetch('/Contents/404.txt');
            return res.text();
        } else {
            return result.text();
        }
    })
    .then(result => {
        if (layer) {
            if (timer === 1) {
                rectangle_0.scrollTo(0, 0);
                rectangle_0.innerHTML = result;
                rectangle_1.innerHTML = '';
                rectangle_0.style.pointerEvents = 'auto';
                rectangle_0.style.visibility = 'visible';
                rectangle_1.style.visibility = 'hidden';
                cover.style.opacity = 0;
                cover.style.pointerEvents = 'none';
            } else {
                const interval = setInterval(() => {
                    if (timer === 1) {
                        rectangle_0.scrollTo(0, 0);
                        rectangle_0.innerHTML = result;
                        rectangle_1.innerHTML = '';
                        rectangle_0.style.pointerEvents = 'auto';
                        rectangle_0.style.visibility = 'visible';
                        rectangle_1.style.visibility = 'hidden';
                        cover.style.opacity = 0;
                        cover.style.pointerEvents = 'none';
                        clearInterval(interval);
                    }
                }, 50);
            }
        } else {
            if (timer === 1) {
                rectangle_1.scrollTo(0, 0);
                rectangle_1.innerHTML = result;
                rectangle_0.innerHTML = '';
                rectangle_0.style.pointerEvents = 'none';
                rectangle_1.style.visibility = 'visible';
                rectangle_0.style.visibility = 'hidden';
                cover.style.opacity = 0;
                cover.style.pointerEvents = 'none';
            } else {
                const interval = setInterval(() => {
                    if (timer === 1) {
                        rectangle_1.scrollTo(0, 0);
                        rectangle_1.innerHTML = result;
                        rectangle_0.innerHTML = '';
                        rectangle_0.style.pointerEvents = 'none';
                        rectangle_1.style.visibility = 'visible';
                        rectangle_0.style.visibility = 'hidden';
                        cover.style.opacity = 0;
                        cover.style.pointerEvents = 'none';
                        clearInterval(interval);
                    }
                }, 50);
            }
        }
    });
}

function mouse_down(e) {
    const background = document.getElementById('background');
    offset = e.clientX - sidenav_width;
    isDragging = true;
    background.style.webkitUserSelect = 'none';
    background.style.mozUserSelect = 'none';
    background.style.msUserSelect = 'none';
    background.style.oUserSelect = 'none';
    background.style.userSelect = 'none';
}

function touch_start(e) {
    const background = document.getElementById('background');
    offset = e.touches[0].clientX - sidenav_width;
    isDragging = true;
    background.style.webkitUserSelect = 'none';
    background.style.mozUserSelect = 'none';
    background.style.msUserSelect = 'none';
    background.style.oUserSelect = 'none';
    background.style.userSelect = 'none';
}

function mouse_move(e) {
    if (isDragging) {
        const cover = document.getElementById('cover');
        const sidenav = document.getElementById('sidenav');
        if (e.clientX - offset >= 150 && e.clientX - offset <= window.innerWidth - 345 && !sidenav_minimal) {
            sidenav_width = (e.clientX - offset);
            cover_resize();
        } else if (e.clientX - offset < 150 && e.clientX > 46 + offset && !sidenav_minimal) {
            sidenav_width = 150;
            cover_resize();
        } else if (e.clientX - offset > window.innerWidth - 345) {
            sidenav_width = window.innerWidth - 345;
            cover_resize();
        }
        if (e.clientX <= 46 + offset && !sidenav_minimal) {
            sidenav_minimal = true;
            sidenav.style.transition = 'width 300ms';
            cover.style.transition = 'color 300ms, background-color 300ms, opacity 200ms, box-shadow 300ms, width 300ms';
            setTimeout(() => {
                sidenav.style.transition = '';
                cover.style.transition = '';
            }, 300);
            sidenav_width = 46;
            hide('text_1');
            hide('text_2');
            hide('text_3');
            dn_minimal();
            setInterval(() => cover_resize(), 20);
        } else if (e.clientX >= 150 + offset && sidenav_minimal) {
            sidenav_minimal = false;
            let transition = 300;
            sidenav.style.transition = 'width 300ms';
            cover.style.transition = 'color 300ms, background-color 300ms, opacity 200ms, box-shadow 300ms, width 300ms';
            sidenav_width = 150;
            show('text_1');
            show('text_2');
            show('text_3');
            dn_complete();
            fade = setInterval(() => {
                sidenav.style.transition = 'width ' + transition + 'ms';
                cover.style.transition = 'color 300ms, background-color 300ms, opacity 200ms, box-shadow 300ms, width ' + transition + 'ms';
                cover_resize();
                transition -= 20;
            }, 20);
            setTimeout(() => {
                clearInterval(fade);
                sidenav.style.transition = '';
                cover.style.transition = '';
            }, 300);
        }
    }
}

function touch_move(e) {
    if (isDragging) {
        const cover = document.getElementById('cover');
        const sidenav = document.getElementById('sidenav');
        if (e.touches[0].clientX - offset >= 150 && e.touches[0].clientX - offset <= window.innerWidth - 345 && !sidenav_minimal) {
            sidenav_width = (e.touches[0].clientX - offset);
            cover_resize();
        } else if (e.touches[0].clientX - offset < 150 && e.touches[0].clientX > 46 + offset && !sidenav_minimal) {
            sidenav_width = 150;
            cover_resize();
        } else if (e.touches[0].clientX - offset > window.innerWidth - 345) {
            sidenav_width = window.innerWidth - 345;
            cover_resize();
        }
        if (e.touches[0].clientX <= 46 + offset && !sidenav_minimal) {
            sidenav_minimal = true;
            sidenav.style.transition = 'width 300ms';
            cover.style.transition = 'color 300ms, background-color 300ms, opacity 200ms, box-shadow 300ms, width 300ms';
            setTimeout(() => {
                sidenav.style.transition = '';
                cover.style.transition = '';
            }, 300);
            sidenav_width = 46;
            hide('text_1');
            hide('text_2');
            hide('text_3');
            dn_minimal();
            setInterval(() => cover_resize(), 20);
        } else if (e.touches[0].clientX >= 150 + offset && sidenav_minimal) {
            sidenav_minimal = false;
            let transition = 300;
            sidenav.style.transition = 'width 300ms';
            cover.style.transition = 'color 300ms, background-color 300ms, opacity 200ms, box-shadow 300ms, width 300ms';
            sidenav_width = 150;
            show('text_1');
            show('text_2');
            show('text_3');
            dn_complete();
            fade = setInterval(() => {
                sidenav.style.transition = 'width ' + transition + 'ms';
                cover.style.transition = 'color 300ms, background-color 300ms, opacity 200ms, box-shadow 300ms, width ' + transition + 'ms';
                cover_resize();
                transition -= 20;
            }, 20);
            setTimeout(() => {
                clearInterval(fade);
                sidenav.style.transition = '';
                cover.style.transition = '';
            }, 300);
        }
    }
}

function mouse_up() {
    isDragging = false;
    const background = document.getElementById('background');
    const stretch_bar_1 = document.getElementById('stretch_bar_1');
    if (!hovered) {
        stretch_bar_1.style.backgroundColor = 'transparent';
    }
    background.style.webkitUserSelect = 'auto';
    background.style.mozUserSelect = 'auto';
    background.style.msUserSelect = 'auto';
    background.style.oUserSelect = 'auto';
    background.style.userSelect = 'auto';
}

function hover_color() {
    const stretch_bar_1 = document.getElementById('stretch_bar_1');
    const dn = document.getElementById('dn');
    hovered = true;
    if (dn.checked) {
        stretch_bar_1.style.backgroundColor = 'rgb(190, 222, 248)';
    } else {
        stretch_bar_1.style.backgroundColor = 'rgb(109, 173, 208)';
    }
}

function out_color() {
    const stretch_bar_1 = document.getElementById('stretch_bar_1');
    hovered = false;
    if (!isDragging) {
        stretch_bar_1.style.backgroundColor = 'transparent';
    }
}

function hide(element) {
    const e = document.getElementById(element);
    e.style.opacity = '0';
    e.style.width = '0px';
    e.style.margin = 'auto 0px auto 0px';
}

function show(element) {
    const e = document.getElementById(element);
    e.style.opacity = '';
    e.style.width = '';
    e.style.margin = '';
}

function dn_minimal() {
    const toggleWrapper = document.getElementById('toggleWrapper');
    toggleWrapper.style.opacity = '0';
    hide('label_light');
    const label_dark = document.getElementById('label_dark');
    label_dark.style.opacity = '0';
    label_dark.style.margin = 'auto 0px auto 0px';
    setTimeout(() => label_dark.style.width = '0px', 300)
    setTimeout(() => {
        toggleWrapper.style.width = '30px';
        toggleWrapper.innerHTML = `
            <input type='checkbox' id='dn'` + dark + `>
            <label for='dn' class='theme-toggle'>
                <svg aria-hidden='true' class='theme-toggle__within' height='30px' width='30px' viewBox='0 0 32 32' fill='currentColor'>
                    <clipPath id='theme-toggle__within__clip'>
                        <path d='M0 0h32v32h-32ZM6 16A1 1 0 0026 16 1 1 0 006 16' />
                    </clipPath>
                    <g clip-path='url(#theme-toggle__within__clip)'>
                        <path d='M30.7 21.3 27.1 16l3.7-5.3c.4-.5.1-1.3-.6-1.4l-6.3-1.1-1.1-6.3c-.1-.6-.8-.9-1.4-.6L16 5l-5.4-3.7c-.5-.4-1.3-.1-1.4.6l-1 6.3-6.4 1.1c-.6.1-.9.9-.6 1.3L4.9 16l-3.7 5.3c-.4.5-.1 1.3.6 1.4l6.3 1.1 1.1 6.3c.1.6.8.9 1.4.6l5.3-3.7 5.3 3.7c.5.4 1.3.1 1.4-.6l1.1-6.3 6.3-1.1c.8-.1 1.1-.8.7-1.4zM16 25.1c-5.1 0-9.1-4.1-9.1-9.1 0-5.1 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1c0 5.1-4 9.1-9.1 9.1z' />
                    </g>
                    <path class='theme-toggle__within__circle' d='M16 7.7c-4.6 0-8.2 3.7-8.2 8.2s3.6 8.4 8.2 8.4 8.2-3.7 8.2-8.2-3.6-8.4-8.2-8.4zm0 14.4c-3.4 0-6.1-2.9-6.1-6.2s2.7-6.1 6.1-6.1c3.4 0 6.1 2.9 6.1 6.2s-2.7 6.1-6.1 6.1z'/>
                    <path class='theme-toggle__within__inner' d='M16 9.5c-3.6 0-6.4 2.9-6.4 6.4s2.8 6.5 6.4 6.5 6.4-2.9 6.4-6.4-2.8-6.5-6.4-6.5z'/>
                </svg>
            </label>
        `;
        toggleWrapper.style.opacity = '1';
    }, 150)
}

function dn_complete() {
    const toggleWrapper = document.getElementById('toggleWrapper');
    toggleWrapper.style.opacity = '0';
    show('label_light');
    show('label_dark');
    setTimeout(() => {
        toggleWrapper.style.width = '50px';
        toggleWrapper.innerHTML = `
            <input type='checkbox' id='dn'` + dark + `>
	        <label for='dn' class='toggle'>
	        	<span class='toggle__handler'>
	        		<span class='crater crater--1'></span>
	        		<span class='crater crater--2'></span>
	        		<span class='crater crater--3'></span>
	        	</span>
	        	<span class='star star--1'></span>
	        	<span class='star star--2'></span>
	        	<span class='star star--3'></span>
	        	<span class='star star--4'></span>
	        	<span class='star star--5'></span>
	        	<span class='star star--6'></span>
	        </label>
        `;
        toggleWrapper.style.opacity = '1';
    }, 150)
}