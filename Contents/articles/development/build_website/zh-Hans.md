## 💻 概述

博客用于**记录生活瞬间**并分享见解（主要是为了绕过社交媒体上的严格**内容审核**）。然而，对于初学者来说，设置博客涉及到购买服务器、购买域名、配置环境、注册证书，甚至向政府备案 —— 这可能极其麻烦。

我们将使用 🛠️ _GitHub_ ，全球最大的代码托管平台（如果你的网速足够好，则不需要 VPN）。那里有许多开源项目。现在 🧰 _微软_ 已经收购了 🛠️ _GitHub_ ，其稳定性得到了保证。

---

## 🧭 过程

### 1. 注册 GitHub

![注册](https://img1.tucang.cc/api/image/show/113010b318eeb9c8da6403e8c6dc3ce6)

在 [https://github.com](https://github.com/) 注册一个 GitHub 账户。输入用户名、电子邮件和密码，然后验证你的电子邮件地址。

### 2. 创建新仓库

![创建仓库](https://img1.tucang.cc/api/image/show/bbafb398935a68e8a91fc76d893b6884)

点击右上角的 **"+"** 按钮并选择 **"New Repository"** 来创建一个新的仓库。

### 3. 设置仓库名称

![命名仓库](https://img1.tucang.cc/api/image/show/ecf97aa545d470aa856933a79412151c)

在 **Repository name** 字段中，输入你的仓库名称为 **(你的 GitHub 用户名).github.io**（这将是你的域名）。保持其他选项默认不变，然后点击 **"Create Repository"** 。

### 4. 创建 Codespace

![启动代码空间](https://img1.tucang.cc/api/image/show/cd442448e9c358b3e6ffecfdfc68e97c)

进入仓库页面后，点击 **"Create a Codespace"** 并确认（此过程可能需要一些时间）。

### 5. 创建 HTML 文件

![index.html](https://img1.tucang.cc/api/image/show/86c757b84f344d2c8def335f9de13522)

在你的电脑上，请创建一个名为 **index.txt** 的新文本文件并在其中写入一些基本的 HTML 代码。然后保存文件并将扩展名重命名为 **.html** 。

### 6. 将文件上传到 GitHub

![拖放文件](https://img1.tucang.cc/api/image/show/912108582d6a5fce0b88db6f7cede887)

将你的 **index.html** 文件拖放到你的 GitHub 仓库网页中，然后点击底部的 **"Commit Changes"** 。

### 7. 启用 GitHub Pages

![启用GitHub页面](https://img1.tucang.cc/api/image/show/0a3d24dfa120ad0645e33bfcdb7395b8)

前往 **Settings - Pages** ，然后将 **branch** 选项从 **None** 更改为 **Main** 并点击 **"Save"** 。等待约一分钟进行部署。

### 8. 确认部署

![页面已构建](https://img1.tucang.cc/api/image/show/446ca4a5939cd1c8b29737334b043453)

刷新页面，你应该能看到成功通知。

### 9. 访问你的网站

![结果](https://img1.tucang.cc/api/image/show/8e94d942d48c21f7dff1ac37ec6c6dba)

打开浏览器并访问 **(你的 GitHub 用户名).github.io** —— 你的网站现已上线！恭喜你成功发布了第一个个人网站。

---

## 📖 结论

虽然 GitHub Pages 是免费的，但它确实有一些限制（通常足够）：

- **仓库大小:** 限制为1GB
- **单个文件上传限制:** 100MB
- **每月带宽限制:** 100GB

为了优化性能，强烈建议使用国内的**图床服务**存储图片。这样可以减少 🛠️ _GitHub_ 的负载，节省存储空间，并加快访问速度。

本教程仅触及了网站开发的皮毛。要实现更多自定义，你应该学习 _CSS_ 和 _JavaScript_ 。得益于 _大型语言模型（Large Language Models）_ 的迅速发展，无代码开发的未来前景非常光明。

<p style="text-align: right;">版权 ©️ Hēsperus</p>