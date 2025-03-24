const articles = {
    moonstone: {
        en: 'Moonstone (Aphroselene)',
        zh_Hans: '月长石 (阿芙罗塞勒涅)',
        de: 'Mondstein (Aphroselene)',
        address: 'others/moonstone',
        languages: ['en', 'zh_Hans', 'de'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/9e15869388f63f4ddaf292ed3a0da0b5',
    },
    
    about: {
        en: 'About',
        zh_Hans: '关于',
        de: 'Über',
        address: 'about',
        languages: ['en', 'zh_Hans', 'de'],
        thumbnail: 'https://pic1.imgdb.cn/item/67be9b49d0e0a243d405dc31.png',
    },

    homepage: {
        en: 'Homepage',
        zh_Hans: '主页',
        de: 'Homepage',
        address: 'homepage',
        directory: ['learning', 'humanities', 'development', 'others', 'about'],
        introduction: {
            en: '',
            zh_Hans: '',
            de: ''
        },
        hide: true,
    },

    learning: {
        en: 'Learning',
        zh_Hans: '求知',
        de: 'Lernen',
        address: 'learning',
        directory: ['radicals', 'save_power'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/35fe849d2c1dae5dc3af76c1144e0dbe',
        introduction: {
            en: 'The blogger regards this as the most frequently used category, which he wants to squeeze all the nuanced school assignments and learning notes in. Two reasons include getting all the finished works away from his desktop and seeking a new residence.',
            zh_Hans: '博主认为这是最常用的分类，他希望将所有烦人的学校作业和学习笔记都塞进这里。原因有两个：一是将所有已完成的作品从桌面上移走，二是为它们寻找一个新的归宿。',
            de: 'Der Blogger betrachtet dies als die am häufigsten verwendete Kategorie, in die er alle feinen Schulaufgaben und Lernnotizen hineinpressen möchte. Zwei Gründe dafür sind, alle fertigen Arbeiten von seinem Desktop zu entfernen und einen neuen Aufbewahrungsort für sie zu finden.'
        },
        hide: true,
    },

    humanities: {
        en: 'Humanities',
        zh_Hans: '人文',
        de: 'Geistes',
        address: 'humanities',
        directory: ['fascist_propaganda', '8values'],
        thumbnail: 'https://img1.tucang.cc/api/image/show/095706d788fd1d47e2ee022fe81733fd',
        introduction: {
            en: 'The Humanities are the fruit throughout the epic evolution of human intelligence, often including literature, sociology, economics, politics, art, history, philosophy and so on, serving as the beacon of human progress.',
            zh_Hans: '人文科学是人类智慧漫长演进的结晶，通常包括文学、社会学、经济学、政治学、艺术、历史、哲学等，是人类进步的火炬。',
            de: 'Die Geisteswissenschaften sind die Frucht der epischen Entwicklung der menschlichen Intelligenz und umfassen oft Literatur, Soziologie, Wirtschaftswissenschaften, Politik, Kunst, Geschichte, Philosophie und so weiter. Sie dienen als Leuchtturm des menschlichen Fortschritts.'
        },
        hide: true,
    },

    development: {
        en: 'Development',
        zh_Hans: '开发',
        de: 'Entwicklung',
        address: 'development',
        directory: ['build_website'],
        thumbnail: 'https://pic1.imgdb.cn/item/67c08e72d0e0a243d40755d0.png',
        introduction: {
            en: 'The word \'development\' is used to describe the process of programming a digital work. Articles involved in this classification mainly contain the technique and experience relating to development.',
            zh_Hans: '“开发” 一词用于描述编写数字作品的过程。此分类下的文章主要涉及与开发相关的技术和经验。',
            de: 'Das Wort "Entwicklung" wird verwendet, um den Prozess der Programmierung eines digitalen Werks zu beschreiben. Artikel in dieser Kategorie enthalten hauptsächlich Techniken und Erfahrungen im Zusammenhang mit der Entwicklung.'
        },
        hide: true,
    },

    others: {
        en: 'Others',
        zh_Hans: '其他',
        de: 'Andere',
        address: 'others',
        directory: ['moonstone'],
        thumbnail: 'https://file.nbfox.com/wp-content/uploads/2024/03/20240320134442-65fae84aae9ca.jpg',
        introduction: {
            en: 'It\'s impossible to involve all the topics of articles in the aforesaid categories. Consequently, an \'others\' folder is required to accommodate the rest articles. The documents in it usually involve a diverse range of propositions.',
            zh_Hans: '无法将所有文章主题都归入上述类别，因此需要一个“其他”文件夹来容纳剩余的文章。其中的文档通常涉及各种不同的主题。',
            de: 'Es ist unmöglich, alle Themen der Artikel in den oben genannten Kategorien unterzubringen. Daher ist ein "Andere"-Ordner erforderlich, um die restlichen Artikel aufzunehmen. Die Dokumente darin behandeln normalerweise eine Vielzahl von Themen.'
        },
        hide: true,
    },

    radicals: {
        en: 'Dictionary of Radicals',
        zh_Hans: '词根大典',
        de: 'Wortstamm-Wörterbuch',
        address: 'learning/radicals',
        languages: ['en'],
        thumbnail: 'https://pic1.imgdb.cn/item/67bea288d0e0a243d405e065.png',
    },

    fascist_propaganda: {
        en: 'How Fascists Propagate',
        zh_Hans: '法西斯如何蛊惑人心',
        de: 'Wie Faschisten Propagieren',
        address: 'humanities/fascist_propaganda',
        languages: ['en', 'zh_Hans', 'de'],
        thumbnail: 'https://pic1.imgdb.cn/item/67bff469d0e0a243d406b8cd.jpg',
    },

    save_power: {
        en: 'Save Ppower Icon',
        zh_Hans: '节约能源图标',
        de: 'Energiesparsymbol',
        address: 'learning/save_power',
        languages: ['en'],
        thumbnail: 'https://pic1.imgdb.cn/item/67c5cf88d0e0a243d40aebf3.png',
    },

    build_website: {
        en: 'Build a Website for Free',
        zh_Hans: '免费搭建网站',
        de: 'Eine Website kostenlos erstellen',
        address: 'development/build_website',
        languages: ['en', 'zh_Hans', 'de'],
        thumbnail: 'https://img.picui.cn/free/2025/03/05/67c7d661b2c75.png',
    },

    '8values': {
        en: 'Ideology Test',
        zh_Hans: '价值观测试',
        de: 'Ideologie-Test',
        address: 'humanities/8values',
        iframe: 'https://github.com/8values/8values.github.io', 
        languages: ['en', 'zh_Hans'],
        introduction: {
            en: '8values is, in essence, a political quiz that attempts to assign percentages for eight different political values. At the end of the quiz, your answers will be compared to the maximum possible for each value.',
            zh_Hans: '8values 本质上是一个政治测验，它试图为八个不同的政治价值观分配百分比。在测验结束时，您的答案将与每个价值观的最大可能值进行比较.',
            de: '8values ist im Wesentlichen ein politischer Test, der versucht, Prozentsätze für acht verschiedene politische Werte zuzuordnen. Am Ende des Tests werden Ihre Antworten mit dem maximal möglichen Wert für jede politische Ausrichtung verglichen.'
        },
        thumbnail: 'https://img1.tucang.cc/api/image/show/41c77f2809ee514d680b805b96f346e3',
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
        img: 'https://pic1.imgdb.cn/item/679f4bf1d0e0a243d4f99044.jpg',
        img_HD: 'https://pic1.imgdb.cn/item/67a21f20d0e0a243d4fbd342.jpg'
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
        img: 'https://pic1.imgdb.cn/item/679f4c04d0e0a243d4f99046.png',
        img_HD: 'https://pic1.imgdb.cn/item/67a21f20d0e0a243d4fbd343.png'
    },
    {
        name:'No Man\'s Land',
        url: 'http://music.163.com/song/media/outer/url?id=2624172302.mp3',
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
        zh_Hans: '简体中文',
        de: 'Deutsch'
    },
    light: {
        en: 'Light',
        zh_Hans: '明',
        de: 'Licht'
    },
    dark: {
        en: 'Dark',
        zh_Hans: '暗',
        de: 'Dunkel'
    },
    nations: {
        en: 'https://img.icons8.com/fluency/100/great-britain-circular.png',
        zh_Hans: 'https://img.icons8.com/fluency/100/china-circular.png',
        de: 'https://img.icons8.com/fluency/100/germany-circular.png'
    },
    languages: {
        en: 'Languages',
        zh_Hans: '语言',
        de: 'Sprachen'
    },
    music_player: {
        en: 'Music Player',
        zh_Hans: '音乐播放器',
        de: 'Musikplayer'
    },
    options: {
        en: 'Options',
        zh_Hans: '选项',
        de: 'Einstellungen'
    },
    catalogue: {
        en: 'Catalogue',
        zh_Hans: '目录',
        de: 'Katalog'
    },
    this_article_is_only_available_in: {
        en: 'This article is only available in: ',
        zh_Hans: '此文仅有以下译本: ',
        de: 'Dieser Artikel ist nur verfügbar in: '
    },
    dot: {
        en: '. ',
        zh_Hans: '。',
        de: '. '
    },
    previous: {
        en: 'Previous',
        zh_Hans: '上一页',
        de: 'Zurück'
    },
    search: {
        en: 'Search...',
        zh_Hans: '搜索...',
        de: 'Suchen...'
    },
    not_found_description: {
        en: 'God knows what the user is looking for! We\'ve got nothing but void.',
        zh_Hans: '天知道用户在找什么！我们除了虚无什么都没有。',
        de: 'Gott weiß, wonach der Benutzer sucht! Wir haben nichts außer Leere.'
    },
    search_description: {
        en: 'This page showcases the result of searching for "',
        en2: '" in the blog repertoire.',
        zh_Hans: '此页面展示了在博客库中搜索 "',
        zh_Hans2: '" 的结果。',
        de: 'Diese Seite zeigt das Ergebnis der Suche nach „',
        de2: '“ im Blog-Repertoire.'
    },
    click_anywhere_to_continue: {
        en: 'Click Anywhere to Continue',
        zh_Hans: '单击任意位置继续',
        de: 'Klicken Sie Irgendwo, um Fortzufahren'
    },
    hesperus_blog: {
        en: 'Hēsperus\' Blog',
        zh_Hans: 'Hēsperus 的博客',
        de: 'Hēsperus Blog'
    }
};

const formats = [
    {
        format: 'pdf',
        url: 'https://pic1.imgdb.cn/item/67a18f69d0e0a243d4fbc0b8.png'
    },
    {
        format: 'md',
        url: 'https://pic1.imgdb.cn/item/67a837abd0e0a243d4fd3949.png'
    },
    {
        format: 'docx',
        url: 'https://pic1.imgdb.cn/item/67a837abd0e0a243d4fd3948.png'
    },
    {
        format: 'pptx',
        url: 'https://pic1.imgdb.cn/item/67a837aad0e0a243d4fd3947.png'
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
        en: 'Liberty  Egality<br>Unity  Rationality',
        zh_Hans: '自由  平等<br>团结  理性',
        de: 'Freiheit  Gleichheit<br>Einheit  Rationalität'
    },
    {
        position: 45,
        url: 'https://img1.tucang.cc/api/image/show/cdbfa0f9e1f139335688be2228299837',
        en: 'Ultra-Futurism',
        zh_Hans: '超未来主义',
        de: 'Ultra-Futurismus'
    },
    {
        position: 17,
        url: 'https://img1.tucang.cc/api/image/show/177852b6cae1b02f7f69358d610c3593',
        en: 'Sub Radiis Stellae',
        zh_Hans: '于星芒之下',
        de: 'Sub Radiis Stellae'
    },
    {
        position: 33,
        url: 'https://img1.tucang.cc/api/image/show/818420e558af37cbc465cb0f81ad9c46',
        en: 'To the glory that was Greece<br>The grandeur that was Rome',
        zh_Hans: '光荣属于希腊<br>伟大属于罗马',
        de: 'Zu der Herrlichkeit, die Griechenland war<br>der Erhabenheit, die Rom war.'
    },
]

const warning_icons = {
    alarm: 'https://img.icons8.com/fluency/100/box-important--v1.png',
    error: 'https://img.icons8.com/fluency/100/cancel.png',
}