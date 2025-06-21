// #region Registry
const information = {
    version: 'V 2.7.2 Gamma',
    startDate: '',
    articleCount: 9,
    blogger: 'Hēsperus',
    reference: 'https://github.com//Hesprs/Hesprs.github.io',
    ASCIIart: `
\`7MMF'  \`7MMF'\`7MM"""YMM   .M"""bgd \`7MM"""Mq.\`7MM"""YMM  \`7MM"""Mq.\`7MMF'   \`7MF'.M"""bgd
  MM      MM    MM    \`7  ,MI    "Y   MM   \`MM. MM    \`7    MM   \`MM. \`MA     ,V ,MI    "Y
  MM      MM    MM   d    \`MMb.       MM   ,M9  MM   d      MM   ,M9   VM:   ,V  \`MMb.
  MMmmmmmmMM    MMmmMM      \`YMMNq.   MMmmdM9   MMmmMM      MMmmdM9     MM.  M'    \`YMMNq.
  MM      MM    MM   Y  , .     \`MM   MM        MM   Y  ,   MM  YM.     \`MM A'   .     \`MM
  MM      MM    MM     ,M Mb     dM   MM        MM     ,M   MM   \`Mb.    :MM;    Mb     dM
.JMML.  .JMML..JMMmmmmMMM P"Ybmmd"  .JMML.    .JMMmmmmMMM .JMML. .JMM.    VF     P"Ybmmd"
`
}

const articles = {
    homepage: {
        title: { en: 'Homepage', 'zh-Hans': '主页', de: 'Homepage' },
        type: 'article',
        address: 'homepage',
        hide: true,
    },
    articles: {
        title: { en: 'Articles', 'zh-Hans': '文章', de: 'Artikel' },
        type: 'directory',
        address: 'articles',
        thumbnail: 'https://img1.tucang.cc/api/image/show/d0f8d0f0a0f0c0b0a0f0a0f0a0f0a0f0',
        hide: true,
    },
    tools: {
        title: { en: 'Tools', 'zh-Hans': '工具', de: 'Werkzeuge' },
        type: 'directory',
        address: 'tools',
        hide: true,
    },
    learning: {
        title: { en: 'Learning', 'zh-Hans': '求知', de: 'Lernen' },
        type: 'directory',
        address: 'articles/learning',
        thumbnail: 'https://img1.tucang.cc/api/image/show/35fe849d2c1dae5dc3af76c1144e0dbe',
        hide: true,
    },
    humanities: {
        title: { en: 'Humanities', 'zh-Hans': '人文', de: 'Geisteswissenschaften' },
        type: 'directory',
        address: 'articles/humanities',
        thumbnail: 'https://img1.tucang.cc/api/image/show/1ef7c1490c9f292af671eccc0475b05a',
        hide: true,
    },
    development: {
        title: { en: 'Development', 'zh-Hans': '开发', de: 'Entwicklung' },
        type: 'directory',
        address: 'articles/development',
        thumbnail: 'https://img1.tucang.cc/api/image/show/9b0dba5ba3f7b67bb99a492fb10a179d',
        hide: true,
    },
    others: {
        title: { en: 'Others', 'zh-Hans': '其他', de: 'Andere' },
        type: 'directory',
        address: 'articles/others',
        thumbnail: 'https://img1.tucang.cc/api/image/show/e5c051e9039a6c6ed15308c8499bb6cd',
        hide: true,
    },
    about: {
        title: { en: 'About', 'zh-Hans': '关于', de: 'Über' },
        type: 'article',
        address: 'about',
        thumbnail: 'https://img1.tucang.cc/api/image/show/6c24d2f07bf7cdc817e1dc57ecedfb23',
    },
    moonstone: {
        title: { en: 'Moonstone (Aphroselene)', 'zh-Hans': '月长石 (阿芙罗塞勒涅)', de: 'Mondstein (Aphroselene)' },
        type: 'article',
        address: 'articles/others/moonstone',
        thumbnail: 'https://img1.tucang.cc/api/image/show/866691c4462ffcf585df787d0c60d6d2',
    },
    radicals: {
        title: { en: 'Dictionary of Radicals', 'zh-Hans': '词根大典', de: 'Wortstamm-Wörterbuch' },
        type: 'article',
        address: 'articles/learning/radicals',
        thumbnail: 'https://img1.tucang.cc/api/image/show/4d53269914fa8697a9d456bd770b0377',
    },
    fascist_propaganda: {
        title: { en: 'How Fascists Propagate', 'zh-Hans': '法西斯如何蛊惑人心', de: 'Wie Faschisten Propagieren' },
        type: 'article',
        address: 'articles/humanities/fascist_propaganda',
        thumbnail: 'https://img1.tucang.cc/api/image/show/52f7b856ccd492df8dbaf0c13b032ed6',
    },
    save_power: {
        title: { en: 'Save Power Icon', 'zh-Hans': '节约能源图标', de: 'Energiesparsymbol' },
        type: 'article',
        address: 'articles/learning/save_power',
        thumbnail: 'https://img1.tucang.cc/api/image/show/ae595ef56efb548dfd6861ff3d6dc986',
    },
    build_website: {
        title: { en: 'Build a Website for Free', 'zh-Hans': '免费搭建网站', de: 'Eine Website Kostenlos Erstellen' },
        type: 'article',
        address: 'articles/development/build_website',
        thumbnail: 'https://img1.tucang.cc/api/image/show/98bb1f17d8f1c0ca92e137022750d952',
    },
    '8values': {
        title: { en: 'Ideology Test', 'zh-Hans': '价值观测试', de: 'Ideologie-Test' },
        type: 'iframe',
        address: 'tools/8values',
        thumbnail: 'https://img1.tucang.cc/api/image/show/41c77f2809ee514d680b805b96f346e3',
    },
    lovership: {
        title: { en: 'The Liberated Lovership', 'zh-Hans': '解放恋爱论', de: 'Die Befreiten Liebe' },
        type: 'article',
        address: 'articles/humanities/lovership',
        thumbnail: 'https://img1.tucang.cc/api/image/show/8c06d219b88fcb9ef38edf2c63b67c7d',
    },
    ernest: {
        title: { en: 'Cyber Poster for The Importance of Being Earnest', 'zh-Hans': 'The Importance of Being Earnest 的赛博海报', de: 'Cyber-Poster für The Importance of Being Earnest' },
        type: 'iframe',
        address: 'articles/learning/ernest',
        thumbnail: 'https://img1.tucang.cc/api/image/show/d22076f6a5ce8cf0879a26a7b4d01134',
    },
    nk_university: {
        title: { en: 'Oddyssey to the Nanking University' },
        type: 'article',
        address: 'articles/learning/nk_university',
        thumbnail: 'https://img1.tucang.cc/api/image/show/db3f7290bbb31ba8fd372e4cdbf5e428',
    },
};

