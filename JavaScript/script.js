let layer = 0;
let position = 0;
let offset = 0;
let songIndex = 0;
let sidenavWrapLevel = 0;
let screenWidthLevel = 0;
let timer = 0;
let custom_width = 160;
let pop_up_index = 0; // 0 void, 1 music, 2 catalogue, 3 options, 4 languages, 5 search;
let isDragging = 0; // 0 void, 1 mouse, 2 touch
let hovered = false;
let everPlayedMusic = false;
let second_pop_up = false;
let sidenav_minimal = false;
let page = 'homepage';
let language, system_language, timeout, timeout_2;
let history = [];

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
const prevButton = document.getElementById('previous');
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
const previous = document.getElementById('previous_page');
const previous_center = document.getElementById('previous_center');
const nations = document.getElementById('nations');
const pop_up_title = document.getElementById('pop_up_title');
const pop_up_content = document.getElementById('pop_up_content');
const content_district = document.getElementById('content_district');
const search_button = document.getElementById('search_button');
const search_button_center = document.getElementById('search_button_center');
const search_bar = document.getElementById('search_bar');
const search_bar_center = document.getElementById('search_bar_center');
const warning_bar = document.getElementById('warning_bar');
const warning_text = document.getElementById('warning_text');
const warning_icon = document.getElementById('warning_icon');
const github_corner = document.getElementById('github_corner');
const titleBar = document.getElementById('title_bar');
const meta = document.getElementsByTagName('meta');
const language_list = document.getElementsByName('language');
const entry_list = document.getElementsByName('category');

function initialize() {
    if (navigator.language.includes('zh')) system_language = 'zh-Hans';
    else if (navigator.language.includes('de')) system_language = 'de';
    else system_language = 'en';
    let cookie_language = getCookie('language');
    language = cookie_language !== 'void' ? cookie_language : system_language;
    font_check();
    document.body.classList.add(language);
    let redirect = localStorage.getItem('page');
    if (redirect !== null) {
        redirect = redirect === 'ernest.html' ? 'ernest' : decodeURIComponent(redirect);
        document.body.classList.add('slide', 'non_transition');
        setTimeout(() => document.body.classList.remove('non_transition'), 20);
        localStorage.removeItem('page');
    } else redirect = 'homepage';
    const theme = getCookie('theme');
    if (theme === 'dark') {
        dn.checked = true;
        document.body.classList.add('dark');
    } else if (theme !== 'light') {
        const currentTheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (currentTheme.matches) {
            dn.checked = true;
            document.body.classList.add('dark');
        }
    }
    const randint = Math.floor(Math.random() * showcases.length);
    document.getElementById('background_img').src = showcases[randint].url;
    const slogan = document.getElementById('slogan');
    slogan.innerHTML = showcases[randint][language];
    slogan.style.top = `${showcases[randint].position}%`;
    document.getElementById(language).checked = true;
    music_title.innerHTML = translation.music_player[language];
    sidenav.style.width = `${custom_width}px`;
    console.log(`
\`7MMF'  \`7MMF'\`7MM"""YMM   .M"""bgd \`7MM"""Mq.\`7MM"""YMM  \`7MM"""Mq.\`7MMF'   \`7MF'.M"""bgd
  MM      MM    MM    \`7  ,MI    "Y   MM   \`MM. MM    \`7    MM   \`MM. \`MA     ,V ,MI    "Y
  MM      MM    MM   d    \`MMb.       MM   ,M9  MM   d      MM   ,M9   VM:   ,V  \`MMb.
  MMmmmmmmMM    MMmmMM      \`YMMNq.   MMmmdM9   MMmmMM      MMmmdM9     MM.  M'    \`YMMNq.
  MM      MM    MM   Y  , .     \`MM   MM        MM   Y  ,   MM  YM.     \`MM A'   .     \`MM
  MM      MM    MM     ,M Mb     dM   MM        MM     ,M   MM   \`Mb.    :MM;    Mb     dM
.JMML.  .JMML..JMMmmmmMMM P"Ybmmd"  .JMML.    .JMMmmmmMMM .JMML. .JMM.    VF     P"Ybmmd"

Hēsperus or HESPERVS or Hesprs | V 2.6.0 | See https://github.com//Hesprs/Hesprs.github.io

Open-source library list: %c Marked %c https://github.com/markedjs/marked `,
"padding: 6px 3px; border-radius: 15px 0 0 15px; color: #fff; background: rgb(109, 121, 208); font-weight: bold;",
"padding: 6px 3px;border-radius: 0 15px 15px 0; color: #fff; background: rgb(132, 67, 255);",)
    responsiveResizeLayout();
    change_languages(redirect);
    setTimeout(() => {document.getElementById('badge').classList.add('hide')}, 600); // for smooth experience and preload the images
}

