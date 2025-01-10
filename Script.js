function toggle() {;
    if (this.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
}

function default_LightDark() {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const dn = document.getElementById("dn");
    if (currentTheme.matches) {
        dn.checked = true;
        document.body.classList.add('dark');
    }
    dn.addEventListener('change', toggle);
}

window.addEventListener('DOMContentLoaded', default_LightDark);