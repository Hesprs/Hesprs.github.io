class IconButton extends HTMLElement {
    constructor() { super() }
    connectedCallback() {
        const src = this.getAttribute('src');
        const redirect = this.getAttribute('redirect');
        const text = this.textContent;
        this.classList = 'demobox shadow color clickable border';   
        this.innerHTML = `
            <img loading="lazy" class="icon" src="${src}" alt="${text}">
	        <div class="center_text">${text}</div>
        `;
        if (redirect != undefined) this.addEventListener('click', function() { changePage(redirect) });        
    }
}

class ArticleCard extends HTMLElement {
    constructor() { super() }
    connectedCallback() {
        const index = this.textContent;
        const title = actual_language(articles[index].title);
        this.innerHTML = `
            <div class='flip_inner'>
                <div class='flip_front shadow border'>
                    <img loading='lazy' src='${articles[index].thumbnail}' alt='${title}' class='background_img' />
                    <div class='flip_button border shadow' value='${index}'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 64 64">
  <path d="M22 11c-2.947 0-5.647 1.51-7.045 3.94-.544.944-1.186 2.486-1.535 3.51-.32.875-5.209 11.815-8.215 18.503l.014.006A11.15 11.15 0 0 0 4 42c0 6.617 5.832 12 13 12s13-5.383 13-12v-3.674A6.8 6.8 0 0 1 32 38c.773 0 1.463.159 2 .326V42c0 6.617 5.832 12 13 12s13-5.383 13-12a11.15 11.15 0 0 0-1.219-5.041l.014-.006c-3.006-6.689-7.894-17.626-8.21-18.49-.353-1.035-.996-2.577-1.54-3.522C47.647 12.511 44.947 11 42 11c-4.305 0-7.817 3.206-7.984 7.205A10.4 10.4 0 0 0 32 18c-.728 0-1.404.084-2.016.205C29.817 14.206 26.304 11 22 11m0 4c2.206 0 4 1.57 4 3.5v14.861C23.662 31.285 20.493 30 17 30a13.9 13.9 0 0 0-4.664.813c2.283-5.106 4.64-10.402 4.863-11.055.33-.963.869-2.202 1.225-2.822C19.11 15.743 20.48 15 22 15m20 0c1.52 0 2.89.742 3.576 1.936.357.62.895 1.86 1.225 2.824.223.653 2.579 5.948 4.861 11.052A13.9 13.9 0 0 0 47 30c-3.493 0-6.662 1.285-9 3.361V18.5c0-1.93 1.794-3.5 4-3.5m-10 7c.773 0 1.463.159 2 .326v3.875A10.4 10.4 0 0 0 32 26a10.4 10.4 0 0 0-2 .201v-3.875A6.8 6.8 0 0 1 32 22m0 8c.773 0 1.463.159 2 .326v3.875A10.4 10.4 0 0 0 32 34a10.4 10.4 0 0 0-2 .201v-3.875A6.8 6.8 0 0 1 32 30m-15 4c4.963 0 9 3.589 9 8s-4.037 8-9 8-9-3.589-9-8 4.037-8 9-8m30 0c4.963 0 9 3.589 9 8s-4.037 8-9 8-9-3.589-9-8 4.037-8 9-8"/>
                        </svg>
                    </div>
                    <div class='overlay'>${title}</div>
                </div>
                <div class='flip_back shadow border'>
                    <div class='read_button border shadow'>🔮 ${translation.enter[language]}</div>
                    <div class='flip_button border shadow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 64 64">
                            <path d="M16 14a2 2 0 0 0-1.414 3.414L29.172 32 14.586 46.586a2 2 0 1 0 2.828 2.828L32 34.828l14.586 14.586a2 2 0 1 0 2.828-2.828L34.828 32l14.586-14.586a2 2 0 1 0-2.828-2.828L32 29.172 17.414 14.586A2 2 0 0 0 16 14"/>
                        </svg>
                    </div>
                    <div class='description_area'>
                        <div class='centerer'><p>⚡&nbsp;${translation.loading[language]}</p></div>
                    </div>
                </div>
            </div>
        `;
        this.getElementsByClassName('flip_front')[0].addEventListener('click', function() { changePage(index) });
        this.getElementsByClassName('read_button')[0].addEventListener('click', function() { changePage(index) });
        for (let i = 0; i < 2; i ++) {
            this.getElementsByClassName('flip_button')[i].addEventListener('mouseenter', function() { this.classList.add('hovered') });
            this.getElementsByClassName('flip_button')[i].addEventListener('mouseleave', function() { this.classList.remove('hovered') });
        }
        this.getElementsByClassName('flip_button')[0].addEventListener('click', async function(event) {
            event.stopPropagation();
            setTimeout(() => this.parentElement.parentElement.classList.add(this.parentElement.parentElement.classList.add('hide')), 50);
            this.parentElement.parentElement.classList.add('flip'); // prevent the bug on Safari
            if (this.parentElement.parentElement.getElementsByClassName('description')[0] == undefined) {
                let content = await fetch(`/Contents/${articles[index].address}/info.json`);
                content = await content.json();
                this.parentElement.parentElement.getElementsByClassName('description_area')[0].innerHTML = `<p class='description'>${actual_language(content.description)}</p>`;
            }
        });
        this.getElementsByClassName('flip_button')[1].addEventListener('click', function() {
            setTimeout(() => this.parentElement.parentElement.classList.add(this.parentElement.parentElement.classList.remove('hide')), 125); // prevent the bug on Safari
            this.parentElement.parentElement.classList.remove('flip',);
        });
    }
}

class DemoBox extends HTMLElement {
    constructor() { super() }
    connectedCallback() {
        const src = this.getAttribute('src');
        const alt = this.getAttribute('alt');
        const text = this.innerHTML;
        this.classList = 'demobox shadow color border';   
        this.innerHTML = `
            <img loading="lazy" class="icon" src="${src}" style="width: 40px; height: 40px;" alt="${alt}">
	        <div class="center_text">${text}</div>
        `;        
    }
}

customElements.define('icon-button', IconButton);
customElements.define('article-card', ArticleCard);
customElements.define('demo-box', DemoBox);