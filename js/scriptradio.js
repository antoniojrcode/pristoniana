var audio = document.getElementById('player')

function play() {
  audio.play();
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
}

function aumentar_volume() {
  if(audio.volume < 1) {
    audio.volume += 0.1;
  }
}

function diminuir_volume() {
  if(audio.volume > 0) {
    audio.volume -= 0.1;
  }
}