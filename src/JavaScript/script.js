// #region Initialization
import { marked } from 'marked';
import useStore from './stateManager';
import { articles, music, fontDemand, formatIcons, information, translation, showcases, warningIcons, categories } from './registry';
import canvasViewer from 'json-canvas-viewer';

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
let everPlayedMusic = false;
let second_pop_up = false;
let sidenav_minimal = false;
let systemLanguage, timeout, timeout_2, language, page;
let history = [];

const cover = document.getElementById('cover');
const sidenav = document.getElementById('sidenav');
const background = document.getElementById('background');
const showcase = document.getElementById('showcase');
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
const text_language = document.getElementById('text_language');
const text_previous = document.getElementById('text_previous');
const previous = document.getElementById('previousPage');
const previous_center = document.getElementById('previous_center');
const pop_up_title = document.getElementById('pop_up_title');
const pop_up_content = document.getElementById('pop_up_content');
const contentArea = document.getElementById('contentArea');
const search_button = document.getElementById('search_button');
const search_button_center = document.getElementById('search_button_center');
const search_bar = document.getElementById('search_bar');
const search_bar_center = document.getElementById('search_bar_center');
const warning_bar = document.getElementById('warning_bar');
const warning_text = document.getElementById('warning_text');
const warning_icon = document.getElementById('warning_icon');
const github_corner = document.getElementById('github_corner');
const meta = document.getElementsByTagName('meta');
const language_list = document.getElementsByName('language');
const store = useStore();

function initialize() {
	let redirect;
	redirect = localStorage.getItem('page');
	if (redirect !== null) {
		redirect = redirect === 'ernest.html' ? 'ernest' : decodeURIComponent(redirect);
		document.body.classList.add('slide', 'non_transition');
		setTimeout(() => document.body.classList.remove('non_transition'), 20);
		localStorage.removeItem('page');
	} else redirect = 'homepage';
	store.modify('page', redirect);

	let content = '';
	for (let i = 0; i < Object.keys(categories).length; i++) {
		let positionClass = '';
		if (i === 0) positionClass = 'upper';
		else if (i === Object.keys(categories).length - 1) positionClass = 'lower';
		else positionClass = 'middle';
		content += `<icon-entry class='${positionClass}'>${Object.keys(categories)[i]}</icon-entry>`;
	}
	document.getElementById('category_wrapper').innerHTML = content;

	if (navigator.language.includes('zh')) systemLanguage = 'zh-Hans';
	else if (navigator.language.includes('de')) systemLanguage = 'de';
	else systemLanguage = 'en';
	let cookie_language = getCookie('language');
	store.modify('language', cookie_language !== 'void' ? cookie_language : systemLanguage);

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

	responsiveResizeLayout();
	setTimeout(() => document.getElementById('badge').classList.add('hide'), 600);
}

function fontLocalization() {
	const links = document.getElementsByTagName('link');
	for (let i = 0; i < links.length; i++) if (links[i].href === fontDemand[language]) return;
	loadCSS(fontDemand[language]);
}

const throttle = function (func, interval) {
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
};

function getCookie(cname) {
	let name = cname + '=';
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return 'void';
}

function setCookie(cname, cvalue, exdays = 36500) {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 86400000);
	let expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function loadCSS(href) {
	let preloaded = document.createElement('link');
	preloaded.type = 'text/css';
	preloaded.rel = 'stylesheet';
	preloaded.href = href;
	document.head.appendChild(preloaded);
}

function warn(type, message) {
	warning_icon.src = warningIcons[type];
	warning_text.innerHTML = message;
	warning_bar.classList.add('show');
	timeout_2 = setTimeout(() => warning_bar.classList.remove('show'), 3000);
}

function warningMessageClicked() {
	warning_bar.classList.toggle('show');
	clearTimeout(timeout_2);
}

class iconEntry extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const category = this.textContent;
		this.classList.add('entry', 'clickable');
		this.id = category;
		this.innerHTML = `
            <div class="label_wrapper">
                <img loading="lazy" class="icon" src="${categories[category]}" alt="${categories[category]}">
                <div class="center_text" id='text_${category}'></div>
            </div>
        `;
		this.addEventListener('click', () => store.modify('page', category));
	}
}
customElements.define('icon-entry', iconEntry);
// #endregion

