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
let current_page;
let language;
const songs = [
/*0*/'a Memories for Us',
/*1*/'Beyound the Timeline',
/*2*/'Celestial Intertwine',
/*3*/'No Man\'s Land',
/*4*/'the History'
];
const surls = [
/*0*/'https://music.163.com/song/media/outer/url?id=28481734.mp3',                                                                                                                                                                                                                    
/*1*/'https://music.163.com/song/media/outer/url?id=1922395111.mp3',
/*2*/'https://music.163.com/song/media/outer/url?id=1911868531.mp3',
/*3*/'https://ws.stream.qqmusic.qq.com/C400004Plyaj0QlCIJ.m4a?guid=911806690&vkey=FE949A382ECEDCBD1AB2BC6050B05D0B32ECB3001A83B59064097556E0DF682CA34A6CEC269B8430C7BEC363BF839F47D9168742F06E311A__v21e2a16b6&uin=&fromtag=120032&src=C400001Adjs637aGZ3.m4a',
/*4*/'https://music.163.com/song/media/outer/url?id=1394601255.mp3'
]
const iurls = [
/*0*/'https://pic1.imgdb.cn/item/679f4bf1d0e0a243d4f99044.jpg',
/*1*/'https://p2.music.126.net/HVeWYaPR7FB8FrX_e-eJoA==/109951167077881007.jpg?param=100x100',
/*2*/'https://pic1.imgdb.cn/item/679f4c04d0e0a243d4f99046.png',
/*3*/'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004HVFw2DGb8w.jpg',
/*4*/'https://p1.music.126.net/c55oo6_xrGMZP8vIrSGTZg==/109951164401545279.jpg?param=100x100'
]

const cover = document.getElementById('cover');
const sidenav = document.getElementById('sidenav');
const rectangle_0 = document.getElementById('rectangle_0');
const rectangle_1 = document.getElementById('rectangle_1');
const background = document.getElementById('background');
const stretch_bar_1 = document.getElementById('stretch_bar_1');
const toggleWrapper = document.getElementById('toggleWrapper');
const label_dark = document.getElementById('label_dark');
const label_light = document.getElementById('label_light');
const stretch_bar = document.getElementById('stretch_bar');
const musicContainer = document.getElementById('music-container');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progress_container = document.getElementById('progress-container');
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
const home = document.getElementById('home');
const exploration = document.getElementById('exploration');
const about = document.getElementById('about');
const day_night = document.getElementById('day_night');
const zh_Hans = document.getElementById('zh_Hans');
const en = document.getElementById('en');
const de = document.getElementById('de');
const back_button = document.getElementById('back');
const shade = document.getElementById('shade');
const pop_up = document.getElementById('pop_up');
const language_option = document.getElementById('language_option');
const zh_Hans_label = document.getElementById('zh_Hans_label');
const en_label = document.getElementById('en_label');
const de_label = document.getElementById('de_label');
const text_1 = document.getElementById('text_1');
const text_2 = document.getElementById('text_2');
const text_3 = document.getElementById('text_3');
const text_4 = document.getElementById('text_4');
const nation = document.getElementById('nation');
const pop_up_title = document.getElementById('pop_up_title');

playButton.addEventListener('click', plause);
window.addEventListener('load', cover_resize);
window.addEventListener('resize', cover_resize);
home.addEventListener('click', change_1);
exploration.addEventListener('click', change_2);
about.addEventListener('click', change_3);
day_night.addEventListener('click', change_4);
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
progress_container.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);
zh_Hans.addEventListener('click', toggle_language);
en.addEventListener('click', toggle_language);
de.addEventListener('click', toggle_language);
back_button.addEventListener('click', back);
shade.addEventListener('click', back);
language_option.addEventListener('click', language_clicked);

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
    if (!home.classList.contains('checked')) {
        current_page = 'aphroselene';
        shift_title();
        home.classList.add('checked');
        exploration.classList.remove('checked');
        about.classList.remove('checked');
    }
}

function change_2() {
    if (!exploration.classList.contains('checked')) {
        exploration.classList.add('checked');
        home.classList.remove('checked');
        about.classList.remove('checked');
    }
}