function font_check() {
    const links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) if (links[i].href === font_demand[language]) return;
    loadCSS(font_demand[language]);
}

function throttle(func, interval) {
    let timeout = null;
    let lastArgs = null;
    let lastCallTime = -Infinity;
    return function throttled(...args) {
        const now = Date.now();
        const timeSinceLast = now - lastCallTime;
        if (timeSinceLast >= interval) {
            func.apply(this, args);
            lastCallTime = now;
        } else {
            lastArgs = args;
            if (!timeout) {
                timeout = setTimeout(() => {
                    func.apply(this, lastArgs);
                    lastCallTime = Date.now();
                    timeout = null;
                }, interval - timeSinceLast);
            }
        }
    };
}

function toggleTheme() {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (dn.checked) {
        if (currentTheme.matches) setCookie('theme', 'void', -1);
        else setCookie('theme', 'dark');
    } else {
        if (currentTheme.matches) setCookie('theme', 'light');
        else setCookie('theme', 'void', -1);
    }
    document.body.classList.toggle('dark');
    if (articles[page] != undefined && articles[page].type === 'iframe') document.getElementById('iframe').contentWindow.document.body.classList.toggle('dark');
}

const responsiveResizeLayout = throttle(function() {
    if (window.innerWidth >= 767) {
        if (window.innerHeight < 580) {
            if (window.innerHeight < 534) {
                if (sidenavWrapLevel !== 2) {
                    transition_or_not(0);
                    if (sidenavWrapLevel === 0) minimal_start();
                    super_minimal_start();
                    sidenavWrapLevel = 2;
                }
            } else if (sidenavWrapLevel !== 1) {
                transition_or_not(0);
                if (sidenavWrapLevel === 2) super_minimal_end();
                else if (sidenavWrapLevel === 0 && !sidenav_minimal) minimal_start();
                sidenavWrapLevel = 1;
            }
        } else if (sidenavWrapLevel !== 0) {
            transition_or_not(0);
            if (sidenavWrapLevel === 2) super_minimal_end();
            if (!sidenav_minimal) minimal_end();
            sidenavWrapLevel = 0;
        }
        if (cover.offsetWidth < 300) sidenav.style.width = `${window.innerWidth - 345}px`;
        if (screenWidthLevel !== 0) screenWidthLevel = 0;
    } else {
        if (sidenavWrapLevel === 0 && !sidenav_minimal) {
            minimal_start();
            sidenavWrapLevel = 1;
        }
        if (window.innerWidth < 504) {
            if (sidenavWrapLevel !== 2) {
                transition_or_not(1);
                super_minimal_start();
                sidenavWrapLevel = 2;
            }
            if (screenWidthLevel !== 2) screenWidthLevel = 2;
        } else {
            if (sidenavWrapLevel !== 1) {
                transition_or_not(2);
                if (sidenavWrapLevel === 2) super_minimal_end();
                else minimal_start();
                sidenavWrapLevel = 1;
            }
            if (screenWidthLevel !== 1) screenWidthLevel = 1;
        } 
    }
    if (pop_up_index === 1) {
        let proper = Math.min(pop_up_content.offsetWidth - 30, pop_up_content.offsetHeight - 150)
        pop_up_music_cover.style.width = `${proper}px`;
        pop_up_music_cover.style.height = `${proper}px`;
    }
}, 100);

