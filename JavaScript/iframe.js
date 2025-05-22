function check_dark() {
    if (parent.document.body.classList.contains('dark')) {
        document.body.classList.add('non_transition');
        document.body.classList.add("dark");
        setTimeout(() => document.body.classList.remove('non_transition'), 10);
    }
}

function initialize() { check_dark() }

initialize();