function change_3() {
    if (!about.classList.contains('checked')) {
        current_page = 'about';
        shift_title();
        about.classList.add('checked');
        home.classList.remove('checked');
        exploration.classList.remove('checked');
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

function language_clicked() {
    shade.style.opacity = '1';
    pop_up.style.opacity = '1';
    shade.style.pointerEvents = 'auto';
    pop_up.style.pointerEvents = 'auto';
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
    if (!sidenav_minimal) {
        next_dark.classList.remove('opacity');
        next_light.classList.add('opacity');
        if (isPlaying) {
            pause_dark.classList.remove('opacity');
            pause_light.classList.add('opacity');
        } else {
            play_dark.classList.remove('opacity');
            play_light.classList.add('opacity');
        }
    }
}

function turn_light() {
    dark = '';
    document.body.classList.remove('dark');
    if (!sidenav_minimal) {
        next_dark.classList.add('opacity');
        next_light.classList.remove('opacity');
        if (isPlaying) {
            pause_dark.classList.add('opacity');
            pause_light.classList.remove('opacity');
        } else {
            play_dark.classList.add('opacity');
            play_light.classList.remove('opacity');
        }
    }
}

function initialize() {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (currentTheme.matches) {
        dark = ' checked';
        dn.checked = true;
        document.body.classList.add('dark');
        play_light.classList.add('opacity');
        next_light.classList.add('opacity');
    } else {
        play_dark.classList.add('opacity');
        next_dark.classList.add('opacity');
    }
    setTimeout(() => {
        background.style.opacity = 1;
    }, 800);
    setTimeout(() => {
        cover_resize();
    }, 600);
    let redirect = localStorage.getItem('title');
    if (redirect === null) {
        current_page = 'aphroselene';
        if (navigator.language.includes('zh')) {
            language = 'zh_Hans';
        } else if (navigator.language.includes('de')) {
            language = 'de';
        } else {
            language = 'en';
        }
    } else {
        localStorage.removeItem('title');
        if (redirect.includes('/')) {
            redirect = redirect.split('/');
            language = redirect[0];
            current_page = redirect[1];
        } else {
            language = 'en';
            current_page = redirect;
        }
    }
    toggle_language();
    home.classList.add('checked');
    if (window.innerWidth >= 768) {
        dn_complete();
    } else {
        dn_minimal();
        music_minimal();
    }
}

function shift_title(title = current_page, lang = language) {
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
    fetch('/Contents/' + title + '/' + lang + '.txt')
    .then(async (result) => {
        if (!result.ok) {
            const res = await fetch('/Contents/404/' + lang + '.txt');
            return res.text();
        } else {
            return result.text();
        }
    })
    .then(result => {
        if (language === 'en') {
            modify_url('/' + title);
        } else {
            modify_url('/' + language + '/' + title);
        }
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
            hide('text_4');
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
            show('text_4');
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
            hide('text_4');
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
            show('text_4');
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
    e.classList.add('width', 'height', 'opacity');
    setTimeout(() => {
        e.classList.add('margin');
    }, duration)
}

function icon_hide(element, duration = 300) {
    const e = document.getElementById(element);
    e.classList.add('opacity');
    setTimeout(() => {
        e.classList.add('height', 'weight', 'margin');
    }, duration)
}

function show(element, duration = 300) {
    const e = document.getElementById(element);
    e.classList.remove('margin', 'opacity');
    setTimeout(() => {
        e.classList.remove('width', 'height');
    }, duration) 
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

function modify_url(url = '') { 
    let stateObj = { id: '100' }; 
    window.history.replaceState(stateObj, 'Page 3', url); 
}

function back() {
    shade.style.opacity = '0';
    pop_up.style.opacity = '0';
    shade.style.pointerEvents = 'none';
    pop_up.style.pointerEvents = 'none';
}

function toggle_language() {
    var ele = document.getElementsByName('language');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            language = ele[i].value;
    }
    document.documentElement.setAttribute("lang", language);
    shift_title()
    if (language === 'en') {
        en_label.classList.add('checked');
        en_label.classList.remove('clickable');
        en.removeEventListener('click', toggle_language);
        text_1.innerHTML = 'Homepage';
        text_2.innerHTML = 'Exploration';
        text_3.innerHTML = 'About';
        text_4.innerHTML = 'English';
        label_dark.innerHTML = 'Dark';
        label_light.innerHTML = 'Light';
        pop_up_title.innerHTML = 'Languages';
        nation.src = 'https://pic1.imgdb.cn/item/679f7a55d0e0a243d4f99b21.png';
    } else {
        en_label.classList.remove('checked');
        en_label.classList.add('clickable');
        en.addEventListener('click', toggle_language);
    }
    if (language === 'zh_Hans') {
        zh_Hans_label.classList.add('checked');
        zh_Hans_label.classList.remove('clickable');
        zh_Hans.removeEventListener('click', toggle_language);
        text_1.innerHTML = '主页';
        text_2.innerHTML = '探索';
        text_3.innerHTML = '关于';
        text_4.innerHTML = '简体中文';
        label_dark.innerHTML = '暗';
        label_light.innerHTML = '明';
        pop_up_title.innerHTML = '语言';
        nation.src = 'https://pic1.imgdb.cn/item/67a03c54d0e0a243d4f9a619.png';
        label_dark.classList.add('chinese');
        label_light.classList.add('chinese');
    } else {
        zh_Hans_label.classList.remove('checked');
        zh_Hans_label.classList.add('clickable');
        zh_Hans.addEventListener('click', toggle_language);
        label_dark.classList.remove('chinese');
        label_light.classList.remove('chinese');
    }
    if (language === 'de') {
        de_label.classList.add('checked');
        de_label.classList.remove('clickable');
        de.removeEventListener('click', toggle_language);
        text_1.innerHTML = 'Homepage';
        text_2.innerHTML = 'Entdecken';
        text_3.innerHTML = 'Über';
        text_4.innerHTML = 'Deutsch';
        label_dark.innerHTML = 'Dunkel';
        label_light.innerHTML = 'Licht';
        pop_up_title.innerHTML = 'Sprachen';
        nation.src = 'https://pic1.imgdb.cn/item/67a04128d0e0a243d4f9a6b4.png';
    } else {
        de_label.classList.remove('checked');
        de_label.classList.add('clickable');
        de.addEventListener('click', toggle_language);
    }
}