function transition_or_not(targetScreenWidthLevel) {
    if (screenWidthLevel === targetScreenWidthLevel) {
        clearTimeout(timeout);
        sidenav.classList.add('transitioning');
        timeout = setTimeout(() => sidenav.classList.remove('transitioning'), 300)
    } else { sidenav.classList.remove('transitioning') }
}

function minimal_start() {
    sidenav.classList.add('minimal');
    custom_width = sidenav.offsetWidth - 30;
    musicContainer.classList.add('clickable');
    musicContainer.addEventListener('click', musicButtonClicked);
    sidenav.style.width = '';
    dn_minimal();
}

function minimal_end(custom = true) {
    sidenav.classList.remove('minimal');
    if (custom) sidenav.style.width = `${Math.max(custom_width, 160)}px`;
    musicContainer.classList.remove('clickable');
    musicContainer.removeEventListener('click', musicButtonClicked);
    dn_complete();
}

function super_minimal_start() {
    sidenav.classList.add('super_minimal');
    music_cover.src = 'https://img.icons8.com/fluency/100/settings.png';
    document.getElementById('about_icon').src = 'https://img.icons8.com/fluency/100/magical-scroll.png';
    const about_label = document.getElementById('about_label');
    about_label.htmlFor = 'meaningless';
    musicContainer.removeEventListener('click', musicButtonClicked);
    about_label.addEventListener('click', categoriesButtonClicked);
    musicContainer.addEventListener('click', OptionsButtonClicked);
}

function super_minimal_end() {
    sidenav.classList.remove('super_minimal');
    if (everPlayedMusic) music_cover.src = music[songIndex].img;
    else music_cover.src = 'https://img.icons8.com/fluency/100/lyre.png';
    document.getElementById('about_icon').src = 'https://img.icons8.com/fluency/100/info-popup.png';
    const about_label = document.getElementById('about_label');
    about_label.htmlFor = 'about';
    musicContainer.addEventListener('click', musicButtonClicked);
    about_label.removeEventListener('click', categoriesButtonClicked);
    musicContainer.removeEventListener('click', OptionsButtonClicked);
}

