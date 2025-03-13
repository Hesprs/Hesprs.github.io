let layer = 0;
let position = 0;
let offset = 0;
let songIndex = 0;
let sidenav_fold_level = 0;
let sidenav_width_level = 0;
let timer = 0;
let custom_width = 170;
let pop_up_index = 0; // 0 void, 1 music, 2 catalogue, 3 options, 4 languages, 5 search;
let isDragging = 0; // 0 void, 1 mouse, 2 touch
let hovered = false;
let ever_played_music = false;
let second_pop_up = false;
let throttle_resize = true;
let throttle_mouse_move = true;
let sidenav_minimal = false;
let current_page, language, timeout, timeout_2;
let history = [];

const entry_list = document.getElementsByName('category');
const cover = document.getElementById('cover');
const sidenav = document.getElementById('sidenav');
const background = document.getElementById('background');
const showcase = document.getElementById('showcase');
const stretch_bar_1 = document.getElementById('stretch_bar_1');
const toggleWrapper = document.getElementById('toggleWrapper');
const text_dark = document.getElementById('text_dark');
const text_light = document.getElementById('text_light');
const stretch_bar = document.getElementById('stretch_bar');
const musicContainer = document.getElementById('music_container');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progress_container = document.getElementById('progress_container');
const music_title = document.getElementById('music_title');
const music_cover = document.getElementById('music_cover');
const dn = document.getElementById('dn');
const back_button = document.getElementById('back');
const shade = document.getElementById('shade');
const pop_up = document.getElementById('pop_up');
const language_option = document.getElementById('language_option');
const text_language = document.getElementById('text_language');
const text_previous = document.getElementById('text_previous');
const previous = document.getElementById('previous');
const previous_center = document.getElementById('previous_center');
const nations = document.getElementById('nations');
const pop_up_title = document.getElementById('pop_up_title');
const pop_up_content = document.getElementById('pop_up_content');
const crumb_navigation = document.getElementById('crumb_navigation');
const content_district = document.getElementById('content_district');
const search_button = document.getElementById('search_button');
const search_button_center = document.getElementById('search_button_center');
const search_bar = document.getElementById('search_bar');
const search_bar_center = document.getElementById('search_bar_center');
const warning_bar = document.getElementById('warning_bar');
const warning_text = document.getElementById('warning_text');
const warning_icon = document.getElementById('warning_icon');
const meta = document.getElementsByTagName('meta');

stretch_bar.addEventListener('touchstart', touch_start);
stretch_bar.addEventListener('mousedown', mouse_down);
stretch_bar.addEventListener('mouseover', hover_color);
stretch_bar.addEventListener('touchstart', hover_color);
stretch_bar.addEventListener('mouseout', out_color);
stretch_bar.addEventListener('touchend', out_color);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);
progress_container.addEventListener('click', setProgress);
nextButton.addEventListener('click', nextSong);
playButton.addEventListener('click', plause);
language_option.addEventListener('click', language_clicked);
back_button.addEventListener('click', back);
showcase.addEventListener('click', () => document.body.classList.add('slide'));
shade.addEventListener('click', () => {back_shade(); second_pop_up = false;});
previous.addEventListener('click', previous_page);
previous_center.addEventListener('click', previous_page);
search_button.addEventListener('click', search_clicked);
search_button_center.addEventListener('click', search_clicked);
search_bar.addEventListener('input', () => synchronize_search('side'));
search_bar_center.addEventListener('input', () => synchronize_search('center'));
dn.addEventListener('click', toggle_dark);
document.getElementById('warning_bar_wrapper').addEventListener('click', warning_bar_clicked);
document.addEventListener('keydown', enter_to_search);
document.addEventListener('touchcancel', mouse_up);
document.addEventListener('mousemove', mouse_move);
document.addEventListener('touchmove', mouse_move);
document.addEventListener('mouseleave', mouse_up);
window.addEventListener('DOMContentLoaded', initialize);
window.addEventListener('resize', responsive_resize);
window.addEventListener('mouseup', mouse_up);
window.addEventListener('touchend', mouse_up);

