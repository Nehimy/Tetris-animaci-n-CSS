//window.onclick = Sonido;
let sound = false
let audio 			= document.createElement('audio');

function Sonido(){
	if (sound) {
	  audio.pause()
	  document.getElementById('IconMusic1').src = "../icono/No_Music.svg"
	} else {
  	audio.loop 			= true;
		audio.volume 		= 0.3
		audio.autoplay 	= true;
		audio.src 			= "../Sonido/Tetris_Soundtrack.wav"
		audio.play()
		document.getElementById('IconMusic1').src = "../icono/Si_Music.svg"
	}
	sound = !sound
}


