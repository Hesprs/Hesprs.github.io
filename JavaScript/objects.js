const articles = {
    homepage: {
        title: {
            en: 'Homepage',
            'zh-Hans': '主页',
            de: 'Homepage',
        },
        type: 'article',
        address: 'homepage',
        hide: true,
    },

    articles: {
        title: {
            en: 'Articles',
            'zh-Hans': '文章',
            de: 'Artikel',
        },
        type: 'directory',
        address: 'articles',
        thumbnail: 'https://img1.tucang.cc/api/image/show/d0f8d0f0a0f0c0b0a0f0a0f0a0f0a0f0',
        hide: true,
    },

    tools: {
        title: {
            en: 'Tools',
            'zh-Hans': '工具',
            de: 'Werkzeuge',
        },
        type: 'directory',
        address: 'tools',
        hide: true,
    },

    learning: {
        title: {
            en: 'Learning',
            'zh-Hans': '求知',
            de: 'Lernen',
        },
        type: 'directory',
        address: 'articles/learning',
        thumbnail: 'https://img1.tucang.cc/api/image/show/35fe849d2c1dae5dc3af76c1144e0dbe',
        hide: true,
    },

    humanities: {
        title: {
            en: 'Humanities',
            'zh-Hans': '人文',
            de: 'Geisteswissenschaften',
        },
        type: 'directory',
        address: 'articles/humanities',
        thumbnail: 'https://img1.tucang.cc/api/image/show/1ef7c1490c9f292af671eccc0475b05a',
        hide: true,
    },

    development: {
        title: {
            en: 'Development',
            'zh-Hans': '开发',
            de: 'Entwicklung',
        },
        type: 'directory',
        address: 'articles/development',
        thumbnail: 'https://img1.tucang.cc/api/image/show/9b0dba5ba3f7b67bb99a492fb10a179d',
        hide: true,
    },

    others: {
        title: {
            en: 'Others',
            'zh-Hans': '其他',
            de: 'Andere',
        },
        type: 'directory',
        address: 'articles/others',
        thumbnail: 'https://img1.tucang.cc/api/image/show/e5c051e9039a6c6ed15308c8499bb6cd',
        hide: true,
    },

    about: {
        title: {
            en: 'About',
            'zh-Hans': '关于',
            de: 'Über',
        },
        type: 'article',
        address: 'about',
        thumbnail: 'https://img1.tucang.cc/api/image/show/6c24d2f07bf7cdc817e1dc57ecedfb23',
    },

    moonstone: {
        title: {
            en: 'Moonstone (Aphroselene)',
            'zh-Hans': '月长石 (阿芙罗塞勒涅)',
            de: 'Mondstein (Aphroselene)',
        },
        type: 'article',
        address: 'articles/others/moonstone',
        thumbnail: 'https://img1.tucang.cc/api/image/show/866691c4462ffcf585df787d0c60d6d2',
    },

    radicals: {
        title: {
            en: 'Dictionary of Radicals',
            'zh-Hans': '词根大典',
            de: 'Wortstamm-Wörterbuch',
        },
        type: 'article',
        address: 'articles/learning/radicals',
        thumbnail: 'https://img1.tucang.cc/api/image/show/4d53269914fa8697a9d456bd770b0377',
    },

    fascist_propaganda: {
        title: {
            en: 'How Fascists Propagate',
            'zh-Hans': '法西斯如何蛊惑人心',
            de: 'Wie Faschisten Propagieren',
        },
        type: 'article',
        address: 'articles/humanities/fascist_propaganda',
        thumbnail: 'https://img1.tucang.cc/api/image/show/52f7b856ccd492df8dbaf0c13b032ed6',
    },

    save_power: {
        title: {
            en: 'Save Ppower Icon',
            'zh-Hans': '节约能源图标',
            de: 'Energiesparsymbol',
        },
        type: 'article',
        address: 'articles/learning/save_power',
        thumbnail: 'https://img1.tucang.cc/api/image/show/ae595ef56efb548dfd6861ff3d6dc986',
    },

    build_website: {
        title: {
            en: 'Build a Website for Free',
            'zh-Hans': '免费搭建网站',
            de: 'Eine Website Kostenlos Erstellen',
        },
        type: 'article',
        address: 'articles/development/build_website',
        thumbnail: 'https://img1.tucang.cc/api/image/show/98bb1f17d8f1c0ca92e137022750d952',
    },

    '8values': {
        title: {
            en: 'Ideology Test',
            'zh-Hans': '价值观测试',
            de: 'Ideologie-Test',
        },
        type: 'iframe',
        address: 'tools/8values',
        thumbnail: 'https://img1.tucang.cc/api/image/show/41c77f2809ee514d680b805b96f346e3',
    },

    lovership: {
        title: {
            en: 'The Liberated Lovership',
            'zh-Hans': '解放恋爱论',
            de: 'Die Befreiten Liebe',
        },
        type: 'article',
        address: 'articles/humanities/lovership',
        thumbnail: 'https://img1.tucang.cc/api/image/show/8c06d219b88fcb9ef38edf2c63b67c7d',
    },

    desk_scoring: {
        title: {
            en: 'Desk Scoring',
            'zh-Hans': '桌椅评分',
            de: 'Tischbewertung',
        },
        type: 'iframe',
        address: 'tools/desk_scoring',
        thumbnail: 'https://img1.tucang.cc/api/image/show/8ce4ecaa39f360dda0ab1d09529337c7',
    },

    ernest: {
        title: {
            en: 'Cyber Poster for The Importance of Being Earnest',
            'zh-Hans': 'The Importance of Being Earnest 的赛博海报',
            de: 'Cyber-Poster für The Importance of Being Earnest',
        },
        type: 'iframe',
        address: 'articles/learning/ernest',
        thumbnail: 'https://img1.tucang.cc/api/image/show/d22076f6a5ce8cf0879a26a7b4d01134',
    },

    nk_university: {
        title: {
            en: 'Oddyssey to the Nanking University',
        },
        type: 'article',
        address: 'articles/learning/nk_university',
        thumbnail: 'https://img1.tucang.cc/api/image/show/db3f7290bbb31ba8fd372e4cdbf5e428',
    },
};