// #region Responsivity
const responsiveResizeLayout = throttle(function () {
	if (window.innerWidth >= 767) {
		if (window.innerHeight < 580) {
			if (window.innerHeight < 534) {
				if (sidenavWrapLevel !== 2) {
					transition_or_not(0);
					if (sidenavWrapLevel === 0) startMinimal();
					startSuperMinimal();
					sidenavWrapLevel = 2;
				}
			} else if (sidenavWrapLevel !== 1) {
				transition_or_not(0);
				if (sidenavWrapLevel === 2) endSuperMinimal();
				else if (sidenavWrapLevel === 0 && !sidenav_minimal) startMinimal();
				sidenavWrapLevel = 1;
			}
		} else if (sidenavWrapLevel !== 0) {
			transition_or_not(0);
			if (sidenavWrapLevel === 2) endSuperMinimal();
			if (!sidenav_minimal) endMinimal();
			sidenavWrapLevel = 0;
		}
		if (contentArea.offsetWidth < 400) sidenav.style.width = `${window.innerWidth - 430}px`;
		if (screenWidthLevel !== 0) screenWidthLevel = 0;
	} else {
		if (sidenavWrapLevel === 0 && !sidenav_minimal) {
			startMinimal();
			sidenavWrapLevel = 1;
		}
		if (window.innerWidth < 504) {
			if (sidenavWrapLevel !== 2) {
				transition_or_not(1);
				startSuperMinimal();
				sidenavWrapLevel = 2;
			}
			if (screenWidthLevel !== 2) screenWidthLevel = 2;
		} else {
			if (sidenavWrapLevel !== 1) {
				transition_or_not(2);
				if (sidenavWrapLevel === 2) endSuperMinimal();
				else startMinimal();
				sidenavWrapLevel = 1;
			}
			if (screenWidthLevel !== 1) screenWidthLevel = 1;
		}
	}
	if (pop_up_index === 1) adjustPopUpMusicCover();
}, 100);

function transition_or_not(targetScreenWidthLevel) {
	if (screenWidthLevel === targetScreenWidthLevel) {
		clearTimeout(timeout);
		sidenav.classList.add('transitioning');
		timeout = setTimeout(() => sidenav.classList.remove('transitioning'), 300);
	} else {
		sidenav.classList.remove('transitioning');
		document.body.classList.add('non_transition');
		setTimeout(() => document.body.classList.remove('non_transition'), 20);
	}
}

function startMinimal() {
	sidenav.classList.add('minimal');
	custom_width = sidenav.offsetWidth - 30;
	musicContainer.addEventListener('click', musicButtonClicked);
	sidenav.style.width = '';
}

function endMinimal(custom = true) {
	sidenav.classList.remove('minimal');
	if (custom) sidenav.style.width = `${Math.max(custom_width, 160)}px`;
	musicContainer.removeEventListener('click', musicButtonClicked);
}

function startSuperMinimal() {
	sidenav.classList.add('super_minimal');
	music_cover.src = 'https://img.icons8.com/fluency/100/settings.png';
	document.getElementById('about').getElementsByClassName('icon')[0].src = 'https://img.icons8.com/fluency/100/magical-scroll.png';
	musicContainer.removeEventListener('click', musicButtonClicked);
	musicContainer.addEventListener('click', optionsButtonClicked);
}

function endSuperMinimal() {
	sidenav.classList.remove('super_minimal');
	if (everPlayedMusic) music_cover.src = music[songIndex].img;
	else music_cover.src = 'https://img.icons8.com/fluency/100/lyre.png';
	document.getElementById('about').getElementsByClassName('icon')[0].src = 'https://img.icons8.com/fluency/100/info-popup.png';
	musicContainer.addEventListener('click', musicButtonClicked);
	musicContainer.removeEventListener('click', optionsButtonClicked);
}