function initialize() {
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 800);
    let redirect = localStorage.getItem('title');
    if (redirect === null) {
        current_page = 'homepage';
        detect_language();
    } else {
        document.body.classList.add('slide');
        localStorage.removeItem('title');
        if (redirect.includes('/')) {
            redirect = redirect.split('/');
            language = redirect[0];
            current_page = redirect[1];
        } else {
            current_page = redirect;
            detect_language();
        }
    }
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (currentTheme.matches) {
        dn.checked = true;
        document.body.classList.add('dark');
        document.getElementById('background_img').src = showcases[1].url;
        document.getElementById('slogan').innerHTML = `${showcases[1][language]}`;
    } else {
        document.getElementById('background_img').src = showcases[0].url;
        document.getElementById('slogan').innerHTML = `${showcases[0][language]}`;
    }
    document.getElementById(language).checked = true;
    music_title.innerHTML = translation.music_player[language];
    sidenav.style.width = `${custom_width}px`;
    change_languages();
    responsive_resize();
}

function detect_language() {
    if (navigator.language.includes('zh')) {
        language = 'zh_Hans';
    } else if (navigator.language.includes('de')) {
        language = 'de';
    } else {
        language = 'en';
    }
}

function toggle_dark() {
    document.body.classList.toggle('dark');
    if (articles[current_page] != undefined) {
        if (articles[current_page].iframe != undefined) {
            document.getElementById('iframe').contentWindow.document.body.classList.toggle('dark');
        }
    }
}

function responsive_resize() {
    if (throttle_resize) {
        throttle_resize = false;
        setTimeout(() => {
            throttle_resize = true;
        }, 15);
        if (window.innerWidth >= 768) {
            if (window.innerHeight < 620) {
                if (window.innerHeight < 574) {
                    if (sidenav_fold_level !== 2) {
                        if (sidenav_width_level === 0) {
                            transitioning();
                        } else {
                            sidenav.classList.remove('transitioning');
                        }
                        if (sidenav_fold_level === 0) {
                            minimal_start();
                        }
                        super_minimal_start();
                        sidenav_fold_level = 2;
                    }
                } else if (sidenav_fold_level !== 1) {
                    if (sidenav_width_level === 0) {
                        transitioning();
                    } else {
                        sidenav.classList.remove('transitioning');
                    }
                    if (sidenav_fold_level === 2) {
                        super_minimal_end();
                    } else if (sidenav_fold_level === 0 && !sidenav_minimal) {
                        minimal_start();
                    }
                    sidenav_fold_level = 1;
                }
            } else if (sidenav_fold_level !== 0) {
                if (sidenav_fold_level === 2) {
                    super_minimal_end();
                }
                if (!sidenav_minimal) {
                    if (sidenav_width_level === 0) {
                        transitioning();
                    } else {
                        sidenav.classList.remove('transitioning');
                    }
                    minimal_end();
                }
                sidenav_fold_level = 0;
            }
            if (cover.offsetWidth < 300) {
                sidenav.style.width = `${window.innerWidth - 345}px`;
            }
            if (sidenav_width_level !== 0) {
                sidenav_width_level = 0;
            }
        } else {
            if (sidenav_fold_level === 0 && !sidenav_minimal) {
                minimal_start();
                sidenav_fold_level = 1;
            }
            if (window.innerWidth < 574) {
                if (sidenav_fold_level !== 2) {
                    if (sidenav_width_level === 1) {
                        transitioning();
                    } else {
                        sidenav.classList.remove('transitioning');
                    }
                    super_minimal_start();
                    sidenav_fold_level = 2;
                }
                if (sidenav_width_level !== 2) {
                    sidenav_width_level = 2;
                }
            } else {
                if (sidenav_fold_level !== 1) {
                    if (sidenav_width_level === 2) {
                        transitioning();
                    } else {
                        sidenav.classList.remove('transitioning');
                    }
                    if (sidenav_fold_level === 2) {
                        super_minimal_end();
                    } else {
                        minimal_start();
                    }
                    sidenav_fold_level = 1;
                }
                if (sidenav_width_level !== 1) {
                    sidenav_width_level = 1;
                }
            } 
        }
        if (pop_up_index === 1) {
            let proper = Math.min(pop_up_content.offsetWidth - 30, pop_up_content.offsetHeight - 150)
            pop_up_music_cover.style.width = `${proper}px`;
            pop_up_music_cover.style.height = `${proper}px`;
        }
    }
}