const music = [
    {
        name:'Night Voyager (Orchestral)',
        author: 'Bilibili @孙沛_fugamusic',
        url: 'https://od.lk/s/MTdfNDU2NTM5MTZf/Voyaging%20Star.mp3',
        img: 'https://p1.music.126.net/EIJc2Wt5AEsIHCFcVxm6pg==/109951165033567317.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/EIJc2Wt5AEsIHCFcVxm6pg==/109951165033567317.jpg?param=1000x1000'
    },{
        name:'Marry Christmas, Mr. Laurence',
        url: 'https://music.163.com/song/media/outer/url?id=443070377.mp3',
        img: 'https://p1.music.126.net/PywoXPKK3AjseU0Wx9wdXw==/109951167267731534.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/PywoXPKK3AjseU0Wx9wdXw==/109951167267731534.jpg?param=1000x1000'
    },{
        name:'Una Mattina',
        author: 'Ludovico Einaudi | Toutube @ThatCelloGuy',
        url: 'https://od.lk/s/MTdfNDU2NTM4NDJf/Una%20Mattina.mp3',
        img: 'https://p1.music.126.net/jCy2nwCEF_NhI184jkDsTA==/109951165967129801.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/jCy2nwCEF_NhI184jkDsTA==/109951165967129801.jpg?param=1000x1000'
    },{
        name:'Wicked Games',
        url: 'https://music.163.com/song/media/outer/url?id=1437405183.mp3',
        img: 'https://p1.music.126.net/MizRivoCmo7L64tISVlE9A==/109951164868862234.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/MizRivoCmo7L64tISVlE9A==/109951164868862234.jpg?param=1000x1000'
    },{
        name:'Faster Than Light',
        url: 'https://music.163.com/song/media/outer/url?id=1393259804.mp3',
        img: 'https://p1.music.126.net/CJJvMmVYktLsSmxQ2OpH8A==/109951164386591264.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/CJJvMmVYktLsSmxQ2OpH8A==/109951164386591264.jpg?param=1000x1000'
    },{
        name:'The Stonemasons',
        url: 'https://music.163.com/song/media/outer/url?id=29722369.mp3',
        img: 'https://p2.music.126.net/Q3s90qB6VYpbonkBOubFhg==/109951164071976757.jpg?param=100x100',
        img_HD: 'https://p2.music.126.net/Q3s90qB6VYpbonkBOubFhg==/109951164071976757.jpg?param=1000x1000'
    },{
        name:'Rule The World',
        url: 'https://music.163.com/song/media/outer/url?id=1983513884.mp3',
        img: 'https://p2.music.126.net/07y7BipINZolu-JncrjBDA==/109951167898539138.jpg?param=100x100',
        img_HD: 'https://p2.music.126.net/07y7BipINZolu-JncrjBDA==/109951167898539138.jpg?param=1000x1000'
    },{
        name:'a Memories for Us',
        url: 'https://music.163.com/song/media/outer/url?id=28481734.mp3',
        img: 'https://img1.tucang.cc/api/image/show/e3ba5be24c02da785f7d56011a91d47e',
        img_HD: 'https://img1.tucang.cc/api/image/show/f75e58d29dbefb3e921983f7de5a15c3'
    },{
        name:'Beyound the Timeline',
        url: 'https://music.163.com/song/media/outer/url?id=1922395111.mp3',
        img: 'https://p2.music.126.net/HVeWYaPR7FB8FrX_e-eJoA==/109951167077881007.jpg?param=100x100',
        img_HD: 'https://p2.music.126.net/HVeWYaPR7FB8FrX_e-eJoA==/109951167077881007.jpg?param=1000x1000'
    },{
        name:'Celestial Intertwine',
        url: 'https://music.163.com/song/media/outer/url?id=1911868531.mp3',
        img: 'https://p1.music.126.net/Wmdzeb-Dcvve5hJg9J36yQ==/109951169525316362.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/Wmdzeb-Dcvve5hJg9J36yQ==/109951169525316362.jpg?param=1000x1000'
    },{
        name:'No Man\'s Land',
        url: 'https://music.163.com/song/media/outer/url?id=2624172302.mp3',
        img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004HVFw2DGb8w.jpg',
        img_HD: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004HVFw2DGb8w.jpg'
    },{
        name:'the History',
        url: 'https://music.163.com/song/media/outer/url?id=1394601255.mp3',
        img: 'https://p1.music.126.net/c55oo6_xrGMZP8vIrSGTZg==/109951164401545279.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/c55oo6_xrGMZP8vIrSGTZg==/109951164401545279.jpg?param=1000x1000'
    }
];

