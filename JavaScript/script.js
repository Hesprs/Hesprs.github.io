let layer = true;
let isDragging = false;
let offset = 0;
let hovered = false;
let sidenav_minimal = false;
let sidenav_width = 150;
let already = false;
let dark = '';
let songIndex = 0;
let isPlaying = false;
const songs = ['a Memories for Us', 'Beyound the Timeline', 'Celestial Interwine', 'No Man\'s Land', 'the History'];

const cover = document.getElementById('cover');
const sidenav = document.getElementById('sidenav');
const rectangle_0 = document.getElementById('rectangle_0');
const rectangle_1 = document.getElementById('rectangle_1');
const background = document.getElementById('background');
const a = document.getElementById('1');
const b = document.getElementById('2');
const c = document.getElementById('3');
const d = document.getElementById('4');
const stretch_bar_1 = document.getElementById('stretch_bar_1');
const toggleWrapper = document.getElementById('toggleWrapper');
const label_dark = document.getElementById('label_dark');
const stretch_bar = document.getElementById('stretch_bar');
const musicContainer = document.getElementById('music-container');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover_1 = document.getElementById('cover_1');
const play_light = document.getElementById('play_light');
const play_dark = document.getElementById('play_dark');
const pause_light = document.getElementById('pause_light');
const pause_dark = document.getElementById('pause_dark');
const next_light = document.getElementById('next_light');
const next_dark = document.getElementById('next_dark');
const upper_music_navigation = document.getElementById('upper_music_navigation');
const bottom_music_navigation = document.getElementById('bottom_music_navigation');

playButton.addEventListener('click', plause);
window.addEventListener('load', cover_resize);
window.addEventListener('resize', cover_resize);
a.addEventListener('click', change_1);
b.addEventListener('click', change_2);
c.addEventListener('click', change_3);
d.addEventListener('click', change_4);
stretch_bar.addEventListener('touchstart', touch_start);
stretch_bar.addEventListener('mousedown', mouse_down);
document.addEventListener('mousemove', mouse_move);
document.addEventListener('touchmove', touch_move);
window.addEventListener('mouseup', mouse_up);
window.addEventListener('touchend', mouse_up);
document.addEventListener('mouseleave', mouse_up);
stretch_bar.addEventListener('mouseover', hover_color);
stretch_bar.addEventListener('touchstart', hover_color);
stretch_bar.addEventListener('mouseout', out_color);
stretch_bar.addEventListener('touchend', out_color);
window.addEventListener('DOMContentLoaded', initialize);
nextButton.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);

