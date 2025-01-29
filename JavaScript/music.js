function loadSong(song) {
    title.innerText = song;
    audio.src = 'http://hb.frp.one:11111/music/' + song + '/track.mp3';
    cover_1.src = 'http://hb.frp.one:11111/music/' + song + '/100.png';;
}

function playSong() {
    cover_1.style.animationPlayState = 'running';
    if (!sidenav_minimal) {
        if (dn.checked) {
            play_dark.style.opacity = "0";
            pause_dark.style.opacity = "1";
        } else {
            play_light.style.opacity = "0";
            pause_light.style.opacity = "1";
        }
    }
    audio.play();
}

function pauseSong() {
    cover_1.style.animationPlayState = 'paused';
    if (!sidenav_minimal) {
        if (dn.checked) {
            play_dark.style.opacity = "1";
            pause_dark.style.opacity = "0";
        } else {
            play_light.style.opacity = "1";
            pause_light.style.opacity = "0";
        }
    }
    audio.pause();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
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