const translation = {
    language: {
        en: 'English',
        'zh-Hans': '简体中文',
        de: 'Deutsch'
    },
    light: {
        en: 'Light',
        'zh-Hans': '明',
        de: 'Licht'
    },
    dark: {
        en: 'Dark',
        'zh-Hans': '暗',
        de: 'Dunkel'
    },
    nations: {
        en: 'https://img.icons8.com/fluency/100/great-britain-circular.png',
        'zh-Hans': 'https://img.icons8.com/fluency/100/china-circular.png',
        de: 'https://img.icons8.com/fluency/100/germany-circular.png'
    },
    languages: {
        en: 'Languages',
        'zh-Hans': '语言',
        de: 'Sprachen'
    },
    music_player: {
        en: 'Music Player',
        'zh-Hans': '音乐播放器',
        de: 'Musikplayer'
    },
    options: {
        en: 'Options',
        'zh-Hans': '选项',
        de: 'Einstellungen'
    },
    catalogue: {
        en: 'Catalogue',
        'zh-Hans': '目录',
        de: 'Katalog'
    },
    this_article_is_not_available_in: {
        en: 'This article is not available in English.',
        'zh-Hans': '本文不提供中文版本。',
        de: 'Dieser Artikel ist nicht auf Deutsch verfügbar.'
    },
    previous: {
        en: 'Previous',
        'zh-Hans': '上一页',
        de: 'Zurück'
    },
    search: {
        en: 'Search...',
        'zh-Hans': '搜索...',
        de: 'Suchen...'
    },
    search_description: {
        en: `This page showcases the result of searching for "%s" in the blog repertoire.`,
        'zh-Hans': `此页面展示了在博客库中搜索 "%s" 的结果。`,
        de: `Diese Seite zeigt das Ergebnis der Suche nach „%s" im Blog-Repertoire.`,
    },
    click_anywhere_to_continue: {
        en: 'Click Anywhere to Continue',
        'zh-Hans': '单击任意位置继续',
        de: 'Klicken Sie Irgendwo, um Fortzufahren'
    },
    hesperus_blog: {
        en: 'Hēsperus\' Sanctuary',
        'zh-Hans': 'Hēsperus 的庇护所',
        de: 'Hēsperus Zufluchtsort'
    },
    not_found_description: {
        en: "God knows what the user is looking for! We've got nothing but void.",
        'zh-Hans': "天知道用户在找什么！我们除了虚无什么都没有。",
        de: "Gott weiß, wonach der Benutzer sucht! Wir haben nichts außer Leere."
    },
    enter: {
        en: "Explore",
        'zh-Hans': "探索",
        de: "Erkunden"
    },
    loading: {
        en: "Loading...",
        'zh-Hans': "加载中...",
        de: "Laden..."
    },
}

const formatIcons = {
    pdf: 'https://img.icons8.com/fluency/100/pdf-2.png',
    md: 'https://img.icons8.com/fluency/100/markdown.png',
    docx: 'https://img.icons8.com/fluency/100/google-docs--v2.png',
    pptx: 'https://img.icons8.com/fluency/100/ms-powerpoint.png',
    img: 'https://img.icons8.com/fluency/100/image--v1.png'
}

const showcases = [
    {
        position: 10,
        url: 'https://img1.tucang.cc/api/image/show/b1ccfcace0d0565854fe957d1ebe6249',
        en: 'Liberty Egality<br>Unity Rationality',
        'zh-Hans': '自由 平等<br>团结 理性',
        de: 'Freiheit Gleichheit<br>Einheit Rationalität'
    },{
        position: 45,
        url: 'https://img1.tucang.cc/api/image/show/cdbfa0f9e1f139335688be2228299837',
        en: 'Ultra-Futurism',
        'zh-Hans': '超未来主义',
        de: 'Ultra-Futurismus'
    },{
        position: 17,
        url: 'https://img1.tucang.cc/api/image/show/7987be7eed6a1ce9b8067524472c12e5',
        en: 'Sub Radiis Stellae',
        'zh-Hans': '于星芒之下',
        de: 'Sub Radiis Stellae'
    },{
        position: 33,
        url: 'https://img1.tucang.cc/api/image/show/82e38d9fde5413ac52538786608809cb',
        en: 'To the glory that was Greece<br>The grandeur that was Rome',
        'zh-Hans': '光荣属于希腊<br>伟大属于罗马',
        de: 'Zu der Herrlichkeit, die Griechenland war<br>der Erhabenheit, die Rom war.'
    },
]

const warningIcons = {
    alarm: 'https://img.icons8.com/fluency/100/box-important--v1.png',
    error: 'https://img.icons8.com/fluency/100/cancel.png',
}

const fontDemand = {
    'zh-Hans': 'https://chinese-fonts-cdn.deno.dev/packages/stdgt/dist/%E4%B8%8A%E5%9B%BE%E4%B8%9C%E8%A7%82%E4%BD%93-%E7%B2%97%E4%BD%93/result.css',
    en: 'https://fonts.loli.net/css2?family=Cormorant+SC:wght@300;400;500;600;700&display=swap',
    de: 'https://fonts.loli.net/css2?family=Cormorant+SC:wght@300;400;500;600;700&display=swap',
}

const categories = {
    homepage: 'https://img.icons8.com/fluency/100/orca.png',
    articles: 'https://img.icons8.com/fluency/100/torah.png',
    tools: 'https://img.icons8.com/fluency/100/swiss-army-knife.png',
    about: 'https://img.icons8.com/fluency/100/info-popup.png',
}
// #endregion

