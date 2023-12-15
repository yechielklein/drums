const buttons = document.querySelectorAll('.drum');

document.addEventListener('keydown', event => {
	let audio;
	switch (event.key) {
		case 'w':
			audio = new Audio(`sounds/tom-1.mp3`);
			audio.play();
			break;
		case 'a':
			audio = new Audio(`sounds/tom-2.mp3`);
			audio.play();
			break;
		case 's':
			audio = new Audio(`sounds/tom-3.mp3`);
			audio.play();
			break;
		case 'd':
			audio = new Audio(`sounds/tom-4.mp3`);
			audio.play();
			break;
		case 'n':
		case 'j':
			audio = new Audio(`sounds/snare.mp3`);
			audio.play();
			break;
		case 'k':
			audio = new Audio(`sounds/crash.mp3`);
			audio.play();
			break;
		case 'l':
			audio = new Audio(`sounds/kick-bass.mp3`);
			audio.play();
			break;
		default:
			break;
	}
});

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function () {
		const { innerHTML } = this;

		let soundFile;
		switch (innerHTML) {
			case 'w':
				soundFile = 'tom-1';
				break;
			case 'a':
				soundFile = 'tom-2';
				break;
			case 's':
				soundFile = 'tom-3';
				break;
			case 'd':
				soundFile = 'tom-4';
				break;
			case 'j':
				soundFile = 'snare';
				break;
			case 'k':
				soundFile = 'crash';
				break;
			case 'l':
				soundFile = 'kick-bass';
				break;
			default:
				break;
		}

		const audio = new Audio(`sounds/${soundFile}.mp3`);
		audio.play();
	});
}