function OptionsButtonClicked() {
    let delay = 0;
    if (pop_up_index === 1 || pop_up_index === 4) {
        delay = 200;
        pop_up.style.opacity = '0';
    }
    pop_up_index = 3;
    setTimeout(() => {
        pop_up_title.innerHTML = translation.options[language];
        pop_up_content.innerHTML = `
            <div class='entry clickable shadow border' id='pop_up_music' style='margin: auto 0px 0px 0px'>
    			<img class='icon' alt='music cover' style='height: 30px; width: 30px;' id='pop_up_settings_music_cover'>
    			<div class='center_text' style='margin: auto 0px auto auto;'>${translation.music_player[language]}</div>
    		</div>
            <div class='entry clickable shadow border' id='pop_up_language'>
    			<img src='${translation.nations[language]}' class='icon' alt='flag' style='height: 30px; width: 30px;'>
    			<div class='center_text' style='margin: auto 0px auto auto;'>${translation.language[language]}</div>
    		</div>
            <label class='entry clickable shadow border' for='dn' style='margin: 0px 0px auto 0px'>
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
        const pop_up_settings_music_cover = document.getElementById('pop_up_settings_music_cover');
        if (everPlayedMusic) {
            pop_up_settings_music_cover.src = music[songIndex].img;
            pop_up_settings_music_cover.style.borderRadius = '50%';
        } else { pop_up_settings_music_cover.src = 'https://img.icons8.com/fluency/100/lyre.png' }
        document.getElementById('pop_up_language').addEventListener('click', languageButtonClicked);
        document.getElementById('pop_up_music').addEventListener('click', musicButtonClicked);
        if (delay === 200) pop_up.style.opacity = '1';
        else showPopUp();
    }, delay);
}

function categoriesButtonClicked() {
    pop_up_index = 2;
    pop_up_title.innerHTML = translation.catalogue[language];
    let content = '';
    for (i = 0; i < entry_list.length; i ++) {
        let name = entry_list[i].value;
        let src = name === 'about' ? 'https://img.icons8.com/fluency/100/info-popup.png' : document.getElementById(`${name}_icon`).src;
        content += `
            <label for='${name}' class='demobox shadow color clickable border' id='pop_up_${name}_label'>
				<img class='icon' src='${src}' alt='${name}'>
				<div class='center_text'>${document.getElementById(`text_${name}`).innerHTML}</div>
			</label>
        `;
    }
    pop_up_content.innerHTML = `<div class='directory' style='margin: auto 0px;'>${content}</div>`;
    for (i = 0; i < entry_list.length; i ++) {
        const entry = entry_list[i].value;
        if (entry_list[i].checked) document.getElementById(`pop_up_${entry}_label`).classList.add('checked');
        document.getElementById(`pop_up_${entry}_label`).addEventListener('click', catagory_check);
    }
    showPopUp();
}

function catagory_check() {
    for (i = 0; i < entry_list.length; i ++) document.getElementById(`pop_up_${entry_list[i].value}_label`).classList.remove('checked');
    this.classList.add('checked');
}

function languageButtonClicked() {
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
	    	<div class='directory' style='margin: auto 0px;'>
	    		<label for='en' class='demobox shadow color clickable border' id='en_label'>
	    			<img class='icon' src='https://img.icons8.com/fluency/100/great-britain-circular.png' alt='UK flag'>
	    			<div class='center_text'>English</div>
	    		</label>
	    		<label for='zh-Hans' class='demobox shadow color clickable border' id='zh-Hans_label'>
	    			<img class='icon' src='https://img.icons8.com/fluency/100/china-circular.png' alt='CN flag'>
	    			<div class='center_text'>简体中文</div>
	    		</label>
	    		<label for='de' class='demobox shadow color clickable border' id='de_label'>
	    			<img class='icon' src='https://img.icons8.com/fluency/100/germany-circular.png' alt='DE flag'>
	    			<div class='center_text'>Deutsch</div>
	    		</label>
	    	</div>
        `;
        pop_up_change_languages(false);
        if (delay === 200) pop_up.style.opacity = '1';
        else showPopUp();
    }, delay);
}

function searchButtonClicked() {
    if (pop_up_index === 5 && search_bar.value != '') {
        back();
        changePage(`search=${search_bar.value}`);
        search_bar.value = '';
        search_bar_center.value = '';
        document.getElementById('pop_up_search').value = '';
    } else if ((sidenav.classList.contains('minimal') && !sidenav.classList.contains('super_minimal')) || (window.innerWidth < 768 && window.innerWidth >= 504)) {
        pop_up_index = 5;
        pop_up_title.innerHTML = translation.search[language].replace('...', '');
        pop_up_content.innerHTML = `
            <div class='pop_up_search_wrapper shadow border'>
                <input type='text' id='pop_up_search' value='${search_bar.value}' placeholder='${translation.search[language]}'>
                <hr style='margin: 0px; width: 100%;'>
                <div class='demobox clickable' id='pop_up_search_button'>
                    <img class='icon' src='https://img.icons8.com/fluency/100/search.png' alt='search'></img>
                    <div class='center_text'>${translation.search[language].replace('...', '')}</div>
                <div>
            <div>
        `;
        document.getElementById('pop_up_search').addEventListener('input', () => synchronize_search('pop_up'));
        document.getElementById('pop_up_search_button').addEventListener('click', searchButtonClicked);
        showPopUp();
    } else if (search_bar.value != '') {
        changePage(`search=${search_bar.value}`);
        search_bar.value = '';
        search_bar_center.value = '';
    }
}