// #region Initialization
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
let page = 'homepage';
let language, systemLanguage, timeout, timeout_2;
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

function initialize() {
    if (navigator.language.includes('zh')) systemLanguage = 'zh-Hans';
    else if (navigator.language.includes('de')) systemLanguage = 'de';
    else systemLanguage = 'en';
    let cookie_language = getCookie('language');
    language = cookie_language !== 'void' ? cookie_language : systemLanguage;
    fontLocalization();
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
    let content = '';
    for (let i = 0; i < Object.keys(categories).length; i ++) {
        let positionClass = '';
        if (i === 0) positionClass = 'upper';
        else if (i === Object.keys(categories).length - 1) positionClass = 'lower';
        else positionClass = 'middle';
        content += `<icon-entry class='${positionClass}'>${Object.keys(categories)[i]}</icon-entry>`;
    }
    document.getElementById('category_wrapper').innerHTML = content;
    console.log(`${information.ASCIIart}\nMade by ${information.blogger} | ${information.version} | See ${information.reference} for more\n\nOpen-source library list: %c Marked %c https://github.com/markedjs/marked`,
        "padding: 6px 3px; border-radius: 15px 0 0 15px; color: #fff; background: rgb(109, 121, 208); font-weight: bold;",
        "padding: 6px 3px;border-radius: 0 15px 15px 0; color: #fff; background: rgb(132, 67, 255);"
    );
    responsiveResizeLayout();
    change_languages(redirect);
    setTimeout(() => {document.getElementById('badge').classList.add('hide')}, 600);
}

function fontLocalization() {
    const links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) if (links[i].href === fontDemand[language]) return;
    loadCSS(fontDemand[language]);
}

const throttle = function(func, interval) {
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

function getCookie(cname) {
    try {
        let name = cname + '=';
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return 'void';
    } catch { return 'void' }
}

function setCookie(cname, cvalue, exdays = 36500) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 86400000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function loadCSS(href) { 
    let preloaded = document.createElement('link');
    preloaded.type = "text/css";
    preloaded.rel = "stylesheet";
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
    constructor() { super() }
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
        this.addEventListener('click', () => changePage(category));
    }
} customElements.define('icon-entry', iconEntry);
// #endregion

