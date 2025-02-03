function loadSong() {
    title.innerText = songs[songIndex];
    audio.src = surls[songIndex];
    cover_1.src = iurls[songIndex];
}

function playSong() {
    cover_1.style.animationPlayState = 'running';
    if (!sidenav_minimal && window.innerWidth >= 768) {
        if (dn.checked) {
            play_dark.classList.add('opacity');
            pause_dark.classList.remove('opacity');
        } else {
            play_light.classList.add('opacity');
            pause_light.classList.remove('opacity');
        }
    }
    audio.play();
}

function pauseSong() {
    cover_1.style.animationPlayState = 'paused';
    if (!sidenav_minimal && window.innerWidth >= 768) {
        if (dn.checked) {
            play_dark.classList.remove('opacity');
            pause_dark.classList.add('opacity');
        } else {
            play_light.classList.remove('opacity');
            pause_light.classList.add('opacity');
        }
    }
    audio.pause();
}

function nextSong() {
    songIndex++;
    if (songIndex === songs.length) {
        songIndex = 0;
    }
    loadSong();
    if (isPlaying) {
        audio.play();
    }
    progress.style.width = '0px';
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function plause() {
    if (isPlaying) {
        pauseSong();
        isPlaying = false;
    } else {
        playSong();
        isPlaying = true;
    }
}

function music_minimal() {
    musicContainer.style.height = '30px';
    icon_hide('play_dark');
    icon_hide('play_light');
    icon_hide('pause_light');
    icon_hide('pause_dark');
    icon_hide('next_light');
    icon_hide('next_dark');
    icon_hide('progress-container');
    hide('title');
    title.style.padding = '0px';
    setTimeout(() => {
        upper_music_navigation.style.height = '0px';
        bottom_music_navigation.style.height = '0px';
    }, 300)
    fade_in = setInterval(() => {
        cover_resize();
    }, 20);
    setTimeout(() => {
        clearInterval(fade_in);
    }, 300);
    musicContainer.addEventListener('click', plause);
    musicContainer.classList.add('expand');
    playButton.removeEventListener('click', plause);
}

function music_complete() {
    musicContainer.style.height = '80px';
    upper_music_navigation.style.height = '30px';
    bottom_music_navigation.style.height = '20px';
    progress_container.classList.remove('width', 'height', 'margin', 'opacity', 'pointer');
    show('title');
    title.style.padding = '0px 0px 0px 8px';
    progress_container.style.margin = 'auto 0px auto 0px';
    if (dn.checked) {
        next_light.classList.remove('width', 'height', 'margin', 'pointer');
        next_dark.classList.remove('width', 'height', 'margin', 'opacity', 'pointer');
        if (isPlaying) {
            play_dark.classList.remove('width', 'height', 'margin', 'pointer');
            pause_dark.classList.remove('width', 'height', 'margin', 'opacity', 'pointer');
            pause_light.classList.remove('width', 'height', 'margin', 'pointer');
            play_light.classList.remove('width', 'height', 'margin', 'pointer');
        } else {
            pause_dark.classList.remove('width', 'height', 'margin', 'pointer');
            pause_light.classList.remove('width', 'height', 'margin', 'pointer');
            play_dark.classList.remove('width', 'height', 'margin', 'opacity', 'pointer');
            play_light.classList.remove('width', 'height', 'margin', 'pointer');
        }
    } else {
        next_dark.classList.remove('width', 'height', 'margin', 'pointer');
        next_light.classList.remove('width', 'height', 'margin', 'opacity', 'pointer');
        if (isPlaying) {
            pause_light.classList.remove('width', 'height', 'margin', 'opacity', 'pointer');
            pause_dark.classList.remove('width', 'height', 'margin', 'pointer');
            play_dark.classList.remove('width', 'height', 'margin', 'pointer');
            play_light.classList.remove('width', 'height', 'margin', 'pointer');
        } else {
            play_light.classList.remove('width', 'height', 'margin', 'opacity', 'pointer');
            pause_dark.classList.remove('width', 'height', 'margin', 'pointer');
            play_dark.classList.remove('width', 'height', 'margin', 'pointer');
            pause_light.classList.remove('width', 'height', 'margin', 'pointer');
        }
    }
    musicContainer.removeEventListener('click', plause);
    musicContainer.classList.remove('expand');
    playButton.addEventListener('click', plause);
}