function showPopUp() {
    shade.style.opacity = '1';
    pop_up.style.opacity = '1';
    shade.style.pointerEvents = 'auto';
    pop_up.style.pointerEvents = 'auto';
}

async function changePage(title = page, back = false, force = false) {
    if (force || title !== page) {
        if (!back) { if (page != undefined && title !== page) history.push(page) }
        else history.pop();
        page = title;
        timer = 0;
        const timer_interval = setInterval(() => timer += 10, 10);
        cover.style.opacity = 1;
        content_district.style.opacity = 0;
        layer = 1 - layer;
        modify_url(page);
        const content = await resolvePage();
        meta.description.content = content.description;
        const content_1 = document.getElementById(`content_${1 - layer}`);
        const content_0 = document.getElementById(`content_${layer}`);
        clearInterval(timer_interval);
        timer = timer >= 200 ? 0 : 195 - timer;
        setTimeout(() => {
            if (content.warning != undefined) warn('alarm', content.warning);
            if (content.github == undefined) github_corner.classList.remove('show');
            else {
                github_corner.href = content.github;
                github_corner.classList.add('show');
            }
            content_0.scrollTo(0, 0);
            content_1.innerHTML = '';
            content_district.classList.toggle('slides');
            if (content.custom_css != undefined) loadCSS(content.custom_css);
            if (content.type === 'search' || content.type === 'iframe' || content.type === '404') {
                content_0.innerHTML = `<main class='${content.main_classes}' style='${content.main_styles}'>${content.content}</main>`;
            } else {
                content_0.innerHTML = `
                    <header>
                        <h1 class='article_title'>${actual_language(articles[page].title)}</h1>
                    </header>
                    <footer id='title_bar' class='shadow border'>
	    	    		<div id='crumb_navigation'></div>
	    	    		<div id='downloads'></div>
	    	    	</footer>
                    <hr>
                    <main class='${content.main_classes}' style='${content.main_styles}'>
                        ${content.content}
                    </main>
                `;
                compileCrumb(articles[page].address, content.downloads);
                content_0.addEventListener('scroll', toggleFooterBlur);
            }
            if (content.type === 'iframe') {
                const iframe_window = document.getElementById('iframe').contentWindow;
                content_0.style.scrollbarGutter = 'auto';
                iframe_window.addEventListener('DOMContentLoaded', () => {
                    if (dn.checked) {
                        iframe_window.document.body.classList.add('non_transition');
                        iframe_window.document.body.classList.add('dark')
                        setTimeout(() => iframe_window.document.body.classList.remove('non_transition'), 10);
                    };
                    cover.style.opacity = 0;
                    content_district.style.opacity = 1;
                    cover.style.pointerEvents = 'none';
                });
            } else {
                content_0.style.scrollbarGutter = '';
                cover.style.opacity = 0;
                content_district.style.opacity = 1;
                cover.style.pointerEvents = 'none';
            }
            if (content.click_listeners != undefined) event_listeners(content.click_listeners);
        }, timer);
    }
}