// #region Responsivity
const responsiveResizeLayout = throttle(function() {
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
        timeout = setTimeout(() => sidenav.classList.remove('transitioning'), 300)
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
    musicContainer.addEventListener('click', OptionsButtonClicked);
}

function endSuperMinimal() {
    sidenav.classList.remove('super_minimal');
    if (everPlayedMusic) music_cover.src = music[songIndex].img;
    else music_cover.src = 'https://img.icons8.com/fluency/100/lyre.png';
    document.getElementById('about').getElementsByClassName('icon')[0].src = 'https://img.icons8.com/fluency/100/info-popup.png';
    musicContainer.addEventListener('click', musicButtonClicked);
    musicContainer.removeEventListener('click', OptionsButtonClicked);
}

window.toggleFooterBlur = throttle( function() {
    if (articles[page] != undefined && articles[page].type !== 'iframe') {
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
    if (articles[page] != undefined && articles[page].type === 'iframe') document.getElementById('iframe').contentWindow.document.body.classList.toggle('dark');
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
    for (const key in categories) { content += `<icon-button id='pop_up_${key}' src='${categories[key]}' redirect='${key}'>${articles[key].title[language]}</icon-button>` }
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
        changePage(`search=${search_bar.value}`);
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

// #region Content disposal
async function changePage(title = page, back = false, force = false) {
    if (title === 'about' && sidenav.classList.contains('super_minimal') && pop_up_index !== 2) categoriesButtonClicked();
    else if (force || title !== page) {
        if (!back) { if (page != undefined && title !== page) history.push(page) }
        else history.pop();
        document.body.classList.remove(page);
        document.body.classList.add(title);
        page = title;
        timer = 0;
        const timer_interval = setInterval(() => timer += 10, 10);
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
            } else if (content.type === 'iframe') {
                content_0.innerHTML = `<main class='${content.main_classes}' style='${content.main_styles}'>${content.content}</main>`;
                const iframe_window = document.getElementById('iframe').contentWindow;
                content_0.style.scrollbarGutter = 'auto';
                iframe_window.addEventListener('DOMContentLoaded', () => {
                    if (content.darken_sidenav) sidenav.classList.add('darken');
                    cover.style.opacity = 0;
                    contentArea.style.opacity = 1;
                    cover.style.pointerEvents = 'none';
                });
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
            if (content.type !== 'iframe') {
                background.classList.remove('iframe');
                content_0.style.scrollbarGutter = '';
                cover.style.opacity = 0;
                contentArea.style.opacity = 1;
                cover.style.pointerEvents = 'none';
            }
            if (content.click_listeners != undefined) addEventListeners(content.click_listeners);
        }, timer);
    }
}

function previousPage() { if (history.length != 0) changePage(history[history.length - 1], true) }

async function resolvePage() {
    let address, content, warning, type; // type: search, directory, iframe, 404, article
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
        if (!content.no_markdown_download) content.downloads.md = { 
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
    } else { downloads.classList.remove('padding') }
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
    for (i = 0; i < crumb_list.length - 1; i++) {
        document.getElementById(`${crumb_list[i]}_crumb`).addEventListener('click', function() { changePage(this.getAttribute('value')) })
    }
}

function addEventListeners(listener_list) {
    for (let i = 0; i < listener_list.length; i ++) {
        let type = listener_list[i].split('_');
        type = type[type.length - 1];
        if (type === 'redirect') {
            document.getElementById(listener_list[i]).addEventListener('click', function() { changePage(this.getAttribute('id').replace('_redirect', '')) });
        }
    }
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

const mouseMove = throttle(function(e) {
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
        OptionsButtonClicked();
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
function change_languages(targetPage = page) {
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
    changePage(targetPage, undefined, true);
}

function pop_up_change_languages(shift = true) {
    for (i = 0; i < language_list.length; i++) {
        if (language_list[i].checked && language_list[i].value !== language) {
            language = language_list[i].value;
            fontLocalization();
            if (language === systemLanguage) setCookie('language', language, -1);
            else setCookie('language', language);
            if (shift) {
                pop_up_title.innerHTML = translation.languages[language];
                change_languages();
            }
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
shade.addEventListener('click', () => {normalBack(); second_pop_up = false;});
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
stretch_bar.addEventListener('touchstart', touchStart);
stretch_bar.addEventListener('mousedown', mouseDown);
window.addEventListener('mouseup', mouseUp);
document.addEventListener('mouseleave', mouseUp);
window.addEventListener('touchend', mouseUp);
document.addEventListener('touchcancel', mouseUp);
document.addEventListener('mousemove', mouseMove);
document.addEventListener('touchmove', mouseMove);
document.getElementById('content_0').addEventListener('scroll', function() { toggleFooterBlur(this.scrollTop, this.clientHeight, this.scrollHeight) });
document.getElementById('content_1').addEventListener('scroll', function() { toggleFooterBlur(this.scrollTop, this.clientHeight, this.scrollHeight) });
for (let i = 0; i < language_list.length; i++) language_list[i].addEventListener('change', pop_up_change_languages);
// #endregion

// #region Marked
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).marked={})}(this,(function(e){"use strict";function t(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}function n(t){e.defaults=t}e.defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};const s={exec:()=>null};function r(e,t=""){let n="string"==typeof e?e:e.source;const s={replace:(e,t)=>{let r="string"==typeof t?t:t.source;return r=r.replace(i.caret,"$1"),n=n.replace(e,r),s},getRegex:()=>new RegExp(n,t)};return s}const i={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},l=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,o=/(?:[*+-]|\d{1,9}[.)])/,a=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,c=r(a).replace(/bull/g,o).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),h=r(a).replace(/bull/g,o).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),p=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,u=/(?!\s*\])(?:\\.|[^\[\]\\])+/,g=r(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",u).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),k=r(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,o).getRegex(),d="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",f=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,x=r("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",f).replace("tag",d).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),b=r(p).replace("hr",l).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",d).getRegex(),m={blockquote:r(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",b).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:g,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:l,html:x,lheading:c,list:k,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:b,table:s,text:/^[^\n]+/},w=r("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",l).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",d).getRegex(),y={...m,lheading:h,table:w,paragraph:r(p).replace("hr",l).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",w).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",d).getRegex()},$={...m,html:r("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",f).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:s,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:r(p).replace("hr",l).replace("heading"," *#{1,6} *[^\n]").replace("lheading",c).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},R=/^( {2,}|\\)\n(?!\s*$)/,S=/[\p{P}\p{S}]/u,T=/[\s\p{P}\p{S}]/u,z=/[^\s\p{P}\p{S}]/u,A=r(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,T).getRegex(),_=/(?!~)[\p{P}\p{S}]/u,P=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,I=r(P,"u").replace(/punct/g,S).getRegex(),L=r(P,"u").replace(/punct/g,_).getRegex(),B="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",C=r(B,"gu").replace(/notPunctSpace/g,z).replace(/punctSpace/g,T).replace(/punct/g,S).getRegex(),q=r(B,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,_).getRegex(),E=r("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,z).replace(/punctSpace/g,T).replace(/punct/g,S).getRegex(),Z=r(/\\(punct)/,"gu").replace(/punct/g,S).getRegex(),v=r(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),D=r(f).replace("(?:--\x3e|$)","--\x3e").getRegex(),M=r("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",D).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),O=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Q=r(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",O).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),j=r(/^!?\[(label)\]\[(ref)\]/).replace("label",O).replace("ref",u).getRegex(),N=r(/^!?\[(ref)\](?:\[\])?/).replace("ref",u).getRegex(),G={_backpedal:s,anyPunctuation:Z,autolink:v,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,br:R,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:s,emStrongLDelim:I,emStrongRDelimAst:C,emStrongRDelimUnd:E,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:Q,nolink:N,punctuation:A,reflink:j,reflinkSearch:r("reflink|nolink(?!\\()","g").replace("reflink",j).replace("nolink",N).getRegex(),tag:M,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:s},H={...G,link:r(/^!?\[(label)\]\((.*?)\)/).replace("label",O).getRegex(),reflink:r(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",O).getRegex()},X={...G,emStrongRDelimAst:q,emStrongLDelim:L,url:r(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},F={...X,br:r(R).replace("{2,}","*").getRegex(),text:r(X.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},U={normal:m,gfm:y,pedantic:$},J={normal:G,gfm:X,breaks:F,pedantic:H},K={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},V=e=>K[e];function W(e,t){if(t){if(i.escapeTest.test(e))return e.replace(i.escapeReplace,V)}else if(i.escapeTestNoEncode.test(e))return e.replace(i.escapeReplaceNoEncode,V);return e}function Y(e){try{e=encodeURI(e).replace(i.percentDecode,"%")}catch{return null}return e}function ee(e,t){const n=e.replace(i.findPipe,((e,t,n)=>{let s=!1,r=t;for(;--r>=0&&"\\"===n[r];)s=!s;return s?"|":" |"})).split(i.splitPipe);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(i.slashPipe,"|");return n}function te(e,t,n){const s=e.length;if(0===s)return"";let r=0;for(;r<s;){if(e.charAt(s-r-1)!==t)break;r++}return e.slice(0,s-r)}function ne(e,t,n,s,r){const i=t.href,l=t.title||null,o=e[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;const a={type:"!"===e[0].charAt(0)?"image":"link",raw:n,href:i,title:l,text:o,tokens:s.inlineTokens(o)};return s.state.inLink=!1,a}class se{options;rules;lexer;constructor(t){this.options=t||e.defaults}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:te(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t,n){const s=e.match(n.other.indentCodeCompensation);if(null===s)return t;const r=s[1];return t.split("\n").map((e=>{const t=e.match(n.other.beginningSpace);if(null===t)return e;const[s]=t;return s.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){const t=te(e,"#");this.options.pedantic?e=t.trim():t&&!this.rules.other.endingSpaceChar.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:te(t[0],"\n")}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let e=te(t[0],"\n").split("\n"),n="",s="";const r=[];for(;e.length>0;){let t=!1;const i=[];let l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))i.push(e[l]),t=!0;else{if(t)break;i.push(e[l])}e=e.slice(l);const o=i.join("\n"),a=o.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}\n${o}`:o,s=s?`${s}\n${a}`:a;const c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(a,r,!0),this.lexer.state.top=c,0===e.length)break;const h=r.at(-1);if("code"===h?.type)break;if("blockquote"===h?.type){const t=h,i=t.raw+"\n"+e.join("\n"),l=this.blockquote(i);r[r.length-1]=l,n=n.substring(0,n.length-t.raw.length)+l.raw,s=s.substring(0,s.length-t.text.length)+l.text;break}if("list"!==h?.type);else{const t=h,i=t.raw+"\n"+e.join("\n"),l=this.list(i);r[r.length-1]=l,n=n.substring(0,n.length-h.raw.length)+l.raw,s=s.substring(0,s.length-t.raw.length)+l.raw,e=i.substring(r.at(-1).raw.length).split("\n")}}return{type:"blockquote",raw:n,tokens:r,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let l=!1;for(;e;){let n=!1,s="",o="";if(!(t=i.exec(e)))break;if(this.rules.block.hr.test(e))break;s=t[0],e=e.substring(s.length);let a=t[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,(e=>" ".repeat(3*e.length))),c=e.split("\n",1)[0],h=!a.trim(),p=0;if(this.options.pedantic?(p=2,o=a.trimStart()):h?p=t[1].length+1:(p=t[2].search(this.rules.other.nonSpaceChar),p=p>4?1:p,o=a.slice(p),p+=t[1].length),h&&this.rules.other.blankLine.test(c)&&(s+=c+"\n",e=e.substring(c.length+1),n=!0),!n){const t=this.rules.other.nextBulletRegex(p),n=this.rules.other.hrRegex(p),r=this.rules.other.fencesBeginRegex(p),i=this.rules.other.headingBeginRegex(p),l=this.rules.other.htmlBeginRegex(p);for(;e;){const u=e.split("\n",1)[0];let g;if(c=u,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),g=c):g=c.replace(this.rules.other.tabCharGlobal,"    "),r.test(c))break;if(i.test(c))break;if(l.test(c))break;if(t.test(c))break;if(n.test(c))break;if(g.search(this.rules.other.nonSpaceChar)>=p||!c.trim())o+="\n"+g.slice(p);else{if(h)break;if(a.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4)break;if(r.test(a))break;if(i.test(a))break;if(n.test(a))break;o+="\n"+c}h||c.trim()||(h=!0),s+=u+"\n",e=e.substring(u.length+1),a=g.slice(p)}}r.loose||(l?r.loose=!0:this.rules.other.doubleBlankLine.test(s)&&(l=!0));let u,g=null;this.options.gfm&&(g=this.rules.other.listIsTask.exec(o),g&&(u="[ ] "!==g[0],o=o.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:s,task:!!g,checked:u,loose:!1,text:o,tokens:[]}),r.raw+=s}const o=r.items.at(-1);if(!o)return;o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd(),r.raw=r.raw.trimEnd();for(let e=0;e<r.items.length;e++)if(this.lexer.state.top=!1,r.items[e].tokens=this.lexer.blockTokens(r.items[e].text,[]),!r.loose){const t=r.items[e].tokens.filter((e=>"space"===e.type)),n=t.length>0&&t.some((e=>this.rules.other.anyLine.test(e.raw)));r.loose=n}if(r.loose)for(let e=0;e<r.items.length;e++)r.items[e].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t){return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}}def(e){const t=this.rules.block.def.exec(e);if(t){const e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:n,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t)return;if(!this.rules.other.tableDelimiter.test(t[2]))return;const n=ee(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const e of s)this.rules.other.tableAlignRight.test(e)?i.align.push("right"):this.rules.other.tableAlignCenter.test(e)?i.align.push("center"):this.rules.other.tableAlignLeft.test(e)?i.align.push("left"):i.align.push(null);for(let e=0;e<n.length;e++)i.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:i.align[e]});for(const e of r)i.rows.push(ee(e,i.header.length).map(((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:i.align[t]}))));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;const t=te(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;let n=0;for(let s=0;s<e.length;s++)if("\\"===e[s])s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}(t[2],"()");if(-2===e)return;if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],s="";if(this.options.pedantic){const e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],s=e[3])}else s=t[3]?t[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),ne(t,{href:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n,title:s?s.replace(this.rules.inline.anyPunctuation,"$1"):s},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return ne(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s)return;if(s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const n=[...s[0]].length-1;let r,i,l=n,o=0;const a="*"===s[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(a.lastIndex=0,t=t.slice(-1*e.length+n);null!=(s=a.exec(t));){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r)continue;if(i=[...r].length,s[3]||s[4]){l+=i;continue}if((s[5]||s[6])&&n%3&&!((n+i)%3)){o+=i;continue}if(l-=i,l>0)continue;i=Math.min(i,i+l+o);const t=[...s[0]][0].length,a=e.slice(0,n+s.index+t+i);if(Math.min(n,i)%2){const e=a.slice(1,-1);return{type:"em",raw:a,text:e,tokens:this.lexer.inlineTokens(e)}}const c=a.slice(2,-2);return{type:"strong",raw:a,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," ");const n=this.rules.other.nonSpaceChar.test(e),s=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&s&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let e,n;return"@"===t[2]?(e=t[1],n="mailto:"+e):(e=t[1],n=e),{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if("@"===t[2])e=t[0],n="mailto:"+e;else{let s;do{s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??""}while(s!==t[0]);e=t[0],n="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}}class re{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||e.defaults,this.options.tokenizer=this.options.tokenizer||new se,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:i,block:U.normal,inline:J.normal};this.options.pedantic?(n.block=U.pedantic,n.inline=J.pedantic):this.options.gfm&&(n.block=U.gfm,this.options.breaks?n.inline=J.breaks:n.inline=J.gfm),this.tokenizer.rules=n}static get rules(){return{block:U,inline:J}}static lex(e,t){return new re(t).lex(e)}static lexInline(e,t){return new re(t).inlineTokens(e)}lex(e){e=e.replace(i.carriageReturn,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(i.tabCharGlobal,"    ").replace(i.spaceLine,""));e;){let s;if(this.options.extensions?.block?.some((n=>!!(s=n.call({lexer:this},e,t))&&(e=e.substring(s.raw.length),t.push(s),!0))))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);const n=t.at(-1);1===s.raw.length&&void 0!==n?n.raw+="\n":t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);const n=t.at(-1);"paragraph"===n?.type||"text"===n?.type?(n.raw+="\n"+s.raw,n.text+="\n"+s.text,this.inlineQueue.at(-1).src=n.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);const n=t.at(-1);"paragraph"===n?.type||"text"===n?.type?(n.raw+="\n"+s.raw,n.text+="\n"+s.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}let r=e;if(this.options.extensions?.startBlock){let t=1/0;const n=e.slice(1);let s;this.options.extensions.startBlock.forEach((e=>{s=e.call({lexer:this},n),"number"==typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(this.state.top&&(s=this.tokenizer.paragraph(r))){const i=t.at(-1);n&&"paragraph"===i?.type?(i.raw+="\n"+s.raw,i.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(s),n=r.length!==e.length,e=e.substring(s.raw.length)}else if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);const n=t.at(-1);"text"===n?.type?(n.raw+="\n"+s.raw,n.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(s)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,s=null;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(n));)e.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.anyPunctuation.exec(n));)n=n.slice(0,s.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(n));)n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let r=!1,i="";for(;e;){let s;if(r||(i=""),r=!1,this.options.extensions?.inline?.some((n=>!!(s=n.call({lexer:this},e,t))&&(e=e.substring(s.raw.length),t.push(s),!0))))continue;if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length);const n=t.at(-1);"text"===s.type&&"text"===n?.type?(n.raw+=s.raw,n.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(e,n,i)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(e)){e=e.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e))){e=e.substring(s.raw.length),t.push(s);continue}let l=e;if(this.options.extensions?.startInline){let t=1/0;const n=e.slice(1);let s;this.options.extensions.startInline.forEach((e=>{s=e.call({lexer:this},n),"number"==typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(l=e.substring(0,t+1))}if(s=this.tokenizer.inlineText(l)){e=e.substring(s.raw.length),"_"!==s.raw.slice(-1)&&(i=s.raw.slice(-1)),r=!0;const n=t.at(-1);"text"===n?.type?(n.raw+=s.raw,n.text+=s.text):t.push(s)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return t}}class ie{options;parser;constructor(t){this.options=t||e.defaults}space(e){return""}code({text:e,lang:t,escaped:n}){const s=(t||"").match(i.notSpaceStart)?.[0],r=e.replace(i.endingNewline,"")+"\n";return s?'<pre><code class="language-'+W(s)+'">'+(n?r:W(r,!0))+"</code></pre>\n":"<pre><code>"+(n?r:W(r,!0))+"</code></pre>\n"}blockquote({tokens:e}){return`<blockquote>\n${this.parser.parse(e)}</blockquote>\n`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>\n`}hr(e){return"<hr>\n"}list(e){const t=e.ordered,n=e.start;let s="";for(let t=0;t<e.items.length;t++){const n=e.items[t];s+=this.listitem(n)}const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+s+"</"+r+">\n"}listitem(e){let t="";if(e.task){const n=this.checkbox({checked:!!e.checked});e.loose?"paragraph"===e.tokens[0]?.type?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=n+" "+W(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>\n`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>\n`}table(e){let t="",n="";for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let s="";for(let t=0;t<e.rows.length;t++){const r=e.rows[t];n="";for(let e=0;e<r.length;e++)n+=this.tablecell(r[e]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+s+"</table>\n"}tablerow({text:e}){return`<tr>\n${e}</tr>\n`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>\n`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${W(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=Y(e);if(null===r)return s;let i='<a href="'+(e=r)+'"';return t&&(i+=' title="'+W(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));const r=Y(e);if(null===r)return W(n);let i=`<img loading="lazy" src="${e=r}" alt="${n}"`;return t&&(i+=` title="${W(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:W(e.text)}}class le{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class oe{options;renderer;textRenderer;constructor(t){this.options=t||e.defaults,this.options.renderer=this.options.renderer||new ie,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new le}static parse(e,t){return new oe(t).parse(e)}static parseInline(e,t){return new oe(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions?.renderers?.[r.type]){const e=r,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(!1!==t||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(e.type)){n+=t||"";continue}}const i=r;switch(i.type){case"space":n+=this.renderer.space(i);continue;case"hr":n+=this.renderer.hr(i);continue;case"heading":n+=this.renderer.heading(i);continue;case"code":n+=this.renderer.code(i);continue;case"table":n+=this.renderer.table(i);continue;case"blockquote":n+=this.renderer.blockquote(i);continue;case"list":n+=this.renderer.list(i);continue;case"html":n+=this.renderer.html(i);continue;case"paragraph":n+=this.renderer.paragraph(i);continue;case"text":{let r=i,l=this.renderer.text(r);for(;s+1<e.length&&"text"===e[s+1].type;)r=e[++s],l+="\n"+this.renderer.text(r);n+=t?this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):l;continue}default:{const e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return n}parseInline(e,t=this.renderer){let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions?.renderers?.[r.type]){const e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=e||"";continue}}const i=r;switch(i.type){case"escape":case"text":n+=t.text(i);break;case"html":n+=t.html(i);break;case"link":n+=t.link(i);break;case"image":n+=t.image(i);break;case"strong":n+=t.strong(i);break;case"em":n+=t.em(i);break;case"codespan":n+=t.codespan(i);break;case"br":n+=t.br(i);break;case"del":n+=t.del(i);break;default:{const e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return n}}class ae{options;block;constructor(t){this.options=t||e.defaults}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?re.lex:re.lexInline}provideParser(){return this.block?oe.parse:oe.parseInline}}class ce{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=oe;Renderer=ie;TextRenderer=le;Lexer=re;Tokenizer=se;Hooks=ae;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(const s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{const e=s;for(const s of e.header)n=n.concat(this.walkTokens(s.tokens,t));for(const s of e.rows)for(const e of s)n=n.concat(this.walkTokens(e.tokens,t));break}case"list":{const e=s;n=n.concat(this.walkTokens(e.items,t));break}default:{const e=s;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach((s=>{const r=e[s].flat(1/0);n=n.concat(this.walkTokens(r,t))})):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach((e=>{const n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if("renderer"in e){const n=t.renderers[e.name];t.renderers[e.name]=n?function(...t){let s=e.renderer.apply(this,t);return!1===s&&(s=n.apply(this,t)),s}:e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");const n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)})),n.extensions=t),e.renderer){const t=this.defaults.renderer||new ie(this.defaults);for(const n in e.renderer){if(!(n in t))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;const s=n,r=e.renderer[s],i=t[s];t[s]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=i.apply(t,e)),n||""}}n.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new se(this.defaults);for(const n in e.tokenizer){if(!(n in t))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;const s=n,r=e.tokenizer[s],i=t[s];t[s]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=i.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new ae;for(const n in e.hooks){if(!(n in t))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;const s=n,r=e.hooks[s],i=t[s];ae.passThroughHooks.has(n)?t[s]=e=>{if(this.defaults.async)return Promise.resolve(r.call(t,e)).then((e=>i.call(t,e)));const n=r.call(t,e);return i.call(t,n)}:t[s]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=i.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens,s=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(s.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}})),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return re.lex(e,t??this.defaults)}parser(e,t){return oe.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{const s={...n},r={...this.defaults,...s},i=this.onError(!!r.silent,!!r.async);if(!0===this.defaults.async&&!1===s.async)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(null==t)return i(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);const l=r.hooks?r.hooks.provideLexer():e?re.lex:re.lexInline,o=r.hooks?r.hooks.provideParser():e?oe.parse:oe.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(t):t).then((e=>l(e,r))).then((e=>r.hooks?r.hooks.processAllTokens(e):e)).then((e=>r.walkTokens?Promise.all(this.walkTokens(e,r.walkTokens)).then((()=>e)):e)).then((e=>o(e,r))).then((e=>r.hooks?r.hooks.postprocess(e):e)).catch(i);try{r.hooks&&(t=r.hooks.preprocess(t));let e=l(t,r);r.hooks&&(e=r.hooks.processAllTokens(e)),r.walkTokens&&this.walkTokens(e,r.walkTokens);let n=o(e,r);return r.hooks&&(n=r.hooks.postprocess(n)),n}catch(e){return i(e)}}}onError(e,t){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",e){const e="<p>An error occurred:</p><pre>"+W(n.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}}const he=new ce;function pe(e,t){return he.parse(e,t)}pe.options=pe.setOptions=function(e){return he.setOptions(e),pe.defaults=he.defaults,n(pe.defaults),pe},pe.getDefaults=t,pe.defaults=e.defaults,pe.use=function(...e){return he.use(...e),pe.defaults=he.defaults,n(pe.defaults),pe},pe.walkTokens=function(e,t){return he.walkTokens(e,t)},pe.parseInline=he.parseInline,pe.Parser=oe,pe.parser=oe.parse,pe.Renderer=ie,pe.TextRenderer=le,pe.Lexer=re,pe.lexer=re.lex,pe.Tokenizer=se,pe.Hooks=ae,pe.parse=pe;const ue=pe.options,ge=pe.setOptions,ke=pe.use,de=pe.walkTokens,fe=pe.parseInline,xe=pe,be=oe.parse,me=re.lex;e.Hooks=ae,e.Lexer=re,e.Marked=ce,e.Parser=oe,e.Renderer=ie,e.TextRenderer=le,e.Tokenizer=se,e.getDefaults=t,e.lexer=me,e.marked=pe,e.options=ue,e.parse=xe,e.parseInline=fe,e.parser=be,e.setOptions=ge,e.use=ke,e.walkTokens=de}));
// #endregion