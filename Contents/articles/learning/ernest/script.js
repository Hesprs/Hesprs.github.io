const audio = document.getElementById('audio');
const dial = document.getElementById('dial');
const hand = document.getElementById('hand');
const hand2 = document.getElementById('hand2');
const back = document.getElementById('back');
const html = document.documentElement;
let isPlaying = false;
let show = false;

document.body.addEventListener('click', function() {
  if (!show) {
    show = true;
    document.body.classList.add('slide');
    if (!isPlaying) {
      hand.style.animationPlayState = 'running';
      hand2.style.animationPlayState = 'running';
      isPlaying = true;
      audio.play();
    }
  }
});

back.addEventListener('click', function() {
  document.body.classList.remove('slide');
  setTimeout( () => show = false, 10);
})

audio.addEventListener('ended', function() {
  audio.currentTime = 0;
  audio.play();
});

dial.addEventListener('click', function() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    hand.style.animationPlayState = 'paused';
    hand2.style.animationPlayState = 'paused';
  } else {
    audio.play();
    isPlaying = true;
    hand.style.animationPlayState = 'running';
    hand2.style.animationPlayState = 'running';
  }
});