async function resolvePage() {
    let address, content, warning, type; // type: search, directory, iframe, 404, article
    for (let i = 0; i < entry_list.length; i ++) { entry_list[i].checked = page === entry_list[i].value ? true : false }
    if (articles[page] == undefined) {
        if (!page.includes('search=')) {
            address = '404';
            type = '404';
        } else {
            type = 'search';
            content = search(page.replace('search=', ''));
            address = content === '404' ? '404' : 'done';
        }
    } else {
        type = articles[page].type;
        address = articles[page].address;
    }
    if (address !== 'done') {
        content = await fetch(`/Contents/${address}/info.json`);
        content = await content.json();
        if (content.custom_css != undefined) content.custom_css = `/Contents/${address}/style.css`;
        if (type === 'search' || type === '404') address = `404/${language}.md`;
        else if (type === 'directory') {
            content = {
                ... compileDirectory(content.directory),
                ... content
            }
            address = 'done';
        } else {
            const factual_language = actual_language(content.languages, 'array');
            if (factual_language !== language) warning = translation.this_article_is_not_available_in[language];
            if (type === 'iframe') {
                content = {
                    ... content,
                    content: `<iframe src='/Contents/${articles[page].address}/${factual_language}/index.html' sandbox='allow-scripts allow-same-origin' id='iframe'></ iframe>`,
                    main_classes: 'main_empty',
                };
                address = 'done';
            } else if (type = 'article') address = `${articles[page].address}/${factual_language}.md`;
        }
        if (address !== 'done') {
            content.content = await fetch(`/Contents/${address}`);
            content.content = await content.content.text();
            content.content = marked.parse(content.content);
        }
    }
    if (warning != undefined) content.warning = warning;
    if (content.main_styles == undefined) content.main_styles = '';
    if (content.main_classes == undefined) content.main_classes = '';
    if (type === 'article') {
        let factual_language = address.split('/');
        factual_language = factual_language[factual_language.length - 1].replace('.md', '').replace('%', '');
        content.downloads = content.downloads != undefined && content.downloads[factual_language] != undefined ? content.downloads[factual_language] : {};
        if (content.no_markdown_download == undefined) content.downloads.md = { 
            url: `/Contents/${address}`,
            type: 'direct'
        }
        if (content.downloads == undefined) content.downloads = '';
    } else { content.downloads = '' }
    if (content.description == undefined) content.description = type === 'search' ? translation.search_description : translation.not_found_description;
    content.description = actual_language(content.description);
    if (type === 'search') content.description = content.description.replace('%s', page.replace('search=', ''));
    content.type = type;
    return content;
}

function modify_url(url = '') {
    if (url !== 'homepage') {
        let stateObj = { id: '100' }; 
        window.history.replaceState(stateObj, 'Page 3', url);
        if (page.includes('search=')) document.title = page.replace('search=', translation.search[language].replace('...', ': '));
        else if (articles[page] != undefined) document.title = actual_language(articles[page].title);
        else document.title = page;
    } else {
        let stateObj = { id: '100' }; 
        window.history.replaceState(stateObj, 'Page 3', '/');
        document.title = translation.hesperus_blog[language];
    }
}

function compileDirectory(directory) {
    let content = '<div class="directory">';
    for (let i = 0; i < directory.length; i ++) content += `<article-card>${directory[i]}</article-card>`;
    content += '</div>';
    return {
        main_classes: 'normal_padding',
        content: content,
    };
}

function compileCrumb(address, download) {
    const downloads = document.getElementById('downloads');
    let crumb = '', crumb_downloads = '';
    const crumb_list = address.split('/');
    const crumb_navigation = document.getElementById('crumb_navigation');
    if (download !== '') {
        downloads.classList.add('padding');
        for (const key in download) {
            if (download[key].type == undefined || download[key].type !== 'direct') {
                crumb_downloads += `
                    <a href='${download[key].url}' style='height:30px; width: 30px;' target='_blank'>
	    	    		<img class='icon' src='${formats[key]}' alt='${key} download'>
	    	    	</a>
                `; 
            } else {
                crumb_downloads += `
                    <a href='${download[key].url}' style='height:30px; width: 30px;' download='${actual_language(articles[page].title)}.${key}'>
	    	    		<img class='icon' src='${formats[key]}' alt='${key} download'>
	    	    	</a>
                `; 
            }
        }
    } else { downloads.classList.remove('padding') }
    for (let i = 0; i < crumb_list.length; i++) {
        const target = crumb_list[i];
        const name = actual_language(articles[target].title);
        if (i !== crumb_list.length - 1) {
            crumb += `
                <div class='crumb color clickable_color' id='${target}_crumb' value='${target}'>${name}</div>
                <pre class='crumb color'> > </pre>
            `;
        } else crumb += `<div class='crumb' id='${target}_crumb' style='color: var(--themeColor)'>${name}</div>`;
    }
    crumb_navigation.innerHTML = crumb;
    downloads.innerHTML = crumb_downloads;
    for (i = 0; i < crumb_list.length - 1; i++) {
        document.getElementById(`${crumb_list[i]}_crumb`).addEventListener('click', function() { changePage(this.getAttribute('value')) })
    }
}

