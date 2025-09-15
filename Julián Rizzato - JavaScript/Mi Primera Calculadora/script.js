const display = document.getElementById('display');
let current = '';
let operator = '';
let previous = '';
let resetNext = false;

function updateDisplay(value) {
	display.textContent = value;
}

document.querySelectorAll('.btn').forEach(btn => {
	btn.addEventListener('click', () => {
		const value = btn.getAttribute('data-value');

		if (btn.id === 'clear') {
			current = '';
			operator = '';
			previous = '';
			resetNext = false;
			updateDisplay('0');
			return;
		}

		if (btn.id === 'equals') {
			if (operator && previous !== '' && current !== '') {
				let result = '';
				try {
					result = eval(previous + operator + current);
				} catch {
					result = 'Error';
				}
				updateDisplay(result);
				current = result.toString();
				operator = '';
				previous = '';
				resetNext = true;
			}
			return;
		}

		if (btn.classList.contains('operator')) {
			if (current === '') return;
			if (operator && previous !== '' && current !== '') {
				previous = eval(previous + operator + current).toString();
				current = '';
			} else {
				previous = current;
				current = '';
			}
			operator = value;
			resetNext = false;
			updateDisplay(previous);
			return;
		}

		// Números y punto
		if (resetNext) {
			current = '';
			resetNext = false;
		}
		if (value === '.' && current.includes('.')) return;
		current += value;
		updateDisplay(current);
	});
});
