const buttons = document.querySelectorAll('.drum');

const makeSound = expression => {
	let audio;
	switch (expression) {
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
};

const animateButton = key => {
	const pressedButton  = document.querySelector(`.${key}`)
	pressedButton.classList.add('pressed');

	setTimeout(() => {
		pressedButton.classList.remove('pressed');
	}, 100);
};

document.addEventListener('keydown', event => {
	makeSound(event.key);
	animateButton(event.key)
});

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function () {
		makeSound(this.innerHTML);
		animateButton(this.innerHTML);
	});
}