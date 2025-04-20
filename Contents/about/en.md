<div class="directory">
    <div class="demobox shadow">
        <img loading="lazy" class="icon" src="https://img.icons8.com/fluency/100/orca.png" alt="Orca" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">Blog<br /><a href="https://hesprs.github.io">hesprs.github.io</a></div>
    </div>
    <div class="demobox shadow">
        <img loading="lazy" class="icon" src="https://img.icons8.com/fluency/100/mail--v1.png" alt="Mail" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">Mail<br />Hesprs@outlook.com</div>
    </div>
    <div class="demobox shadow">
        <img loading="lazy" class="icon" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-tencent-qq-an-instant-messaging-software-service-and-web-portal-developed-logo-color-tal-revivo.png" alt="QQ" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">QQ<br />Hesprs42</div>
    </div>
    <div class="demobox shadow">
        <img loading="lazy" class="icon" src="https://img.icons8.com/fluency/100/github.png" alt="Github" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">GitHub<br /><a href="https://github.com/Hesprs">Hesprs</a></div>
    </div>
    <div class="demobox shadow">
        <img loading="lazy" class="icon" src="https://img.icons8.com/fluency/100/reddit.png" alt="Reddit" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">Reddit<br /><a href="https://www.reddit.com/user/Hesprs/">Hesprs</a></div>
    </div>
    <div class="demobox shadow">
        <img loading="lazy" class="icon" src="https://img.icons8.com/color/48/icons8-new-logo.png" alt="icons8" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">Icons by<br /><a href="https://icons8.com">Icons8</a></div>
    </div>
</div>

---