const toggleFooterBlur = throttle(function () {
	if (articles[page] != undefined && articles[page].type !== 'canvas') {
		const footer = document.getElementById('title_bar');
		const top = footer.getBoundingClientRect().top;
		if (((window.innerWidth >= 767 && top <= 31) || (window.innerWidth < 767 && top <= 78)) && !footer.classList.contains('blurred')) footer.classList.add('blurred');
		else if ((window.innerWidth >= 767 && top > 31) || (window.innerWidth < 767 && top > 78)) footer.classList.remove('blurred');
	}
}, 200);
// #endregion

// #region Buttons
function themeButtonClicked() {
	const currentTheme = window.matchMedia('(prefers-color-scheme: dark)');
	if (dn.checked) {
		if (currentTheme.matches) setCookie('theme', 'void', -1);
		else setCookie('theme', 'dark');
	} else {
		if (currentTheme.matches) setCookie('theme', 'light');
		else setCookie('theme', 'void', -1);
	}
	document.body.classList.toggle('dark');
}

function optionsButtonClicked() {
	let delay = 0;
	if (pop_up_index === 1 || pop_up_index === 4) {
		delay = 200;
		pop_up.style.opacity = '0';
	}
	pop_up_index = 3;
	setTimeout(() => {
		pop_up_title.innerHTML = translation.options[language];
		pop_up_content.innerHTML = `
            <div class='option' id='pop_up_music' style='margin: auto 0px 0px 0px'>
    			<img class='icon' alt='music cover' id='pop_up_settings_music_cover'>
    			<div class='center_text' style='margin: auto 0px auto auto;'>${translation.music_player[language]}</div>
    		</div>
            <div class='option' id='pop_up_language'>
    			<img src='${translation.nations[language]}' class='icon' alt='national flag'>
    			<div class='center_text' style='margin: auto 0px auto auto;'>${translation.language[language]}</div>
    		</div>
            <label class='option' for='dn' style='margin: 0px 0px auto 0px'>
    			<div class='text_light' id='pop_up_text_light'>${translation.light[language]}</div>
    			<div class='toggleWrapper'>
					<div class='themeTogglerBig'>
						<span class='themeTogglerBig-handler'>
							<span class='crater--1'></span>
							<span class='crater--2'></span>
							<span class='crater--3'></span>
						</span>
						<span class='star--1'></span>
						<span class='star--2'></span>
						<span class='star--3'></span>
						<span class='star--4'></span>
						<span class='star--5'></span>
						<span class='star--6'></span>
					</div>
    			</div>
    			<div class='text_dark' id='pop_up_text_dark'>${translation.dark[language]}</div>
    		</label>
        `;
		const pop_up_settings_music_cover = document.getElementById('pop_up_settings_music_cover');
		if (everPlayedMusic) {
			pop_up_settings_music_cover.src = music[songIndex].img;
			pop_up_settings_music_cover.style.borderRadius = '50%';
		} else pop_up_settings_music_cover.src = 'https://img.icons8.com/fluency/100/lyre.png';
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
	for (const key in categories) {
		content += `<icon-button id='pop_up_${key}' src='${categories[key]}' redirect='${key}'>${articles[key].title[language]}</icon-button>`;
	}
	pop_up_content.innerHTML = `<div class='directory' style='margin: auto 0px;'>${content}</div>`;
	showPopUp();
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
	    		<label for='en' class='demobox clickable' id='en_label'>
	    			<img class='icon' src='https://img.icons8.com/fluency/100/great-britain-circular.png' alt='UK flag'>
	    			<div class='center_text'>English</div>
	    		</label>
	    		<label for='zh-Hans' class='demobox clickable' id='zh-Hans_label'>
	    			<img class='icon' src='https://img.icons8.com/fluency/100/china-circular.png' alt='CN flag'>
	    			<div class='center_text'>简体中文</div>
	    		</label>
	    		<label for='de' class='demobox clickable' id='de_label'>
	    			<img class='icon' src='https://img.icons8.com/fluency/100/germany-circular.png' alt='DE flag'>
	    			<div class='center_text'>Deutsch</div>
	    		</label>
	    	</div>
        `;
		if (delay === 200) pop_up.style.opacity = '1';
		else showPopUp();
	}, delay);
}

function searchButtonClicked() {
	if (pop_up_index === 5 && search_bar.value != '') {
		back();
		store.modify('page', `search=${search_bar.value}`);
		search_bar.value = '';
		search_bar_center.value = '';
		document.getElementById('pop_up_search').value = '';
	} else if ((sidenav.classList.contains('minimal') && !sidenav.classList.contains('super_minimal')) || (window.innerWidth < 768 && window.innerWidth >= 504)) {
		pop_up_index = 5;
		pop_up_title.innerHTML = translation.search[language].replace('...', '');
		pop_up_content.innerHTML = `
            <div class='pop_up_search_wrapper'>
                <input type='text' id='pop_up_search' value='${search_bar.value}' placeholder='${translation.search[language]}'>
                <hr style='margin: 0px; width: 100%;'>
                <div id='pop_up_search_button'>
                    <img class='icon' src='https://img.icons8.com/fluency/100/search.png' alt='search'></img>
                    <div class='center_text'>${translation.search[language].replace('...', '')}</div>
                <div>
            <div>
        `;
		document.getElementById('pop_up_search').addEventListener('input', () => syncSearchBars('pop_up'));
		document.getElementById('pop_up_search_button').addEventListener('click', searchButtonClicked);
		showPopUp();
	} else if (search_bar.value != '') {
		store.modify('page', `search=${search_bar.value}`);
		search_bar.value = '';
		search_bar_center.value = '';
	}
}

function musicButtonClicked() {
	let delay = 0;
	if (pop_up_index === 3) {
		delay = 200;
		pop_up.style.opacity = '0';
		second_pop_up = true;
	}
	pop_up_index = 1;
	setTimeout(() => {
		pop_up_title.innerHTML = translation.music_player[language];
		pop_up_content.innerHTML = `
            <img alt='music-cover' id='pop_up_music_cover' />
	    	<div id='pop_up_music_title' class='center_text'>${translation.music_player[language]}</div>
	    	<div class='progress_container' id='pop_up_progress_container'>
	    		<div class='progress' id='pop_up_progress'></div>
	    	</div>
	    	<div style='display: flex; height: 40px; margin-bottom: auto;'>
                <button id='pop_up_previous' class='action-btn centerer' style='margin: 0px auto 0px auto;'>
	    			<img class='icon' src='https://img.icons8.com/fluency-systems-filled/100/end.png' alt='next' id='pop_up_previous_light'/>
	    			<img class='icon' src='https://img.icons8.com/?size=100&id=s1kxUJVDmJvK&format=png&color=FFFFFF' alt='next' id='pop_up_previous_dark'/>
	    	  	</button>
	    	  	<button id='pop_up_play' class='action-btn centerer'>
	    			<img class='icon' src='https://img.icons8.com/fluency-systems-filled/100/play.png' alt='play' id='pop_up_play_light'/>
	    			<img class='icon' src='https://img.icons8.com/fluency-systems-filled/100/pause.png' alt='pause' id='pop_up_pause_light'/>
	    			<img class='icon' src='https://img.icons8.com/?size=100&id=q0nxNdfpbYVl&format=png&color=FFFFFF' alt='pause' id='pop_up_pause_dark'/>
	    			<img class='icon' src='https://img.icons8.com/?size=100&id=fjx0LfGCNuZb&format=png&color=FFFFFF' alt='play' id='pop_up_play_dark'/>
	    	  	</button>
	    	  	<button id='pop_up_next' class='action-btn centerer' style='margin: 0px auto 0px auto;'>
	    			<img class='icon' src='https://img.icons8.com/fluency-systems-filled/100/end.png' alt='next' id='pop_up_next_light'/>
	    			<img class='icon' src='https://img.icons8.com/?size=100&id=s1kxUJVDmJvK&format=png&color=FFFFFF' alt='next' id='pop_up_next_dark'/>
	    	  	</button>
	    	</div>
        `;
		window.pop_up_playButton = document.getElementById('pop_up_play');
		window.pop_up_nextButton = document.getElementById('pop_up_next');
		window.pop_up_prevButton = document.getElementById('pop_up_previous');
		window.pop_up_progress = document.getElementById('pop_up_progress');
		window.pop_up_progress_container = document.getElementById('pop_up_progress_container');
		window.pop_up_music_title = document.getElementById('pop_up_music_title');
		window.pop_up_music_cover = document.getElementById('pop_up_music_cover');
		pop_up_nextButton.addEventListener('click', nextMusic);
		pop_up_prevButton.addEventListener('click', previousMusic);
		pop_up_playButton.addEventListener('click', toggleMusicPlayState);
		pop_up_progress_container.addEventListener('click', setProgress);
		if (everPlayedMusic) {
			updateProgress();
			pop_up_music_title.innerText = music[songIndex].name;
			pop_up_music_cover.src = music[songIndex].img_HD;
		} else {
			pop_up_music_cover.src = 'https://img1.tucang.cc/api/image/show/622efd0dcd56878de1d4dbda7e348373';
			pop_up_music_cover.style.borderRadius = '50%';
		}
		adjustPopUpMusicCover();
		if (delay === 200) pop_up.style.opacity = '1';
		else showPopUp();
	}, delay);
}
// #endregion

// #region Content Pipeline
async function changePage() {
	if (page === 'about' && sidenav.classList.contains('super_minimal') && pop_up_index !== 2) {
		categoriesButtonClicked();
		return;
	}

	timer = 0;
	const timer_interval = setInterval(() => (timer += 10), 10);
	cover.style.opacity = 1;
	contentArea.style.opacity = 0;
	layer = 1 - layer;
	modifyURL(page);
	const content = await resolvePage();
	meta.description.content = content.description;
	const content_1 = document.getElementById(`content_${1 - layer}`);
	const content_0 = document.getElementById(`content_${layer}`);
	clearInterval(timer_interval);
	timer = timer >= 200 ? 0 : 195 - timer;
	setTimeout(() => {
		if (content.warning != undefined) warn('alarm', content.warning);
		content_0.scrollTo(0, 0);
		if (content.github == undefined) github_corner.classList.remove('show');
		else {
			github_corner.href = content.github;
			github_corner.classList.add('show');
		}
		background.classList.remove('hide');
		sidenav.classList.remove('darken');
		content_1.innerHTML = '';
		contentArea.classList.toggle('slides');
		if (content.custom_css) loadCSS(content.custom_css);
		if (content.type === 'search' || content.type === '404') {
			content_0.innerHTML = `
                <main class='${content.main_classes}' style='${content.main_styles}'>${content.content}</main>
            `;
		} else if (content.type === 'canvas') {
			content_0.innerHTML = `<main class='${content.main_classes}' style='${content.main_styles}'>${content.content}</main>`;
			content_0.style.scrollbarGutter = 'auto';
			setTimeout(() => {
				if (content.darken_sidenav) sidenav.classList.add('darken');
				cover.style.opacity = 0;
				contentArea.style.opacity = 1;
				cover.style.pointerEvents = 'none';
			}, 300);
		} else {
			content_0.innerHTML = `
                <header>
                    <h1 class='article_title'>${actual_language(articles[page].title)}</h1>
                </header>
                <footer id='title_bar'>
		    		<div id='crumb_navigation'></div>
		    		<div id='downloads'></div>
		    	</footer>
                <hr>
                <main class='${content.main_classes}' style='${content.main_styles}'>
                    ${content.content}
                </main>
            `;
			compileCrumb(articles[page].address, content.downloads);
		}
		if (content.type !== 'canvas') {
			background.classList.remove('iframe');
			content_0.style.scrollbarGutter = '';
			cover.style.opacity = 0;
			contentArea.style.opacity = 1;
			cover.style.pointerEvents = 'none';
		}
		if (content.click_listeners != undefined) addEventListeners(content.click_listeners);
	}, timer);
}

function previousPage() {
	if (history.length === 1) return;
	const previous = history[history.length - 2];
	history.pop();
	history.pop();
	store.modify('page', previous);
}

async function resolvePage() {
	let address, content, warning, type; // type: search, directory, 404, article
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
				...compileDirectory(content.directory),
				...content,
			};
			address = 'done';
		} else {
			const factual_language = actual_language(content.languages, 'array');
			if (factual_language !== language) warning = translation.this_article_is_not_available_in[language];
			if (type === 'canvas') {
				content = {
					...content,
					content: `<canvas-viewer src='/Contents/${articles[page].address}/${factual_language}/index.canvas' style='height: 100%'></ canvas-viewer>`,
					main_classes: 'main_empty',
				};
				address = 'done';
			} else if (type === 'article') address = `${articles[page].address}/${factual_language}.md`;
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
		if (!content.no_markdown_download)
			content.downloads.md = {
				url: `/Contents/${address}`,
				type: 'direct',
			};
		if (content.downloads == undefined) content.downloads = '';
	} else {
		content.downloads = '';
	}
	if (content.description == undefined) content.description = type === 'search' ? translation.search_description : translation.not_found_description;
	content.description = actual_language(content.description);
	if (type === 'search') content.description = content.description.replace('%s', page.replace('search=', ''));
	content.type = type;
	return content;
}

function modifyURL(url = '') {
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
	for (let i = 0; i < directory.length; i++) content += `<article-card>${directory[i]}</article-card>`;
	content += '</div>';
	return {
		main_classes: 'normal_padding',
		content: content,
	};
}

function compileCrumb(address, download) {
	const downloads = document.getElementById('downloads');
	let crumb = '',
		crumb_downloads = '';
	const crumb_list = address.split('/');
	const crumb_navigation = document.getElementById('crumb_navigation');
	if (download !== '') {
		downloads.classList.add('padding');
		for (const key in download) {
			if (download[key].type == undefined || download[key].type !== 'direct') {
				crumb_downloads += `
                    <a href='${download[key].url}' style='height:30px; width: 30px;' target='_blank'>
	    	    		<img class='icon' src='${formatIcons[key]}' alt='${key} download'>
	    	    	</a>
                `;
			} else {
				crumb_downloads += `
                    <a href='${download[key].url}' style='height:30px; width: 30px;' download='${actual_language(articles[page].title)}.${key}'>
	    	    		<img class='icon' src='${formatIcons[key]}' alt='${key} download'>
	    	    	</a>
                `;
			}
		}
	} else {
		downloads.classList.remove('padding');
	}
	for (let i = 0; i < crumb_list.length; i++) {
		const target = crumb_list[i];
		const name = actual_language(articles[target].title);
		if (i !== crumb_list.length - 1) {
			crumb += `
                <div class='crumb clickable_color' id='${target}_crumb' value='${target}'>${name}</div>
                <pre class='crumb'> > </pre>
            `;
		} else crumb += `<div class='crumb' id='${target}_crumb' style='color: var(--themeColor)'>${name}</div>`;
	}
	crumb_navigation.innerHTML = crumb;
	downloads.innerHTML = crumb_downloads;
	for (let i = 0; i < crumb_list.length - 1; i++) {
		document.getElementById(`${crumb_list[i]}_crumb`).addEventListener('click', function () {
			store.modify('page', this.getAttribute('value'));
		});
	}
}

function addEventListeners(listener_list) {
	for (let i = 0; i < listener_list.length; i++) {
		let type = listener_list[i].split('_');
		type = type[type.length - 1];
		if (type === 'redirect') {
			document.getElementById(listener_list[i]).addEventListener('click', () => {
				store.modify('page', this.getAttribute('id').replace('_redirect', ''));
			});
		}
	}
}

export function actual_language(directory, type = 'object') {
	let actual_language;
	if (type === 'object') actual_language = directory[language] != undefined ? directory[language] : Object.values(directory)[0];
	else if (type === 'array') {
		for (let i = 0; i < directory.length; i++) {
			if (directory[i] === language) {
				actual_language = language;
				break;
			}
		}
		if (actual_language == undefined) actual_language = directory[0];
	}
	return actual_language;
}
// #endregion

// #region Retretch bar
function mouseDown(e) {
	offset = e.clientX - sidenav.offsetWidth + 30;
	isDragging = 1;
	background.classList.add('on_dragging');
	contentArea.classList.toggle('slides');
}

function touchStart(e) {
	offset = e.touches[0].clientX - sidenav.offsetWidth + 30;
	isDragging = 2;
	background.classList.add('on_dragging');
	contentArea.classList.toggle('slides');
}

const mouseMove = throttle(function (e) {
	if (isDragging === 0) return;
	position = isDragging === 1 ? e.clientX - offset : e.touches[0].clientX - offset;
	if (position >= 160 && position <= background.offsetWidth - 430 && !sidenav_minimal) sidenav.style.width = `${position}px`;
	else if (position < 46 && !sidenav_minimal) {
		transition_or_not(0);
		sidenav.style.width = '';
		sidenav_minimal = true;
		startMinimal();
		musicContainer.addEventListener('click', musicButtonClicked);
	} else if (position >= 100 && sidenav_minimal) {
		transition_or_not(0);
		sidenav.style.width = '160px';
		sidenav_minimal = false;
		endMinimal(false);
		musicContainer.removeEventListener('click', musicButtonClicked);
	}
}, 16);

function mouseUp() {
	if (isDragging !== 0) {
		contentArea.classList.toggle('slides');
		isDragging = 0;
		background.classList.remove('on_dragging');
	}
}
// #endregion

// #region Pop-up show hide
function showPopUp() {
	shade.style.opacity = '1';
	pop_up.style.opacity = '1';
	shade.style.pointerEvents = 'auto';
	pop_up.style.pointerEvents = 'auto';
}

function buttonBack() {
	if (second_pop_up) {
		optionsButtonClicked();
		second_pop_up = false;
	} else normalBack();
}

function normalBack() {
	pop_up_index = 0;
	shade.style.opacity = '0';
	pop_up.style.opacity = '0';
	shade.style.pointerEvents = 'none';
	pop_up.style.pointerEvents = 'none';
}
// #endregion

// #region Language
function change_languages() {
	document.documentElement.setAttribute('lang', language);
	for (const key in categories) document.getElementById(`text_${key}`).innerHTML = articles[key].title[language];
	text_language.innerHTML = translation.language[language];
	text_previous.innerHTML = translation.previous[language];
	text_light.innerHTML = translation.light[language];
	text_dark.innerHTML = translation.dark[language];
	search_bar.placeholder = translation.search[language];
	search_bar_center.placeholder = translation.search[language];
	document.getElementById('nations').src = translation.nations[language];
	document.getElementById('continue').innerHTML = translation.click_anywhere_to_continue[language];
	if (!everPlayedMusic) music_title.innerHTML = translation.music_player[language];
}

function pop_up_change_languages() {
	for (let i = 0; i < language_list.length; i++) {
		if (language_list[i].checked && language_list[i].value !== language) {
			store.modify('language', language_list[i].value);
			if (language === systemLanguage) setCookie('language', language, -1);
			else setCookie('language', language);
			pop_up_title.innerHTML = translation.languages[language];
			break;
		}
	}
}
// #endregion

// #region Search
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

function syncSearchBars(subject) {
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
// #endregion

// #region Music
function loadMusic() {
	audio.src = music[songIndex].url;
	music_title.innerText = music[songIndex].name;
	if (sidenavWrapLevel !== 2) music_cover.src = music[songIndex].img;
	if (pop_up_index === 1) {
		pop_up_music_title.innerText = music[songIndex].name;
		pop_up_music_cover.src = music[songIndex].img_HD;
	}
}

function toggleMusicPlayState() {
	if (musicContainer.classList.contains('playing')) {
		musicContainer.classList.remove('playing');
		pop_up_content.classList.remove('playing');
		audio.pause();
	} else {
		if (!everPlayedMusic) firstPlayMusic();
		musicContainer.classList.add('playing');
		pop_up_content.classList.add('playing');
		audio.play();
	}
}

function nextMusic() {
	if (!everPlayedMusic) firstPlayMusic();
	else {
		songIndex++;
		if (songIndex === music.length) songIndex = 0;
		loadMusic();
	}
	if (musicContainer.classList.contains('playing')) audio.play();
	progress.style.width = '0px';
	if (pop_up_index === 1) pop_up_progress.style.width = '0px';
}

function previousMusic() {
	if (!everPlayedMusic) {
		songIndex = music.length - 1;
		firstPlayMusic();
	} else {
		songIndex--;
		if (songIndex === -1) songIndex = music.length - 1;
		loadMusic();
	}
	if (musicContainer.classList.contains('playing')) audio.play();
	progress.style.width = '0px';
	if (pop_up_index === 1) pop_up_progress.style.width = '0px';
}

function updateProgress() {
	const progressPercent = (audio.currentTime / audio.duration) * 100;
	progress.style.width = `${progressPercent}%`;
	if (pop_up_index === 1) pop_up_progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
	if (!everPlayedMusic) {
		firstPlayMusic();
		return;
	}
	const width = this.clientWidth;
	const clickX = e.offsetX;
	audio.currentTime = (clickX / width) * audio.duration;
}

function adjustPopUpMusicCover() {
	const proper = Math.min(pop_up_content.offsetWidth - 30, pop_up_content.offsetHeight - 150);
	pop_up_music_cover.style.width = `${proper}px`;
	pop_up_music_cover.style.height = `${proper}px`;
}

function firstPlayMusic() {
	loadMusic();
	music_cover.style.borderRadius = '50%';
	music_title.style.fontSize = '13px';
	everPlayedMusic = true;
	if (pop_up_index === 1) pop_up_music_cover.style.borderRadius = '';
}
// #endregion

// #region Event listeners
window.addEventListener('load', initialize);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextMusic);
progress_container.addEventListener('click', setProgress);
nextButton.addEventListener('click', nextMusic);
prevButton.addEventListener('click', previousMusic);
playButton.addEventListener('click', toggleMusicPlayState);
document.getElementById('language_option').addEventListener('click', languageButtonClicked);
back_button.addEventListener('click', buttonBack);
showcase.addEventListener('click', () => document.body.classList.add('slide'));
shade.addEventListener('click', () => {
	normalBack();
	second_pop_up = false;
});
previous.addEventListener('click', previousPage);
previous_center.addEventListener('click', previousPage);
search_button.addEventListener('click', searchButtonClicked);
search_button_center.addEventListener('click', searchButtonClicked);
search_bar.addEventListener('input', () => syncSearchBars('side'));
search_bar_center.addEventListener('input', () => syncSearchBars('center'));
dn.addEventListener('click', themeButtonClicked);
document.getElementById('warning_bar_wrapper').addEventListener('click', warningMessageClicked);
document.addEventListener('keydown', keyDown);
window.addEventListener('resize', responsiveResizeLayout);
stretch_bar.addEventListener('touchstart', touchStart, { passive: true });
stretch_bar.addEventListener('mousedown', mouseDown);
window.addEventListener('mouseup', mouseUp);
document.addEventListener('mouseleave', mouseUp);
window.addEventListener('touchend', mouseUp);
document.addEventListener('touchcancel', mouseUp);
document.addEventListener('mousemove', mouseMove);
document.addEventListener('touchmove', mouseMove);
document.getElementById('content_0').addEventListener('scroll', function () {
	toggleFooterBlur(this.scrollTop, this.clientHeight, this.scrollHeight);
});
document.getElementById('content_1').addEventListener('scroll', function () {
	toggleFooterBlur(this.scrollTop, this.clientHeight, this.scrollHeight);
});
for (let i = 0; i < language_list.length; i++) language_list[i].addEventListener('change', pop_up_change_languages);
const unsubscribeLanguage = store.subscribe('language', newLanguage => {
	language = newLanguage;
	fontLocalization();
	change_languages();
	changePage(page, undefined, true);
});
const unsubscribePage = store.subscribe('page', newPage => {
	document.body.classList.remove(page);
	if (!newPage.includes('search=')) document.body.classList.add(newPage);
	page = newPage;
	history.push(page);
	changePage();
});
// #endregion
