function check_dark() {
    if (parent.document.body.classList.contains('dark')) {
        document.body.classList.add('non_transition');
        document.body.classList.add("dark");
        setTimeout(() => document.body.classList.remove('non_transition'), 10);
    }
}

function initialize() {
    window.parent.toggleFooterBlur(this.scrollTop, this.clientHeight, this.scrollHeight);
    check_dark();
    let scrollSubject = document.getElementById('scrollSubject');
    if (scrollSubject === null) scrollSubject  = document.body;
    scrollSubject.addEventListener('scroll', function() { window.parent.toggleFooterBlur(this.scrollTop, this.clientHeight, this.scrollHeight) });
}

initialize();