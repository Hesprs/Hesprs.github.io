<div class="directory">
    <div class="demobox shadow">
        <img class="icon" src="https://img.icons8.com/fluency/100/orca.png" alt="虎鲸" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">博客<br /><a href="https://hesprs.github.io">hesprs.github.io</a></div>
    </div>
    <div class="demobox shadow">
        <img class="icon" src="https://img.icons8.com/fluency/100/mail--v1.png" alt="邮件" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">邮箱<br />Hesprs@outlook.com</div>
    </div>
    <div class="demobox shadow">
        <img class="icon" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/ external-tencent-qq-an-instant-messaging-software-service-and-web-portal-developed-logo-color-tal-revivo.png" alt="QQ" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">QQ<br />Hesprs42</div>
    </div>
    <div class="demobox shadow">
        <img class="icon" src="https://img.icons8.com/fluency/100/github.png" alt="GitHub" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">GitHub<br /><a href="https://github.com/Hesprs">Hesprs</a></div>
    </div>
    <div class="demobox shadow">
        <img class="icon" src="https://img.icons8.com/fluency/100/reddit.png" alt="Reddit" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">Reddit<br /><a href="https://www.reddit.com/user/Hesprs/">Hesprs</a></div>
    </div>
    <div class="demobox shadow">
        <img class="icon" src="https://img.icons8.com/color/48/icons8-new-logo.png" alt="icons8" style="width: 40px; height: 40px; margin: auto 0px auto auto;" />
        <div class="center_text color" style="margin-left: 10px;">图标提供<br /><a href="https://icons8.com">Icons8</a></div>
    </div>
</div>

---

