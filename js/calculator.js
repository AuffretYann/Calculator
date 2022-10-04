// DOM
const keys = [...document.querySelectorAll('.button')];
const listeKeycode = keys.map(key => key.dataset.key);
const screen = document.querySelector('.screen')

document.addEventListener('keydown', (e) => {
	const value = e.keyCode.toString();
	calculate(value)

})

document.addEventListener('click', (e) => {
	const value = e.target.dataset.key;
	calculate(value)

})

const calculate = (value) => {
	if (listeKeycode.includes(value)){
		switch(value) {
			case '8':
				screen.textContent = "";
				break;
			case '13':
				const calcul = eval(screen.textContent);
				screen.textContent = calcul;
				break;
			default:
			const indeKeycode = listeKeycode.indexOf (value);
			const key = keys[indeKeycode];
			screen.textContent += key.innerHTML
		}
	}
}

window.addEventListener('error', (e) => {
	alert ('Tu as un erreur de calcul andouille')
})