function transitioning() {
    clearTimeout(timeout);
    sidenav.classList.add('transitioning');
    timeout = setTimeout(() => sidenav.classList.remove('transitioning'), 300)
}

function minimal_start() {
    sidenav.classList.add('minimal');
    custom_width = sidenav.offsetWidth;
    musicContainer.addEventListener('click', music_clicked);
    sidenav.style.width = '';
    dn_minimal();
}

function minimal_end() {
    sidenav.classList.remove('minimal');
    sidenav.style.width = `${Math.max(custom_width, 170)}px`;
    musicContainer.removeEventListener('click', music_clicked);
    dn_complete();
}

function super_minimal_start() {
    sidenav.classList.add('super_minimal');
    music_cover.src = 'https://img.icons8.com/fluency/100/settings.png';
    document.getElementById('about_icon').src = 'https://img.icons8.com/fluency/100/magical-scroll.png';
    const about_label = document.getElementById('about_label');
    about_label.classList.remove('checked');
    about_label.htmlFor = '';
    musicContainer.removeEventListener('click', music_clicked);
    about_label.addEventListener('click', categories);
    musicContainer.addEventListener('click', settings);
}

function super_minimal_end() {
    sidenav.classList.remove('super_minimal');
    if (ever_played_music) {
        music_cover.src = music[songIndex].img;
    } else {
        music_cover.src = 'https://img.icons8.com/fluency/100/lyre.png';
    }
    document.getElementById('about_icon').src = 'https://img.icons8.com/fluency/100/info-popup.png';
    const about_label = document.getElementById('about_label');
    if (document.getElementById('about').checked) {
        about_label.classList.add('checked');
    }
    about_label.htmlFor = 'about';
    musicContainer.addEventListener('click', music_clicked);
    about_label.removeEventListener('click', categories);
    musicContainer.removeEventListener('click', settings);
}

function settings() {
    let delay = 0;
    if (pop_up_index === 1 || pop_up_index === 4) {
        delay = 200;
        pop_up.style.opacity = '0';
    }
    pop_up_index = 3;
    setTimeout(() => {
        pop_up_title.innerHTML = translation.options[language];
        pop_up_content.innerHTML = `
            <div class='entry clickable shadow' id='pop_up_music' style='margin: auto 0px 0px 0px'>
    			<img class='icon' alt='music cover' style='height: 30px; width: 30px;' id='pop_up_settings_music_cover'>
    			<div class='center_text' style='margin: auto 0px auto auto;'>${translation.music_player[language]}</div>
    		</div>
            <div class='entry clickable shadow' id='pop_up_language' style='margin: 15px 0px 15px 0px'>
    			<img src='${translation.nations[language]}' class='icon' alt='flag' style='height: 30px; width: 30px;'>
    			<div class='center_text' style='margin: auto 0px auto auto;'>${translation.language[language]}</div>
    		</div>
            <label class='entry clickable shadow' for='dn' style='margin: 0px 0px auto 0px'>
    			<div class='text_light' id='pop_up_text_light'>${translation.light[language]}</div>
    			<div class='toggleWrapper fancy_color'>
    				<div class='toggle'>
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
    				</div>
    			</div>
    			<div class='text_dark' id='pop_up_text_dark'>${translation.dark[language]}</div>
    		</label>
        `;
        const pop_up_music_cover = document.getElementById('pop_up_settings_music_cover');
        if (ever_played_music) {
            pop_up_music_cover.src = music[songIndex].img;
            pop_up_music_cover.style.borderRadius = '50%';
        } else {
            pop_up_music_cover.src = 'https://img.icons8.com/fluency/100/lyre.png';
        }
        if (language === 'zh_Hans') {
            document.getElementById('pop_up_text_dark').classList.add('chinese');
            document.getElementById('pop_up_text_light').classList.add('chinese');
        }
        document.getElementById('pop_up_language').addEventListener('click', language_clicked);
        document.getElementById('pop_up_music').addEventListener('click', music_clicked);
        if (delay === 200) {
            pop_up.style.opacity = '1';
        } else {
            show_pop_up();
        }
    }, delay);
}