# 🏛️ Hēsperus' Ideology
![Ideology](https://img1.tucang.cc/api/image/show/f5d53bee43913b14f76313138bd85699)
<p style="text-align: center;" id="8values_redirect" class="fake_a">From 8values, click me to take the test for yourself.</p>

---

# 📜 Update Log

#### V 2.4.1   20 Apr. 2025
1. Further systematize and optimize the article resolve and request logic;
2. Retrench code;
3. Apply lazy loading for every images;
4. Modify the "language not available" notification text;
5. Now the search function searches key words in every languages, lest the case that search results disappear when shifted to other languages;
6. Apply blur effect to the title bar;
7. Align the colour of checked radio category buttons in the navigation panel with the theme colour;
8. Fix the bug that the blur shadow doesn't cover the whole page in large screen devices;
9. Fix the bug of Cookies-driven automatic dark mode shifting not working when the preference is light mode;
10. Fix the bug of no search results appears when using URL with "search=" + Chinese characters to simulate the search function.

#### V 2.4.0   19 Apr. 2025
1. Reconstruct the content storing structure, abandoning the troublesome "JSON5" format, now params are stored in info.json and the articles are stored in markdown files which are automatically parsed into HTML when the article is requested;
2. Add download links of markdown format to every possible articles;
3. Add German translation to "The Liberated Lovership";
4. Refactor the download link generating logic and interactive element adder (eventListener adder) logic;
5. Redesign the 404 page;
6. Fix the bug that the upper-left search bar overflows its container;
7. Slightly adjust the opacity of the blur effect;
8. Adopt dynamic left padding of the ordered list and the dynamic scale of article cards to make them more readable for small screen users;
9. Adjust the colour of checked radio category buttons in the navigation panel to make them more obvious.

#### V 2.3.2   17 Apr. 2025
1. Fix the bug of website breakdown where a 404 page is absent;
2. Fix the bug that the prompt in the search bar is still black when in dark mode;
3. Now the website can decide light and dark mode automatically with reference to Cookies and user default theme.

#### V 2.3.1   15 Apr. 2025
1. Fix the bug of website breakdown when the user type in languages except "en", "zh-Hans", and "de" to URL bar and visit;
2. Remove the nettlesome language section in the article URLs, now the website decides languages automatically with reference to Cookies and user default language;
3. Align the style of "Desk Scoring" with the website's theme;
4. Fix the bug that the iframe pages are unable to shift dark mode depending on the parent website's settings;
5. Fix the bug of the sudden colour change of demostrating box text (like those in "Dictionary of Radicals") when shifting light and dark mode.

#### V 2.3.0   12 Apr. 2025
1. Move all the articles to the "articles" categroy, creating a new categroy "tools", moving "8values" to it;
2. Add a new article, "Cyber Poster for The Importance of Being Earnest" to the "Learning" sub-category;
3. Conduct responsive design to "Cyber Poster for The Importance of Being Earnest";
4. Change the title of the website to "Hēsperus' Sanctuary";
5. Stylize unordered list;
6. Optimize resolving article request logic;
7. Add magnify effects when hovering article cards;
8. Add a new tool "Desk Scoring";
9. Fix the bug of twisted and clipped crumb navigation when its width is excessive by adding a horizontal scroll bar.
10. Fix the bug of content scrollbar gutter width error in Safari;
11. Fix the bug that the scrollbar is not shown in "8values".

#### V 2.2.0   6 Apr. 2025
1. Add a thin scroll bar for articles;
2. Remove the floating title bar for it is incompatible in Safari, adding a sticky title bar instead;
3. Create a more compact layout for small screen users;
4. Move the GitHub badge to left-bottom corner in case it covers title bar or scroll bar;
5. Add download links for "Liberated Lovership" in the title bar;
6. Fix the bug that the download icons are not aligned to right in Safari;
7. Conduct a small amount of search engine optimization.

#### V 2.1.4   5 Apr. 2025
1. Add copyright statement to self-created articles;
2. Reconstruct the "Homepage";
3. Add a new article, "Liberated Lovership" to the "Humanity";
4. Optimize the performance tremendously by adding throttle to repetitively called functions;
5. Minish the font size and larger the paragraph spacing properly to ensure visual ease;
6. Fix the bug of non-central-alighed music player control buttons in pop up menu;
7. Fix the bug that the URL remains the previous page's after shifting to "Homepage".

#### V 2.1.3   1 Apr. 2025
1. Add a new song "Una Mattina" to the music player;
2. Add a "previous" button to the music player;
3. Rewrite the description for "Homepage" and "About";
4. Optimize the logic of choosing description for each article.

#### V 2.1.2   30 Mar. 2025
1. Fix the bug of central search bar borders with nonidentical colours;
2. Fix the bug that the music cover in the "settings" pop up menu refuses to rotate even if the music is playing;
3. Fix the bug of redundant shadow under "settings" and "music cover" icons in the main interface;
4. Fix the bug of misaligned height of 1 pixel between content area and title bar;
5. Fix the bug that the title bar will be shown lingeringly when shifting to a new page and the bar is hidden previously;
6. Fix the bug of title bar failure in search and 404 pages;
7. Fix the bug of non-central-alighed 404 page;
8. Fix some nuanced spelling mistakes;
9. Improve the user experience of "8alues" tremendously by implementing:
    - Responsive design of the "What are the eight values?" part;
    - Light and dark mode of arrows in the "What are the eight values?" part;
    - Removal of redundant shadow under icons of 8values;
    - Addition of several omitted smooth translations of shadow colours;
    - Bug fix of the colour-filling failure of four axes in the result page;
    - Addition of the bottom padding in the result page;
    - Application of larger border radius of the result image;
    - Addition of two more ideologies: "Juche/Spartanism" and "Moderate Left-Wing";
    - Revisal of some questions' judging values to be more objective.

#### V 2.1.1   29 Mar. 2025
1. The title bar is floating now, it will only appear at the top or bottom of the content page;
2. Improve some of the images' resolution;
3. Adjust the round corner radius of central search bar;
4. Fix the 1000-year-old failure of adjusting the webpage layout to match the various screen size;
5. Improve the visual effect and Chinese translation of "8values";
6. Fix the bug of central search bar borders with nonidentical thickness.

#### V 2.1.0   27 Mar. 2025
1. Transfer all the images in a naughty image host service which causes illegal cookies use to a more stable, fater and safer one;
2. Change all the mistaken "zh_Hans" to "zh-Hans";
3. Improve some of the images' resolution;
4. Change the cover of "Humanities";
5. Fix the bug of shadow error under icons and music covers;
6. Fix the bug of the quiz page in 8values which doesn't span the whole width of the content area;

#### V 2.0.1   24 Mar. 2025
1. Adjust the blur effect for better visual accessibility;
2. Adjust the self-adapt ratio of welcome page slogan and "continue";
3. Upgrade a background image's resolution;
4. Limit the maximum width of content dash to assure visual ease;
5. Optimize for Safari display;
6. Fix the bug of width error when release the minimized side navigation.

#### V 2.0.0   23 Mar. 2025
1. Reconstruct the user interface by applying the blur effect;
2. Images that previously appeared only on the welcome page are now applied across the whole website, with one being randomly selected as the background on each visit;
3. A Hēsperus badge will appear while the website is loading to compensate for the emptiness of the blank scree;
4. Optimize the user experience for the article "8values";
5. The GitHub corner, welcome page slogan and "continue" indicator can now self-adapt their scales according to the screen width;
6. Add a new song, "Marry Christmas, Mr. Laurence" to the music player;
7. Revise global round corner radius;
8. Transfer some images to a more stable and faster image hosting service;
9. Start a new part - Update Log in "about".

<p style="text-align: right;">Copyright ©️ Hēsperus</p>