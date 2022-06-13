import { Grid, Typography, Button } from '@mui/material';
import { useCallback, useEffect } from 'react';

const Operator = ({ op, type, cols = 1, color = 'primary', display, setDisplay }) => {
	const updateDisplay = useCallback(
		() => {
			if (op === '.') {
				if (/[[0-9]*\.[0-9]*$/.test(display)) {
					console.log("can't have two decimals in a single number");
					return;
				} else if (display === '0000') {
					setDisplay('0' + op);
				} else if (/\s$/.test(display)) {
					setDisplay(display + ' 0' + op);
				} else setDisplay(display + op);
			} else if (display === '0000') {
				console.log("can't put an operator before any numbers");
				return;
			} else if (/[-+/*\.]$/.test(display) && op !== '.') {
				console.log("can't add more than one operator");
				return;
			} else if (op === '=') {
				return;
			} else if (op.toLowerCase() === 'c') {
				setDisplay('0000');
			} else setDisplay(display + ' ' + op + ' ');
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