function categories() {
    pop_up_index = 2;
    pop_up_title.innerHTML = translation.catalogue[language];
    let content = '', category;
    for (i = 0; i < entry_list.length; i ++) {
        let name = entry_list[i].value;
        if (entry_list[i].checked) {
            category = entry_list[i].value;
        }
        if (name === 'about') {
            content += `
                <label for='about' class='demobox shadow color clickable' id='pop_up_about_label'>
		    		<img class='icon' src='https://img.icons8.com/fluency/100/info-popup.png' alt='about' style='width: 30px; height:30px; margin: auto 0px auto auto;'>
		    		<div class='center_text' style='margin-left: 10px;'>${articles.about[language]}</div>
		    	</label>
            `;
        } else {
            content += `
                <label for='${name}' class='demobox shadow color clickable' id='pop_up_${name}_label'>
		    		<img class='icon' src='${document.getElementById(`${name}_icon`).src}' alt='${name}' style='width: 30px; height:30px; margin: auto 0px auto auto;'>
		    		<div class='center_text' style='margin-left: 10px;'>${document.getElementById(`text_${name}`).innerHTML}</div>
		    	</label>
            `;
        }
    }
    pop_up_content.innerHTML = `
        <div style='display: flex; flex-wrap: wrap; justify-content: space-between; align-items: stretch; gap: 15px; margin: auto 0px auto 0px;'>
            ${content}
        </div>
    `;
    if (category != undefined) {
        document.getElementById(`pop_up_${category}_label`).classList.remove('clickable');
        document.getElementById(`pop_up_${category}_label`).classList.add('checked');
    }
    show_pop_up();
}

function change_category() {
    let ee;
    for (i = 0; i < entry_list.length; i++) {
        let e = document.getElementById(`${entry_list[i].value}_label`);
        if (pop_up_index === 2) {
            ee = document.getElementById(`pop_up_${entry_list[i].value}_label`);
        }
        if (entry_list[i].checked) {
            if(!(entry_list[i].value === 'about' && sidenav_fold_level === 2)) {
                e.classList.add('checked');
                e.classList.remove('clickable');
            }
            if (ee) {
                ee.classList.add('checked');
                ee.classList.remove('clickable');
            }
            entry_list[i].removeEventListener('click', entry_clicked);
        } else {
            e.classList.remove('checked');
            e.classList.add('clickable');
            if (ee) {
                ee.classList.remove('checked');
                ee.classList.add('clickable');
            }
            entry_list[i].addEventListener('click', entry_clicked);
        }
    }
}

function entry_clicked() {
    change_category();
    shift_title(this.value, false);
}

