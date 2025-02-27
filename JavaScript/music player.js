function loadSong(need_reload = true) {
    if (need_reload) {
        audio.src = music[songIndex].url;
    }
    music_title.innerText = music[songIndex].name;
    if (sidenav_fold_level !== 2) {
        music_cover.src = music[songIndex].img;
    }
    if (pop_up_index === 1) {
        pop_up_music_title.innerText = music[songIndex].name;
        pop_up_music_cover.src = music[songIndex].img_HD;
    }
}

function playSong() {
    if (!ever_played_music) {
        loadSong(false);
        music_cover.style.borderRadius = '50%';
        ever_played_music = true;
    }
    musicContainer.classList.add('playing');
    pop_up_content.classList.add('playing');
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('playing');
    pop_up_content.classList.remove('playing');
    audio.pause();
}

function nextSong() {
    if (!ever_played_music) {
        loadSong(false);
        music_cover.style.borderRadius = '50%';
        ever_played_music = true;
    } else {
        songIndex++;
        if (songIndex === music.length) {
            songIndex = 0;
        }
        loadSong();
    }
    if (isPlaying) {
        audio.play();
    }
    progress.style.width = '0px';
    if (pop_up_index === 1) {
        pop_up_progress.style.width = '0px';
    }
}

function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
    if (pop_up_index === 1) {
        pop_up_progress.style.width = `${progressPercent}%`;
    }
}

function setProgress(e) {
    if (!ever_played_music) {
        loadSong(false);
        music_cover.style.borderRadius = '50%';
        ever_played_music = true;
    }
    const width = this.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
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

function music_clicked() {
    let delay = 0;
    if (pop_up_index === 3) {
        delay = 200;
        pop_up.style.opacity = '0';
        second_pop_up = true;
    }
    pop_up_index = 1;
    setTimeout(() => {
        pop_up_title.innerHTML = translation.music_player[language];
        pop_up_content.innerHTML = `
            <img class='icon' alt='music-cover' src='https://pic1.imgdb.cn/item/67a2e294d0e0a243d4fbe0a8.png' id='pop_up_music_cover' style='border-radius: 10px; margin: auto auto 0px auto;'/>
	    	<div id='pop_up_music_title' class='center_text color' style='margin: 15px auto 0px auto; height: 30px; width: fit-content; font-size: 18px;'>${translation.music_player[language]}</div>
	    	<div class='progress_container' id='pop_up_progress_container' style = 'margin: 15px 0px 15px 0px; height: 4px; width: 100%;'>
	    		<div class='progress' id='pop_up_progress'></div>
	    	</div>
	    	<div style='display: flex; height: 40px; margin-bottom: auto; background-color: transparent;'>
	    	  	<button id='pop_up_play' class='action-btn' style='margin: 0px auto 0px auto;'>
	    			<img class='icon navi_ico opacity big' src='https://img.icons8.com/fluency-systems-filled/100/play.png' alt='play' id='pop_up_play_light'/>
	    			<img class='icon navi_ico opacity big' src='https://img.icons8.com/fluency-systems-filled/100/pause.png' alt='pause' id='pop_up_pause_light'/>
	    			<img class='icon navi_ico opacity big' src='https://img.icons8.com/?size=100&id=q0nxNdfpbYVl&format=png&color=FFFFFF' alt='pause' id='pop_up_pause_dark'/>
	    			<img class='icon navi_ico opacity big' src='https://img.icons8.com/?size=100&id=fjx0LfGCNuZb&format=png&color=FFFFFF' alt='play' id='pop_up_play_dark'/>
	    	  	</button>
	    	  	<button id='pop_up_next' class='action-btn' style='margin: 0px auto 0px auto;'>
	    			<img class='icon navi_ico opacity big' src='https://img.icons8.com/fluency-systems-filled/100/end.png' alt='next' style='right: 0px;' id='pop_up_next_light'/>
	    			<img class='icon navi_ico opacity big' src='https://img.icons8.com/?size=100&id=s1kxUJVDmJvK&format=png&color=FFFFFF' alt='next' style='right: 0px;' id='pop_up_next_dark'/>
	    	  	</button>
	    	</div>
        `;
        window.pop_up_playButton = document.getElementById('pop_up_play');
        window.pop_up_nextButton = document.getElementById('pop_up_next');
        window.pop_up_progress = document.getElementById('pop_up_progress');
        window.pop_up_progress_container = document.getElementById('pop_up_progress_container');
        window.pop_up_music_title = document.getElementById('pop_up_music_title');
        window.pop_up_music_cover = document.getElementById('pop_up_music_cover');
        window.pop_up_play_light = document.getElementById('pop_up_play_light');
        window.pop_up_play_dark = document.getElementById('pop_up_play_dark');
        window.pop_up_pause_light = document.getElementById('pop_up_pause_light');
        window.pop_up_pause_dark = document.getElementById('pop_up_pause_dark');
        window.pop_up_next_light = document.getElementById('pop_up_next_light');
        window.pop_up_next_dark = document.getElementById('pop_up_next_dark');
        pop_up_nextButton.addEventListener('click', nextSong);
        pop_up_playButton.addEventListener('click', plause);
        pop_up_progress_container.addEventListener('click', setProgress);
        if (ever_played_music) {
            updateProgress();
            pop_up_music_title.innerText = music[songIndex].name;
            pop_up_music_cover.src = music[songIndex].img_HD;
        }
        if (dn.checked) {
            pop_up_next_dark.classList.remove('opacity');
            if (isPlaying) {
                pop_up_pause_dark.classList.remove('opacity');
            } else {
                pop_up_play_dark.classList.remove('opacity');
            }
        } else {
            pop_up_next_light.classList.remove('opacity');
            if (isPlaying) {
                pop_up_pause_light.classList.remove('opacity');
            } else {
                pop_up_play_light.classList.remove('opacity');
            }
        }
        let proper = Math.min(pop_up_content.offsetWidth - 30, pop_up_content.offsetHeight - 150)
        pop_up_music_cover.style.width = `${proper}px`;
        pop_up_music_cover.style.height = `${proper}px`;
        if (delay === 200) {
            pop_up.style.opacity = '1';
        } else {
            show_pop_up();
        }
    }, delay);
}