function cover_resize() { 
    if (window.innerWidth >= 768) {
        if (already) {
            already = false;
            music_complete();
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
        if (!sidenav_minimal && already === false) {
            already = true;
            music_minimal();
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

function change_1() {
    if (!a.classList.contains('checked')) {
        shift_title('aphroselene');
        a.classList.add('checked');
        b.classList.remove('checked');
        c.classList.remove('checked');
    }
}

function change_2() {
    if (!b.classList.contains('checked')) {
        b.classList.add('checked');
        a.classList.remove('checked');
        c.classList.remove('checked');
        rectangle_0.innerHTML = !b.classList.contains('checked');
        rectangle_1.innerHTML = !b.classList.contains('checked');
    }
}

function change_3() {
    if (!c.classList.contains('checked')) {
        shift_title('about');
        c.classList.add('checked');
        a.classList.remove('checked');
        b.classList.remove('checked');
    }
}

function change_4() {
    if (dn.checked) {
        dn.checked = false;
        turn_light();
    } else {
        dn.checked = true;
        turn_dark();
    }
}

function toggle() {
    if (dn.checked) {
        turn_dark();
    } else {
        turn_light();
    }
}

function turn_dark() {
    dark = ' checked';
    document.body.classList.add('dark');
    next_dark.style.opacity = '1';
    next_light.style.opacity = '0';
    if (isPlaying) {
        pause_dark.style.opacity = '1';
        pause_light.style.opacity = '0';
    } else {
        play_dark.style.opacity = '1';
        play_light.style.opacity = '0';
    }
}

function turn_light() {
    dark = '';
    document.body.classList.remove('dark');
    next_dark.style.opacity = '0';
    next_light.style.opacity = '1';
    if (isPlaying) {
        pause_dark.style.opacity = '0';
        pause_light.style.opacity = '1';
    } else {
        play_dark.style.opacity = '0';
        play_light.style.opacity = '1';
    }
}

function initialize() {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (currentTheme.matches) {
        dark = ' checked';
        dn.checked = true;
        document.body.classList.add('dark');
        play_light.style.opacity = "0";
        next_light.style.opacity = "0";
    } else {
        play_dark.style.opacity = '0';
        next_dark.style.opacity = "0";
    }
    setTimeout(() => {
        background.style.opacity = 1;
    }, 800);
    setTimeout(() => {
        cover_resize();
    }, 600);
    var title = localStorage.getItem('title');
    if (title !== null) {
        shift_title(title);
        localStorage.removeItem('title');
    } else {
        shift_title('aphroselene');
        a.classList.add('checked');
    }
    if (window.innerWidth >= 768) {
        dn_complete();
    } else {
        dn_minimal();
        music_minimal();
    }
}

function shift_title(title) {
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
    offset = e.clientX - sidenav_width;
    isDragging = true;
    background.style.webkitUserSelect = 'none';
    background.style.mozUserSelect = 'none';
    background.style.msUserSelect = 'none';
    background.style.oUserSelect = 'none';
    background.style.userSelect = 'none';
}

function touch_start(e) {
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
            music_minimal();
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
            music_complete();
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
            music_minimal();
            fade_out = setInterval(() => cover_resize(), 20);
            setTimeout(() => {
                clearInterval(fade_out);
                sidenav.style.transition = '';
                cover.style.transition = '';
            }, 300);
        } else if (e.touches[0].clientX >= 150 + offset && sidenav_minimal) {
            sidenav_minimal = false;
            let transition = 300;
            sidenav.style.transition = 'width 300ms';
            cover.style.transition = 'color 300ms, background-color 300ms, opacity 200ms, box-shadow 300ms, width 300ms';
            sidenav.style.transition = 'width ' + transition + 'ms';
                cover.style.transition = 'color 300ms, background-color 300ms, opacity 200ms, box-shadow 300ms, width ' + transition + 'ms';
            show('text_1');
            show('text_2');
            show('text_3');
            dn_complete();
            music_complete();
            fade_in = setInterval(() => {
                cover_resize();
            }, 20);
            setTimeout(() => {
                clearInterval(fade_in);
                sidenav.style.transition = '';
                cover.style.transition = '';
            }, 300);
        }
    }
}

function mouse_up() {
    isDragging = false;
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
    hovered = true;
    if (dn.checked) {
        stretch_bar_1.style.backgroundColor = 'rgb(190, 222, 248)';
    } else {
        stretch_bar_1.style.backgroundColor = 'rgb(109, 173, 208)';
    }
}

function out_color() {
    hovered = false;
    if (!isDragging) {
        stretch_bar_1.style.backgroundColor = 'transparent';
    }
}

function hide(element, duration = 300) {
    const e = document.getElementById(element);
    e.style.opacity = '0';
    e.style.width = '0px';
    e.style.height = '0px';
    setTimeout(() => {
        e.style.margin = '0px';
        e.style.padding = '0px';
        e.style.visibility = 'hidden';
    }, duration)
}

function icon_hide(element, duration = 300) {
    const e = document.getElementById(element);
    e.style.opacity = '0';
    setTimeout(() => {
        e.style.width = '0px';
        e.style.height = '0px';
        e.style.margin = '0px';
        e.style.padding = '0px';
        e.style.visibility = 'hidden';
    }, duration)
}

function show(element, duration = 300) {
    const e = document.getElementById(element);
    e.style.opacity = '';
    e.style.margin = '';
    e.style.visibility = 'visible';
    e.style.padding = '';
    setTimeout(() => {
        e.style.width = '';
        e.style.height = '';
    }, duration) 
}

function icon_show(element) {
    const e = document.getElementById(element);
    e.style.opacity = '';
    e.style.margin = '';
    e.style.width = '';
    e.style.height = '';
    e.style.visibility = 'visible';
    e.style.padding = ''; 
}

function dn_minimal() {
    toggleWrapper.style.opacity = '0';
    hide('label_light');
    hide('label_dark');
    setTimeout(() => {
        toggleWrapper.style.width = '30px';
        toggleWrapper.innerHTML = `
            <input type='checkbox' id='dn'` + dark + `>
            <label for='dn' class='theme-toggle fancy_color'>
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
        const dn = document.getElementById('dn');
        dn.addEventListener('change', toggle);
    }, 150)
}

function dn_complete() {
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
        const dn = document.getElementById('dn');
        dn.addEventListener('change', toggle);
    }, 150)
}

function music_minimal() {
    musicContainer.style.height = '30px';
    icon_hide('play_dark');
    icon_hide('play_light');
    icon_hide('pause_light');
    icon_hide('pause_dark');
    icon_hide('next_light');
    icon_hide('next_dark');

    icon_hide('progress-container');
    hide('title');
    setTimeout(() => {
        upper_music_navigation.style.height = '0px';
        bottom_music_navigation.style.height = '0px';
    }, 300)
    fade_in = setInterval(() => {
        cover_resize();
    }, 20);
    setTimeout(() => {
        clearInterval(fade_in);
    }, 300);
    musicContainer.addEventListener('click', plause);
    musicContainer.classList.add('expand');
    playButton.removeEventListener('click', plause);
}

function music_complete() {
    musicContainer.style.height = '80px';
    upper_music_navigation.style.height = '30px';
    bottom_music_navigation.style.height = '20px';
    icon_show('play_dark');
    icon_show('play_light');
    icon_show('pause_light');
    icon_show('pause_dark');
    icon_show('next_light');
    icon_show('next_dark');
    icon_show('progress-container');
    show('title');
    title.style.margin = 'auto 0px auto auto';
    title.style.padding = '0px 0px 0px 8px';
    setTimeout(() => title.style.height = '30px', 350)
    progressContainer.style.margin = 'auto 0px auto 0px';
    if (dn.checked) {
            next_light.style.opacity = '0';
        if (isPlaying) {
            play_dark.style.opacity = '0';
            pause_light.style.opacity = '0';
            play_light.style.opacity = '0';
        } else {
            pause_dark.style.opacity = '0';
            pause_light.style.opacity = '0';
            play_light.style.opacity = '0';
        }
    } else {
        next_dark.style.opacity = '0';
        if (isPlaying) {
            pause_dark.style.opacity = '0';
            play_dark.style.opacity = '0';
            play_light.style.opacity = '0';
        } else {
            pause_dark.style.opacity = '0';
            play_dark.style.opacity = '0';
            pause_light.style.opacity = '0';
        }
    }
    musicContainer.removeEventListener('click', plause);
    musicContainer.classList.remove('expand');
    playButton.addEventListener('click', plause)
}