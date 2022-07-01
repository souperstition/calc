import { useState } from 'react';

function useUpdateDisplay() {
	const [ display, setDisplay ] = useState('0');
	const [ isEvaluated, setIsEvaluated ] = useState(false);
	const vars = {
		isNumber: /[0-9]/,
		isOperator: /[-+/*]/,
		endSpace: /\s$/,
		endOperator: /([/*+-]+\s)$/,
		endDecimal: /\.$/,
		hasDecimal: /[[0-9]*\.[0-9]*$/,
		endMinus: /(\s?)+-(\s?)+$/,
		endMultipleOperators: /[^\d]*$/
	};

	const handleEvaluation = (val, result) => {
		setIsEvaluated(val);
		setDisplay(result);
	};

	const { isNumber, isOperator, endMinus, endOperator, endDecimal, hasDecimal, endMultipleOperators } = vars;

	const updateDisplay = input => {
		if (input.toLowerCase() === 'c') {
			handleEvaluation(false, '0');
		} else if (input === '=') {
			// eslint-disable-next-line
			handleEvaluation(true, eval(display));
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
			} else if (endMinus.test(display)) {
				if (input === '-') {
					return;
				} else if (isNumber.test(input)) {
					setDisplay(`${display} ${input}`);
				} else if (isOperator.test(input)) {
					setDisplay(display.replace(endMultipleOperators, ` ${input} `));
				}
			} else if (endOperator.test(display)) {
				if (input === '-') {
					setDisplay(`${display} ${input}`);
				} else if (isOperator.test(input)) {
					console.log(display.match(endOperator));
					setDisplay(display.replace(endMultipleOperators, ` ${input} `));
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
				} else if (isEvaluated) {
					handleEvaluation(false, `0${input}`);
				} else setDisplay(`${display}${input}`);
			} else if (isOperator.test(input)) {
				if (isEvaluated) {
					handleEvaluation(false, `${display} ${input}`);
				} else {
					setDisplay(`${display} ${input} `);
				}
			} else {
				if (isEvaluated) {
					handleEvaluation(false, `${input}`);
				} else {
					setDisplay(`${display}${input}`);
				}
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