function event_listeners(listener_list) {
    for (let i = 0; i < listener_list.length; i ++) {
        let type = listener_list[i].split('_');
        type = type[type.length - 1];
        if (type === 'redirect') {
            document.getElementById(listener_list[i]).addEventListener('click', function() { changePage(this.getAttribute('id').replace('_redirect', '')) });
        }
    }
}

function mouseDown(e) {
    offset = e.clientX - sidenav.offsetWidth + 30;
    isDragging = 1;
    background.classList.add('on_dragging');
    content_district.classList.toggle('slides');
}

function touchStart(e) {
    offset = e.touches[0].clientX - sidenav.offsetWidth + 30;
    isDragging = 2;
    background.classList.add('on_dragging');
    content_district.classList.toggle('slides');
}

const mouseMove = throttle(function(e) {
    if (isDragging === 0) return;
    position = isDragging === 1 ? e.clientX - offset : e.touches[0].clientX - offset;
    if (position >= 160 && position <= background.offsetWidth - 345 && !sidenav_minimal) sidenav.style.width = `${position}px`;
    else if (position < 46 && !sidenav_minimal) {
        transition_or_not(0);
        sidenav.style.width = '';
        sidenav_minimal = true;
        minimal_start();
        musicContainer.addEventListener('click', musicButtonClicked);
    } else if (position >= 100 && sidenav_minimal) {
        transition_or_not(0);
        sidenav.style.width = '160px';
        sidenav_minimal = false;
        minimal_end(false);
        musicContainer.removeEventListener('click', musicButtonClicked);
    }
}, 16);

