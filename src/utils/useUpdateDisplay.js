import { useState } from 'react';

function useUpdateDisplay() {
	const [ display, setDisplay ] = useState('0');
	const [ result, setResult ] = useState('0');

	const regex = {
		isNumber: /[0-9]/,
		isOperator: /[-+/*]/,
		endSpace: /\s$/,
		endOperator: /([/*+-]+\s)$/,
		endDecimal: /\.$/,
		hasDecimal: /[[0-9]*\.[0-9]*$/
	};

	const { isNumber, isOperator, endOperator, endDecimal, hasDecimal } = regex;

	const updateDisplay = input => {
		if (input.toLowerCase() === 'c') {
			setDisplay('0');
		} else if (input === '=') {
			setResult('5');
			setDisplay(result);
		} else {
			if (display === '0') {
				if (input === '.') {
					setDisplay(`0${input}`);
				} else if (input === '-') {
					setDisplay(input);
				} else if (input === '0') {
					return;
				} else if (isOperator.test(input)) {
					return;
				} else if (isNumber.test(input)) {
					setDisplay(input);
				}
			} else if (endOperator.test(display)) {
				if (isOperator.test(input)) {
					setDisplay(display.replace(endOperator, ` ${input} `));
				} else if (input === '.') {
					setDisplay(`${display} 0${input}`);
				} else {
					setDisplay(`${display}${input}`);
				}
			} else if (endDecimal.test(display)) {
				if (isOperator.test(input)) {
					setDisplay(display.replace(endDecimal, ` ${input} `));
				} else if (input === '.') {
					return;
				} else {
					setDisplay(`${display}${input}`);
				}
			} else if (input === '.') {
				if (hasDecimal.test(display)) {
					return;
				} else setDisplay(`${display}${input}`);
			} else if (isOperator.test(input)) {
				setDisplay(`${display} ${input} `);
			} else {
				setDisplay(`${display}${input}`);
			}
		}
	};

	const handleKeyDown = (e, input) => {
		if (e.key === input) {
			updateDisplay(input);
		}
	};

	return { display, updateDisplay, handleKeyDown };
}

export default useUpdateDisplay;