# Hēsperus的价值观
![意识形态](https://img1.tucang.cc/api/image/show/f5d53bee43913b14f76313138bd85699)
<p style="text-align: center;" id="8values_redirect" class="fake_a">来自 8values，点击此处亲自测试。</p>

---

# 更新日志

#### V 2.4.0   2025年4月19日
1. 重构内容存储结构，弃用繁琐的 "JSON5" 格式，现在参数存储在 info.json 中，文章以 Markdown 文件存储，并在请求时自动解析为 HTML；
2. 为所有可能的文章添加 Markdown 格式下载链接；
3. 为《解放恋爱论》添加德语翻译；
4. 重构下载链接生成逻辑和交互元素添加器（事件监听器添加器）逻辑；
5. 重新设计 404 页面；
6. 修复左上角搜索栏溢出容器的错误；
7. 轻微调整模糊效果的不透明度；
8. 采用有序列表的动态左内边距和文章卡片的动态缩放，提升小屏幕用户的可读性；
9. 调整导航面板中单选分类按钮的选中颜色，使其更明显。

#### V 2.3.2   2025年4月17日
1. 修复网站缺少 404 页面时崩溃的问题；
2. 修复深色模式下搜索框提示文字仍为黑色的问题；
3. 现可根据 Cookies 和用户系统设置自动切换深浅模式。

#### V 2.3.1   2025年4月15日
1. 修复当用户在地址栏输入除 "en" 、"zh-Hans" 和 "de" 外其他语言时网站崩溃的问题；
2. 移除文章URL中繁琐的语言标识段，现根据 Cookies 和用户默认语言自动判断显示语言；
3. 将 "桌面评分" 工具的样式与网站主题统一；
4. 修复 iframe 页面无法根据主站设置切换深色模式的问题；
5. 修复切换深浅模式时演示框文本 (如《词根大典》中) 颜色突变的问题。

#### V 2.3.0   2025年4月12日
1. 将所有文章移至 "文章" 分类，新建 "工具" 分类并将 "8values" 移至该分类；
2. 在 "学习" 子分类新增《The Importance of Being Earnest 的赛博海报》文章；
3. 为《The Importance of Being Earnest 的赛博海报》实施响应式设计；
4. 将网站标题更改为 "Hēsperus 的庇护所"；
5. 美化无序列表样式；
6. 优化文章请求处理逻辑；
7. 为文章卡片添加悬停放大效果；
8. 新增 "桌椅评分" 工具；
9. 通过添加横向滚动条修复面包屑导航在宽度过大时扭曲截断的问题；
10. 修复 Safari 中内容滚动条边距宽度错误的问题；
11. 修复《8values》中滚动条不显示的问题。

#### V 2.2.0   2025年4月6日
1. 为文章添加细滚动条；
2. 移除悬浮标题栏(因 Safari 不兼容)，改为固定定位标题栏；
3. 为小屏幕用户创建更紧凑的布局；
4. 将 GitHub 徽章移至左下角防止遮挡标题栏或滚动条；
5. 在标题栏添加《解放恋爱论》下载链接；
6. 修复 Safari 浏览器中下载图标未右对齐的问题；
7. 实施少量搜索引擎优化。

#### V 2.1.4   2025年4月5日
1. 为原创文章添加版权声明；
2. 重构 "首页" 界面设计；
3. 在 "人文" 分类新增《解放恋爱论》文章；
4. 通过为高频调用函数添加节流阀大幅优化性能；
5. 适当缩小字号并增大段落间距以提升阅读舒适度；
6. 修复弹窗菜单中音乐播放控制按钮未居中的问题；
7. 修复跳转至首页后 URL 仍显示前页地址的问题。

#### V 2.1.3   2025年4月1日
1. 为音乐播放器新增歌曲《Una Mattina》；
2. 为音乐播放器添加“上一首”按钮；
3. 重写“主页”和“关于”页面的描述文案；
4. 优化每篇文章描述的选择逻辑。

#### V 2.1.2   2025年3月30日
1. 修复中央搜索框边框颜色不一致的问题；
2. 修复 "设置" 弹窗中音乐封面在播放时无法旋转的问题；
3. 修复主界面 "设置" 和 "音乐封面" 图标下方多余阴影的问题；
4. 修复内容区域与标题栏 1 像素高度错位的问题；
5. 修复切换新页面时标题栏在先前隐藏状态下残留显示的问题；
6. 修复搜索页和 404 页标题栏失效的问题；
7. 修复 404 页面未居中对齐的问题；
8. 修正一些细微的拼写错误；
9. 通过以下改进大幅提升《8alues》用户体验：
    - “八项价值观”板块的响应式设计；
    - “八项价值观”板块箭头的浅色/深色模式适配；
    - 移除八项价值观图标的多余阴影；
    - 新增多个遗漏的阴影颜色平滑过渡效果；
    - 修复结果页四条轴系颜色填充失效的问题；
    - 为结果页添加底部留白；
    - 结果图片采用更大圆角半径；
    - 新增两种意识形态："主体/斯巴达主义" 和 "温和左派"；
    - 优化部分题目判定值以更客观。

#### V 2.1.1   2025年3月29日
1. 标题栏现在是浮动的，仅在内容页面的顶部或底部出现；
2. 提升部分图片的分辨率；
3. 调整中央搜索栏的圆角半径；
4. 修复长达千年的网页布局适配不同屏幕尺寸的失败问题；
5. 优化 “8values” 的视觉效果和中文翻译；
6. 修复中央搜索栏边框厚度不一致的错误。

#### V 2.1.0   2025年3月27日
1. 将所有图片从一个使用非法 Cookies 的不良图片托管服务转移到更稳定、更快和更安全的服务中；
2. 将所有错误的 "zh_Hans" 更正为 "zh-Hans"；
3. 提高部分图片的分辨率；
4. 更改 "人文" 的封面；
5. 修复图标和音乐封面下的阴影错误；
6. 修复《8values》测验页面未覆盖整个内容区域宽度的错误。

#### V 2.0.1   2025年3月24日
1. 调整模糊效果，以提高视觉可读性；
2. 调整欢迎页标语和 “继续” 按钮的自适应比例；
3. 提升一张背景图片的分辨率；
4. 限制内容横条的最大宽度，以确保视觉舒适度；
5. 优化 Safari 浏览器的显示效果；
6. 修复最小化侧边导航栏恢复时的宽度错误问题。

#### V 2.0.0   2025年3月23日
1. 彻底重构用户界面，应用模糊效果；
2. 原先仅出现在欢迎页的图片现在将应用于整个网站，每次访问时随机选择一张作为背景；
3. 网站加载时将显示 Hēsperus 徽章，以弥补空白屏幕的单调；
4. 优化文章《8values》的用户体验；
5. GitHub 角标、欢迎页标语和“继续”指示器现在能够根据屏幕宽度自适应缩放；
6. 为音乐播放器新增歌曲《Merry Christmas, Mr. Lawrence》；
7. 调整全局圆角半径；
8. 将部分图片迁移至更稳定且更快速的图床服务。
9. 在“关于”中新增部分 —— 更新日志。

<p style="text-align: right;">版权 ©️ Hēsperus</p>