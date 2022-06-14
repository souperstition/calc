import { Grid, Typography, Button } from '@mui/material';
import { useCallback, useEffect } from 'react';

const Operator = ({ op, type, cols = 1, color = 'primary', display, setDisplay }) => {
	const updateDisplay = useCallback(
		() => {
			// decimal
			if (op === '.') {
				if (/[[0-9]*\.[0-9]*$/.test(display)) {
					// can't have two decimals in a single number
					return;
				} else if (display === '0') {
					setDisplay(display + op);
				} else if (/\s$/.test(display)) {
					setDisplay(`${display} 0${op}`);
				} else setDisplay(display + op);
			} else if (display === '0') {
				// empty display
				if (op === '-') {
					setDisplay(op);
				} else {
					// can't put an operator before any numbers
					return;
				}
			} else if (op.toLowerCase() === 'c') {
				// clear
				setDisplay('0');
			} else if (op === '=') {
				// CALCULATE RESULTS
				return;
			} else if (/([/*+-]+\s)$/.test(display)) {
				// if the last item is an operator and another operator is pressed, replace that operator with the new one
				setDisplay(display.replace(/([/*+-]+\s)$/, `${op} `));
			} else if (/\.$/.test(display)) {
				// if the last item is a decimal and an operator is pressed, replace the decimal
				setDisplay(display.replace(/\.$/, ` ${op} `));
			} else setDisplay(`${display} ${op} `);
		},
		[ display, setDisplay, op ]
	);

	const handleKeyDown = useCallback(
		e => {
			if (e.key === op.toLowerCase()) {
				updateDisplay();
			}
		},
		[ updateDisplay, op ]
	);

	useEffect(
		() => {
			const f = e => {
				handleKeyDown(e);
			};
			document.addEventListener('keydown', f);
			return () => {
				document.removeEventListener('keydown', f);
			};
		},
		[ handleKeyDown ]
	);

	return (
		<Grid item xs={3 * cols}>
			<Button
				id={type}
				variant="contained"
				sx={{
					width: '100%',
					height: '100%'
				}}
				color={color}
				onClick={updateDisplay}
			>
				<Typography variant="h4" component="p" color="text.primary">
					{op}
				</Typography>
			</Button>
		</Grid>
	);
};

export default Operator;
