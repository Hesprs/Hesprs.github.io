const articles = {
    homepage: {
        en: 'Homepage',
        'zh-Hans': '主页',
        de: 'Homepage',
        address: 'homepage',
        languages: ['en', 'zh-Hans', 'de'],
        hide: true,
    },

    articles: {
        en: 'Articles',
        'zh-Hans': '文章',
        de: 'Artikel',
        address: 'articles',
        directory: ['learning', 'humanities', 'development', 'others'],
        languages: ['en', 'zh-Hans', 'de'],
        description: {
            en: 'This is a collection of blog articles that Hēsperus has written.',
            'zh-Hans': '这里是Hēsperus所写的一些博客文章。',
            de: 'Dies ist eine Sammlung von Blogartikeln, die Hēsperus geschrieben hat.'
        },
        hide: true,
    },

    tools: {
        en: 'Tools',
        'zh-Hans': '工具',
        de: 'Werkzeuge',
        address: 'tools',
        directory: ['8values', 'desk_scoring'],
        languages: ['en', 'zh-Hans', 'de'],
        description: {
            en: 'This is a collection of tools that Hēsperus has developed.',
            'zh-Hans': '这里是Hēsperus所开发的一些工具。',
            de: 'Dies ist eine Sammlung von Werkzeugen, die von Hēsperus entwickelt wurden.'
        },
        hide: true,
    },

    learning: {
        en: 'Learning',
        'zh-Hans': '求知',
        de: 'Lernen',
        address: 'articles/learning',
        directory: ['radicals', 'ernest', 'save_power'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/35fe849d2c1dae5dc3af76c1144e0dbe',
        description: {
            en: 'The blogger regards this as the most frequently used category, which he wants to squeeze all the nuanced school assignments and learning notes in. Two reasons include getting all the finished works away from his desktop and seeking a new residence.',
            'zh-Hans': '博主认为这是最常用的分类，他希望将所有烦人的学校作业和学习笔记都塞进这里。原因有两个：一是将所有已完成的作品从桌面上移走，二是为它们寻找一个新的归宿。',
            de: 'Der Blogger betrachtet dies als die am häufigsten verwendete Kategorie, in die er alle feinen Schulaufgaben und Lernnotizen hineinpressen möchte. Zwei Gründe dafür sind, alle fertigen Arbeiten von seinem Desktop zu entfernen und einen neuen Aufbewahrungsort für sie zu finden.'
        },
        hide: true,
    },

    humanities: {
        en: 'Humanities',
        'zh-Hans': '人文',
        de: 'Geisteswissenschaften',
        address: 'articles/humanities',
        directory: ['lovership', 'fascist_propaganda'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/1ef7c1490c9f292af671eccc0475b05a',
        description: {
            en: 'The Humanities are the fruit throughout the epic evolution of human intelligence, often including literature, sociology, economics, politics, art, history, philosophy and so on, serving as beacons of human progress.',
            'zh-Hans': '人文科学是人类智慧漫长演进的结晶，通常包括文学、社会学、经济学、政治学、艺术、历史、哲学等，是人类进步的火炬。',
            de: 'Die Geisteswissenschaften sind die Frucht der epischen Entwicklung der menschlichen Intelligenz und umfassen oft Literatur, Soziologie, Wirtschaftswissenschaften, Politik, Kunst, Geschichte, Philosophie und so weiter. Sie dienen als Leuchtturm des menschlichen Fortschritts.'
        },
        hide: true,
    },

    development: {
        en: 'Development',
        'zh-Hans': '开发',
        de: 'Entwicklung',
        address: 'articles/development',
        directory: ['build_website'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/9b0dba5ba3f7b67bb99a492fb10a179d',
        description: {
            en: 'The word \'development\' is used to describe the process of programming a digital work. Articles involved in this classification mainly contain the technique and experience relating to development.',
            'zh-Hans': '“开发” 一词用于描述编写数字作品的过程。此分类下的文章主要涉及与开发相关的技术和经验。',
            de: 'Das Wort "Entwicklung" wird verwendet, um den Prozess der Programmierung eines digitalen Werks zu beschreiben. Artikel in dieser Kategorie enthalten hauptsächlich Techniken und Erfahrungen im Zusammenhang mit der Entwicklung.'
        },
        hide: true,
    },

    others: {
        en: 'Others',
        'zh-Hans': '其他',
        de: 'Andere',
        address: 'articles/others',
        directory: ['moonstone'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/88c2c5111e9d7c281d7307299d94e8d9',
        description: {
            en: 'It\'s impossible to involve all the topics of articles in the aforesaid categories. Consequently, an \'others\' folder is required to accommodate the rest articles. The documents in it usually involve a diverse range of propositions.',
            'zh-Hans': '无法将所有文章主题都归入上述类别，因此需要一个“其他”文件夹来容纳剩余的文章。其中的文档通常涉及各种不同的主题。',
            de: 'Es ist unmöglich, alle Themen der Artikel in den oben genannten Kategorien unterzubringen. Daher ist ein "Andere"-Ordner erforderlich, um die restlichen Artikel aufzunehmen. Die Dokumente darin behandeln normalerweise eine Vielzahl von Themen.'
        },
        hide: true,
    },

    about: {
        en: 'About',
        'zh-Hans': '关于',
        de: 'Über',
        address: 'about',
        languages: ['en', 'zh-Hans', 'de'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/6c24d2f07bf7cdc817e1dc57ecedfb23',
    },

    moonstone: {
        en: 'Moonstone (Aphroselene)',
        'zh-Hans': '月长石 (阿芙罗塞勒涅)',
        de: 'Mondstein (Aphroselene)',
        address: 'articles/others/moonstone',
        languages: ['en', 'zh-Hans', 'de'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/866691c4462ffcf585df787d0c60d6d2',
    },

    radicals: {
        en: 'Dictionary of Radicals',
        'zh-Hans': '词根大典',
        de: 'Wortstamm-Wörterbuch',
        address: 'articles/learning/radicals',
        languages: ['en'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/4d53269914fa8697a9d456bd770b0377',
    },

    fascist_propaganda: {
        en: 'How Fascists Propagate',
        'zh-Hans': '法西斯如何蛊惑人心',
        de: 'Wie Faschisten Propagieren',
        address: 'articles/humanities/fascist_propaganda',
        languages: ['en', 'zh-Hans', 'de'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/52f7b856ccd492df8dbaf0c13b032ed6',
    },

    save_power: {
        en: 'Save Ppower Icon',
        'zh-Hans': '节约能源图标',
        de: 'Energiesparsymbol',
        address: 'articles/learning/save_power',
        languages: ['en'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/ae595ef56efb548dfd6861ff3d6dc986',
    },

    build_website: {
        en: 'Build a Website for Free',
        'zh-Hans': '免费搭建网站',
        de: 'Eine Website Kostenlos Erstellen',
        address: 'articles/development/build_website',
        languages: ['en', 'zh-Hans', 'de'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/98bb1f17d8f1c0ca92e137022750d952',
    },

    '8values': {
        en: 'Ideology Test',
        'zh-Hans': '价值观测试',
        de: 'Ideologie-Test',
        address: 'tools/8values',
        iframe: 'https://github.com/8values/8values.github.io', 
        languages: ['en', 'zh-Hans'],
        description: {
            en: '8values is, in essence, a political quiz that attempts to assign percentages for eight different political values. At the end of the quiz, your answers will be compared to the maximum possible for each value.',
            'zh-Hans': '8values 本质上是一个政治测验，它试图为八个不同的政治价值观分配百分比。在测验结束时，您的答案将与每个价值观的最大可能值进行比较.',
            de: '8values ist im Wesentlichen ein politischer Test, der versucht, Prozentsätze für acht verschiedene politische Werte zuzuordnen. Am Ende des Tests werden Ihre Antworten mit dem maximal möglichen Wert für jede politische Ausrichtung verglichen.'
        },
        thumbnail: 'https://img1.tucang.cc/api/image/show/41c77f2809ee514d680b805b96f346e3',
    },

    lovership: {
        en: 'The Liberated Lovership',
        'zh-Hans': '解放恋爱论',
        de: 'Die Befreiten Liebe',
        address: 'articles/humanities/lovership',
        languages: ['en', 'zh-Hans', 'de'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/8c06d219b88fcb9ef38edf2c63b67c7d',
    },

    desk_scoring: {
        en: 'Desk Scoring',
        'zh-Hans': '桌椅评分',
        de: 'Tischbewertung',
        address: 'tools/desk_scoring',
        iframe: '',
        languages: ['en'],
        description: {
            en: 'This is a tool to mark the chair-on-desk condition.',
        },
        thumbnail: 'https://img1.tucang.cc/api/image/show/8ce4ecaa39f360dda0ab1d09529337c7',
    },

    ernest: {
        en: 'Cyber Poster for The Importance of Being Earnest',
        'zh-Hans': 'The Importance of Being Earnest 的赛博海报',
        de: 'Cyber-Poster für The Importance of Being Earnest',
        address: 'articles/learning/ernest',
        iframe: '',
        languages: ['en'],
        description: {
            en: 'This is a poster for The Importance of Being Earnest made by Hēsperus for the sake of a winter holiday homework.',
        },
        thumbnail: 'https://img1.tucang.cc/api/image/show/d22076f6a5ce8cf0879a26a7b4d01134',
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
    this_article_is_only_available_in: {
        en: 'This article is only available in ',
        'zh-Hans': '此文仅有以下译本 ',
        de: 'Dieser Artikel ist nur verfügbar in '
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
};

const formats = [
    {
        format: 'pdf',
        url: 'https://img.icons8.com/fluency/100/pdf-2.png'
    },
    {
        format: 'md',
        url: 'https://img.icons8.com/fluency/100/markdown.png'
    },
    {
        format: 'docx',
        url: 'https://img.icons8.com/fluency/100/google-docs--v2.png'
    },
    {
        format: 'pptx',
        url: 'https://img.icons8.com/fluency/100/ms-powerpoint.png'
    },
    {
        format: 'img',
        url: 'https://img.icons8.com/fluency/100/image--v1.png'
    },
];

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