function language_clicked() {
    let delay = 0;
    if (pop_up_index === 3) {
        delay = 200;
        pop_up.style.opacity = '0';
        second_pop_up = true;
    }
    pop_up_index = 4;
    setTimeout(() => {
        pop_up_title.innerHTML = translation.languages[language];
        pop_up_content.innerHTML = `
	    	<div style='display: flex; flex-wrap: wrap; justify-content: space-between; align-items: stretch; gap: 15px; margin: auto 0px auto 0px;'>
	    		<label for='en' class='demobox shadow color clickable' id='en_label'>
	    			<img class='icon' src='https://img.icons8.com/fluency/100/great-britain-circular.png' alt='UK flag' style='width: 30px; height:30px; margin: auto 0px auto auto;'>
	    			<div class='center_text' style='margin-left: 10px;'>English</div>
	    		</label>
	    		<label for='zh_Hans' class='demobox shadow color clickable' id='zh_Hans_label'>
	    			<img class='icon' src='https://img.icons8.com/fluency/100/china-circular.png' alt='CN flag' style='width: 30px; height:30px; margin: auto 0px auto auto;'>
	    			<div class='center_text' style='margin-left: 10px;'>简体中文</div>
	    		</label>
	    		<label for='de' class='demobox shadow color clickable' id='de_label'>
	    			<img class='icon' src='https://img.icons8.com/fluency/100/germany-circular.png' alt='DE flag' style='width: 30px; height:30px; margin: auto 0px auto auto;'>
	    			<div class='center_text' style='margin-left: 10px;'>Deutsch</div>
	    		</label>
	    	</div>
        `;
        document.getElementById(language).checked = true;
        pop_up_change_languages();
        if (delay === 200) {
            pop_up.style.opacity = '1';
        } else {
            show_pop_up();
        }
    }, delay);
}

function show_pop_up() {
    shade.style.opacity = '1';
    pop_up.style.opacity = '1';
    shade.style.pointerEvents = 'auto';
    pop_up.style.pointerEvents = 'auto';
}

async function shift_title(title, entry = true, back = false) {
    timer = 0;
    const timer_interval = setInterval(() => {
        timer += 10;
    }, 10);
    cover.style.opacity = 1;
    if (!back) {
        if (title !== current_page) {
            history.push(current_page);
        }
    } else {
        history.pop();
    }
    current_page = title;
    layer = 1 - layer;
    const content = await resolve_url(entry);
    if (content.introduction != undefined) {
        modify_url(`/${language}/${current_page}`, content.introduction);
    } else {
        modify_url(`/${language}/${current_page}`);
    }
    const content_1 = document.getElementById(`content_${1 - layer}`);
    const content_0 = document.getElementById(`content_${layer}`);
    clearInterval(timer_interval);
    if (timer >= 200) {
        timer = 0;
    } else {
        timer = 195 - timer;
    }
    setTimeout(() => {
        if (articles[current_page] != undefined) {
            crumb(articles[current_page].address, content.downloads);
        }
        if (content.warning != undefined) {
            warn('alarm', content.warning);
        }
        content_0.scrollTo(0, 0);
        content_1.innerHTML = '';
        content_district.classList.toggle('slides');
        content_0.innerHTML = `<main style='${content.main_styles}'>${content.content}</main>`;
        cover.style.opacity = 0;
        cover.style.pointerEvents = 'none';
        if (content.click_listeners != undefined) {
            event_listeners(content.click_listeners.list, content.click_listeners.type);
        }
    }, timer);
}

async function resolve_url(entry) {
    let address, content, warning;
    if (articles[current_page] == undefined || current_page === '404' || current_page.includes('search=')) {
        setTimeout(() => content_district.classList.add('s404'), 195 - timer);
        for (let i = 0; i < entry_list.length; i ++) {
            document.getElementById(entry_list[i].value).checked = false;
        }
        change_category();
        if (!current_page.includes('search=')) {
            address = `404/${language}.json`;
        } else {
            address = 'done';
            content = search(current_page.replace('search=', ''));
            if (content === '404') {
                address = `404/${language}.json`;
            }
        }
    } else {
        setTimeout(() => content_district.classList.remove('s404'), 195 - timer);
        if (entry) {
            document.getElementById(articles[current_page].address.split('/')[0]).checked = true;
            change_category();
        }
        if (articles[current_page].directory != undefined) {
            address = 'done';
            content = compile_directory(articles[current_page].directory);
        } else if (articles[current_page].iframe != undefined) {
            
            for (let i = 0; i < articles[current_page].languages.length; i ++) {
                if (articles[current_page].languages[i] === language) {
                    content = {
                        content: `<iframe src='/Contents/${articles[current_page].address}/${language}/index.html' sandbox='allow-scripts allow-same-origin' id='iframe'></iframe>`,
                        main_styles: 'width: 100%; height: 100%; position: absolute; padding: 0px;',
                    };
                    address = 'done';
                    break;
                }
            }
            if (address == undefined) {
                warning = language_warning();
                address = 'done';
                content = {
                    content: `<iframe src='/Contents/${articles[current_page].address}/en/index.html' sandbox='allow-scripts allow-same-origin' id='iframe'></iframe>`,
                    main_styles: 'width: 100%; height: 100%; position: absolute; padding: 0px;',
                };
            }
        } else {
            for (let i = 0; i < articles[current_page].languages.length; i ++) {
                if (articles[current_page].languages[i] === language) {
                    address = `${articles[current_page].address}/${language}.json5`;
                    break;
                }
            }
            if (address == undefined) {
                warning = language_warning();
                address = `${articles[current_page].address}/en.json5`;
            }
        }
    }
    if (address !== 'done') {
        content = await fetch(`/Contents/${address}`);
        content = await content.text();
        content = JSON5.parse(content);
    }
    if (warning != undefined) {
        content.warning = warning;
    }
    if (content.main_styles == undefined) {
        content.main_styles = '';
    }
    if (content.downloads == undefined) {
        content.downloads = '';
    }
    return content;
}