const music = [
    {
        name:'Marry Christmas, Mr. Laurence',
        url: 'https://music.163.com/song/media/outer/url?id=443070377.mp3',
        img: 'https://p1.music.126.net/PywoXPKK3AjseU0Wx9wdXw==/109951167267731534.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/PywoXPKK3AjseU0Wx9wdXw==/109951167267731534.jpg?param=1000x1000'
    },
    {
        name:'Una Mattina',
        url: 'https://www.kumeiwp.com/wj/230557/2025/03/30/0cc64a9cee29640d0d28f46c1b20d131.mp3',
        img: 'https://p1.music.126.net/jCy2nwCEF_NhI184jkDsTA==/109951165967129801.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/jCy2nwCEF_NhI184jkDsTA==/109951165967129801.jpg?param=1000x1000'
    },
    {
        name:'Wicked Games',
        url: 'https://music.163.com/song/media/outer/url?id=1437405183.mp3',
        img: 'https://p1.music.126.net/MizRivoCmo7L64tISVlE9A==/109951164868862234.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/MizRivoCmo7L64tISVlE9A==/109951164868862234.jpg?param=1000x1000'
    },
    {
        name:'Faster Than Light',
        url: 'https://music.163.com/song/media/outer/url?id=1393259804.mp3',
        img: 'https://p1.music.126.net/CJJvMmVYktLsSmxQ2OpH8A==/109951164386591264.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/CJJvMmVYktLsSmxQ2OpH8A==/109951164386591264.jpg?param=1000x1000'
    },
    {
        name:'The Stonemasons',
        url: 'https://music.163.com/song/media/outer/url?id=29722369.mp3',
        img: 'https://p2.music.126.net/Q3s90qB6VYpbonkBOubFhg==/109951164071976757.jpg?param=100x100',
        img_HD: 'https://p2.music.126.net/Q3s90qB6VYpbonkBOubFhg==/109951164071976757.jpg?param=1000x1000'
    },
    {
        name:'Rule The World',
        url: 'https://music.163.com/song/media/outer/url?id=1983513884.mp3',
        img: 'https://p2.music.126.net/07y7BipINZolu-JncrjBDA==/109951167898539138.jpg?param=100x100',
        img_HD: 'https://p2.music.126.net/07y7BipINZolu-JncrjBDA==/109951167898539138.jpg?param=1000x1000'
    },
    {
        name:'a Memories for Us',
        url: 'https://music.163.com/song/media/outer/url?id=28481734.mp3',
        img: 'https://img1.tucang.cc/api/image/show/e3ba5be24c02da785f7d56011a91d47e',
        img_HD: 'https://img1.tucang.cc/api/image/show/f75e58d29dbefb3e921983f7de5a15c3'
    },
    {
        name:'Beyound the Timeline',
        url: 'https://music.163.com/song/media/outer/url?id=1922395111.mp3',
        img: 'https://p2.music.126.net/HVeWYaPR7FB8FrX_e-eJoA==/109951167077881007.jpg?param=100x100',
        img_HD: 'https://p2.music.126.net/HVeWYaPR7FB8FrX_e-eJoA==/109951167077881007.jpg?param=1000x1000'
    },
    {
        name:'Celestial Intertwine',
        url: 'https://music.163.com/song/media/outer/url?id=1911868531.mp3',
        img: 'https://p1.music.126.net/Wmdzeb-Dcvve5hJg9J36yQ==/109951169525316362.jpg?param=100x100',
        img_HD: 'https://p1.music.126.net/Wmdzeb-Dcvve5hJg9J36yQ==/109951169525316362.jpg?param=1000x1000'
    },
    {
        name:'No Man\'s Land',
        url: 'https://music.163.com/song/media/outer/url?id=2624172302.mp3',
        img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004HVFw2DGb8w.jpg',
        img_HD: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004HVFw2DGb8w.jpg'
    },
    {
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
    dot: {
        en: '. ',
        'zh-Hans': '。',
        de: '. '
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
        de: `Diese Seite zeigt das Ergebnis der Suche nach „%s“ im Blog-Repertoire.`,
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
}

const formats = {
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
    },
    {
        position: 45,
        url: 'https://img1.tucang.cc/api/image/show/cdbfa0f9e1f139335688be2228299837',
        en: 'Ultra-Futurism',
        'zh-Hans': '超未来主义',
        de: 'Ultra-Futurismus'
    },
    {
        position: 17,
        url: 'https://img1.tucang.cc/api/image/show/7987be7eed6a1ce9b8067524472c12e5',
        en: 'Sub Radiis Stellae',
        'zh-Hans': '于星芒之下',
        de: 'Sub Radiis Stellae'
    },
    {
        position: 33,
        url: 'https://img1.tucang.cc/api/image/show/82e38d9fde5413ac52538786608809cb',
        en: 'To the glory that was Greece<br>The grandeur that was Rome',
        'zh-Hans': '光荣属于希腊<br>伟大属于罗马',
        de: 'Zu der Herrlichkeit, die Griechenland war<br>der Erhabenheit, die Rom war.'
    },
]

const warning_icons = {
    alarm: 'https://img.icons8.com/fluency/100/box-important--v1.png',
    error: 'https://img.icons8.com/fluency/100/cancel.png',
}

const font_demand = {
    'zh-Hans': 'https://chinese-fonts-cdn.deno.dev/packages/stdgt/dist/%E4%B8%8A%E5%9B%BE%E4%B8%9C%E8%A7%82%E4%BD%93-%E7%B2%97%E4%BD%93/result.css',
    en: 'https://fonts.loli.net/css2?family=Cormorant+SC:wght@300;400;500;600;700&display=swap',
    de: 'https://fonts.loli.net/css2?family=Cormorant+SC:wght@300;400;500;600;700&display=swap',
}