function mouseUp() {
    if (isDragging !== 0) {
        content_district.classList.toggle('slides');
        isDragging = 0;
        background.classList.remove('on_dragging');
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

function back() {
    if (second_pop_up) {
        OptionsButtonClicked();
        second_pop_up = false;
    } else back_shade();
}

function back_shade() {
    pop_up_index = 0;
    shade.style.opacity = '0';
    pop_up.style.opacity = '0';
    shade.style.pointerEvents = 'none';
    pop_up.style.pointerEvents = 'none';
}

function change_languages(targetPage = page) {
    document.documentElement.setAttribute('lang', language);
    for (let i = 0; i < entry_list.length; i ++) document.getElementById(`text_${entry_list[i].value}`).innerHTML = articles[entry_list[i].value].title[language];
    text_language.innerHTML = translation.language[language];
    text_previous.innerHTML = translation.previous[language];
    text_light.innerHTML = translation.light[language];
    text_dark.innerHTML = translation.dark[language];
    search_bar.placeholder = translation.search[language];
    search_bar_center.placeholder = translation.search[language];
    nations.src = translation.nations[language];
    document.getElementById('continue').innerHTML = translation.click_anywhere_to_continue[language];
    if (!everPlayedMusic) music_title.innerHTML = translation.music_player[language];
    changePage(targetPage, undefined, true);
}

function pop_up_change_languages(shift = true) {
    for (i = 0; i < language_list.length; i++) {
        if (language_list[i].checked && language_list[i].value !== language) {
            document.body.classList.remove(language);
            language = language_list[i].value;
            font_check();
            document.body.classList.add(language);
            if (language === system_language) setCookie('language', language, -1);
            else setCookie('language', language);
            if (shift) {
                pop_up_title.innerHTML = translation.languages[language];
                change_languages();
            }
            break;
        }
    }
}

function previous_page() {
    if (history.length != 0) changePage(history[history.length - 1], true);
}

function search(prompt) {
    let article_list = [];
    for (const key in articles) {
        if (articles[key].hide == undefined) {
            for (const key1 in articles[key].title) {
                if (articles[key].title[key1].toLowerCase().includes(prompt.toLowerCase())) {
                    article_list.push(key);
                    break;
                }
            }
        }
    }
    if (article_list.length === 0) return '404';
    return compileDirectory(article_list);
}

function synchronize_search(subject) {
    if (subject === 'side') search_bar_center.value = search_bar.value;
    else if (subject === 'center') search_bar.value = search_bar_center.value;
    else if (subject === 'pop_up') {
        search_bar_center.value = document.getElementById('pop_up_search').value;
        search_bar.value = document.getElementById('pop_up_search').value;
    }
}

function keyDown(event) {
    if (event.key === 'Enter') searchButtonClicked();
}

function warn(type, message) {
    warning_icon.src = warning_icons[type];
    warning_text.innerHTML = message;
    warning_bar.classList.add('show');
    timeout_2 = setTimeout(() => warning_bar.classList.remove('show'), 3000);
}

function warningMessageClicked() {
    warning_bar.classList.toggle('show');
    clearTimeout(timeout_2);
}

function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return 'void';
}

function setCookie(cname, cvalue, exdays = 36500) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 86400000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function actual_language(directory, type = 'object') {
    let actual_language;
    if (type === 'object') actual_language = directory[language] != undefined ? directory[language] : Object.values(directory)[0];
    else if (type === 'array') {
        for (let i = 0; i < directory.length; i ++) {
            if (directory[i] === language) {
                actual_language = language;
                break;
            }
        }
        if (actual_language == undefined) actual_language = directory[0];
    }
    return actual_language;
}

function loadCSS(href) { 
    let preloaded = document.createElement('link');
    preloaded.type = "text/css";
    preloaded.rel = "stylesheet";
    preloaded.href = href;
    document.head.appendChild(preloaded);
}

const toggleFooterBlur = throttle(function() {
    const footer = document.getElementById('title_bar');
    const top = footer.getBoundingClientRect().top;
    if (((window.innerWidth >= 767 && top <= 31) || (window.innerWidth < 767 && top <= 88)) && !footer.classList.contains('blurred')) footer.classList.add('blurred');
    else if ((window.innerWidth >= 767 && top > 31) || (window.innerWidth < 767 && top > 88)) footer.classList.remove('blurred'); 
}, 200);

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextMusic);
progress_container.addEventListener('click', setProgress);
nextButton.addEventListener('click', nextMusic);
prevButton.addEventListener('click', previousMusic);
playButton.addEventListener('click', toggleMusicPlayState);
language_option.addEventListener('click', languageButtonClicked);
back_button.addEventListener('click', back);
showcase.addEventListener('click', () => document.body.classList.add('slide'));
shade.addEventListener('click', () => {back_shade(); second_pop_up = false;});
previous.addEventListener('click', previous_page);
previous_center.addEventListener('click', previous_page);
search_button.addEventListener('click', searchButtonClicked);
search_button_center.addEventListener('click', searchButtonClicked);
search_bar.addEventListener('input', () => synchronize_search('side'));
search_bar_center.addEventListener('input', () => synchronize_search('center'));
dn.addEventListener('click', toggleTheme);
document.getElementById('warning_bar_wrapper').addEventListener('click', warningMessageClicked);
document.addEventListener('keydown', keyDown);
window.addEventListener('DOMContentLoaded', initialize);
window.addEventListener('resize', responsiveResizeLayout);
stretch_bar.addEventListener('touchstart', touchStart);
stretch_bar.addEventListener('mousedown', mouseDown);
window.addEventListener('mouseup', mouseUp);
document.addEventListener('mouseleave', mouseUp);
window.addEventListener('touchend', mouseUp);
document.addEventListener('touchcancel', mouseUp);
document.addEventListener('mousemove', mouseMove);
document.addEventListener('touchmove', mouseMove);
for (let i = 0; i < language_list.length; i++) language_list[i].addEventListener('change', pop_up_change_languages);
for (let i = 0; i < entry_list.length; i++) entry_list[i].addEventListener('change', function () { changePage(this.value) });