function language_warning() {
    let warning = translation.this_article_is_only_available_in[language];
    for (let i = 0; i < articles[current_page].languages.length; i ++) {
        if (i != 0) {
            warning += `, ${translation.language[articles[current_page].languages[i]]}`;
        } else {
            warning += translation.language[articles[current_page].languages[i]];
        }
    }
    warning += translation.dot[language];
    return warning;
}

function compile_directory(directory) {
    let content = '';
    let click_listeners = [];
    for (let i = 0; i < directory.length; i ++) {
        let target = articles[directory[i]];
        content += `
            <div class='card shadow' id='${directory[i]}_directory'>
                <img src="${target.thumbnail}" alt="${target[language]}" class='background_img'/>
                <div class="overlay">
                    <p>${target[language]}</p>
                </div>
    	    </div>
        `;
        click_listeners.push(`${directory[i]}_directory`);
    }
    return {
        main_styles: 'display: flex; flex-wrap: wrap; gap: 15px; padding: 15px; min-height: unset;',
        content: content,
        click_listeners: {
            type: 'redirect',
            list: click_listeners
        }
    };
}

function event_listeners(listener_list, type) {
    if (type === 'redirect') {
        for (let i = 0; i < listener_list.length; i ++) {
            document.getElementById(listener_list[i]).addEventListener('click', function() {
                shift_title(this.getAttribute('id').replace('_redirect', ''));
            });
        }
    }
}

function crumb(address, download) {
    let crumb = '', crumb_downloads = '';
    const crumb_list = address.split('/');
    if (download != undefined) {
        for (let i = 0; i < formats.length; i++) {
            if (download[formats[i].format] != undefined) {
                crumb_downloads += `
                    <a href='${download[formats[i].format]}' style='height:30px;'>
	    				<img class='icon' src='${formats[i].url}' style='height:30px; width: fit-content;' alt='${formats[i].format}'>
	    			</a>
                `;
            }
        }
    }
    for (let i = 0; i < crumb_list.length; i++) {
        target = crumb_list[i];
        if (i !== crumb_list.length - 1) {
            crumb += `
                <div class='crumb color clickable_color' id='${target}_crumb' value='${target}'>${articles[target][language]}</div>
                <pre class='crumb color'> > </pre>
            `;
        } else {
            crumb += `<div class='crumb theme_color' id='${target}_crumb'>${articles[target][language]}</div>`;
        }
    }
    crumb_navigation.innerHTML = crumb;
    document.getElementById('downloads').innerHTML = crumb_downloads;
    for (i = 0; i < crumb_list.length - 1; i++) {
        document.getElementById(`${crumb_list[i]}_crumb`).addEventListener('click', function() {
            shift_title(this.getAttribute('value'), false);
        })
    }
}

function mouse_down(e) {
    offset = e.clientX - sidenav.offsetWidth;
    isDragging = 1;
    background.classList.add('on_dragging');
    content_district.classList.toggle('slides');
}

function touch_start(e) {
    offset = e.touches[0].clientX - sidenav.offsetWidth;
    isDragging = 2;
    background.classList.add('on_dragging');
    content_district.classList.toggle('slides');
}

function mouse_move(e) {
    if (throttle_mouse_move) {
        throttle_mouse_move = false;
        setTimeout(() => {
            throttle_mouse_move = true;
        }, 15);
        if (isDragging !== 0) {
            if (isDragging === 1) {
               position = e.clientX - offset;
            } else {
                position = e.touches[0].clientX - offset;
            }
            if (position >= 170 && position <= window.innerWidth - 345 && !sidenav_minimal) {
                sidenav.style.width = `${position}px`;
            } else if (position < 46 && !sidenav_minimal) {
                transitioning();
                sidenav.style.width = '';
                sidenav_minimal = true;
                minimal_start();
                musicContainer.addEventListener('click', music_clicked);
            } else if (position >= 100 && sidenav_minimal) {
                transitioning();
                sidenav.style.width = '170px';
                sidenav_minimal = false;
                minimal_end();
                dn_complete();
                musicContainer.removeEventListener('click', music_clicked);
            }
        }
    }
}

function mouse_up() {
    if (isDragging !== 0) {
        content_district.classList.toggle('slides');
        isDragging = 0;
        background.classList.remove('on_dragging');
        if (articles[current_page] != undefined) {
            if (articles[current_page].iframe != undefined) {
                document.getElementById('iframe').contentWindow.focus();
            }
        }
    }
    if (!hovered) {
        stretch_bar_1.style.backgroundColor = 'transparent';
    }
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

function dn_minimal() {
    toggleWrapper.innerHTML = `
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
    `;
}

function dn_complete() {
    toggleWrapper.innerHTML = `
	    <div class='toggle'>
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
	    </div>
    `;
}

function modify_url(url = '', introduction) {
    if (url.split('/')[2] !== 'homepage') {
        let stateObj = { id: '100' }; 
        window.history.replaceState(stateObj, 'Page 3', url);
        if (current_page.includes('search=')) {
            document.title = current_page.replace('search=', translation.search[language].replace('...', ': '));
        } else if (articles[current_page] != undefined) {
            document.title = articles[current_page][language];
        } else { 
            document.title = current_page;
        }
    } else {
        let stateObj = { id: '100' }; 
        window.history.replaceState(stateObj, 'Page 3', '');
        document.title = translation.hesperus_blog[language];
    }
    if (introduction == undefined) {
        if (current_page.includes('search=')) {
            meta.description.content = translation.search_description[language] + current_page.replace('search=', '') + translation.search_description[`${language}2`];
        } else if (articles[current_page] != undefined) {
            meta.description.content = articles[current_page].introduction[language];
        } else { 
            meta.description.content = translation.not_found_description[language];
        }
    } else {
        meta.description.content = introduction;
    }
}

function back() {
    if (second_pop_up) {
        settings();
        second_pop_up = false;
    } else {
        back_shade();
    }
}

function back_shade() {
    pop_up_index = 0;
    shade.style.opacity = '0';
    pop_up.style.opacity = '0';
    shade.style.pointerEvents = 'none';
    pop_up.style.pointerEvents = 'none';
}

function change_languages() {
    document.documentElement.setAttribute('lang', language);
    for (let i = 0; i < entry_list.length; i ++) {
        document.getElementById(`text_${entry_list[i].value}`).innerHTML = articles[entry_list[i].value][language];
    }
    text_language.innerHTML = translation.language[language];
    text_previous.innerHTML = translation.previous[language];
    text_light.innerHTML = translation.light[language];
    text_dark.innerHTML = translation.dark[language];
    search_bar.placeholder = translation.search[language];
    search_bar_center.placeholder = translation.search[language];
    nations.src = translation.nations[language];
    document.getElementById('continue').innerHTML = translation.click_anywhere_to_continue[language];
    if (!ever_played_music) {
        music_title.innerHTML = translation.music_player[language];
    }
    if (language === 'zh_Hans') {
        text_dark.classList.add('chinese');
        text_light.classList.add('chinese');
    } else {
        text_dark.classList.remove('chinese');
        text_light.classList.remove('chinese');
    }
    shift_title(current_page);
}

function pop_up_change_languages() {
    let ele = document.getElementsByName('language');
    for (i = 0; i < ele.length; i++) {
        let e = document.getElementById(ele[i].value + '_label');
        if (ele[i].checked) {
            language = ele[i].value;
            e.classList.add('checked');
            e.classList.remove('clickable');
            ele[i].removeEventListener('click', shift_languages);
        } else {
            e.classList.remove('checked');
            e.classList.add('clickable');
            ele[i].addEventListener('click', shift_languages);
        }
    }
}

function shift_languages() {
    pop_up_change_languages();
    change_languages();
    pop_up_title.innerHTML = translation.languages[language];
}

function previous_page() {
    if (history.length != 0) {
        shift_title(history[history.length - 1], true, true);
    }
}

function search(prompt) {
    let article_list = [];
    for (const key in articles) {
        if (articles[key][language].toLowerCase().includes(prompt.toLowerCase()) && articles[key].hide == undefined) {
            article_list.push(key);
        }
    }
    if (article_list.length === 0) {
        return '404';
    } else {
        return compile_directory(article_list);
    }
}

function search_clicked() {
    if (pop_up_index === 5 && search_bar.value != '') {
        back();
        shift_title(`search=${search_bar.value}`);
        search_bar.value = '';
        search_bar_center.value = '';
        document.getElementById('pop_up_search').value = '';
    } else if ((sidenav.classList.contains('minimal') && !sidenav.classList.contains('super_minimal')) || (window.innerWidth < 768 && window.innerWidth >= 574)) {
        pop_up_index = 5;
        pop_up_title.innerHTML = translation.search[language].replace('...', '');
        pop_up_content.innerHTML = `
            <div class='sidenav_wrapper shadow'style='margin: 15px 0px 15px 0px; height: calc(100% - 30px); flex-direction: column;'>
                <input type='text' class='shadow' id='pop_up_search' value='${search_bar.value}' placeholder='${translation.search[language]}'>
                <hr style='margin: 0px; width: 100%;'>
                <div class='entry clickable shadow' id='pop_up_search_button'>
                    <img class='icon' src='https://img.icons8.com/fluency/100/search.png' alt='search' style='height: 30px; width:30px; margin-left: auto;'></img>
                    <div class='center_text'>${translation.search[language].replace('...', '')}</div>
                <div>
            <div>
        `;
        document.getElementById('pop_up_search').addEventListener('input', () => synchronize_search('pop_up'));
        document.getElementById('pop_up_search_button').addEventListener('click', search_clicked);
        show_pop_up();
    } else if (search_bar.value != '') {
        shift_title(`search=${search_bar.value}`);
        search_bar.value = '';
        search_bar_center.value = '';
    }
}

function synchronize_search(subject) {
    if (subject === 'side') {
        search_bar_center.value = search_bar.value;
    } else if (subject === 'center') {
        search_bar.value = search_bar_center.value;
    } else if (subject === 'pop_up') {
        search_bar_center.value = document.getElementById('pop_up_search').value;
        search_bar.value = document.getElementById('pop_up_search').value;
    }
}

function enter_to_search(event) {
    if (event.key === 'Enter') {
        search_clicked();
    }
}

function warn(type, message) {
    warning_icon.src = warning_icons[type];
    warning_text.innerHTML = message;
    warning_bar.classList.add('show');
    timeout_2 = setTimeout(() => warning_bar.classList.remove('show'), 3000);
}

function warning_bar_clicked() {
    warning_bar.classList.toggle('show');
    clearTimeout(timeout_2);
}