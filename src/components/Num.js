import { Grid, Button, Typography } from '@mui/material';
import { useCallback, useEffect } from 'react';

const Num = ({ val, cols = 1, number, color = 'secondary', display, setDisplay }) => {
	const updateDisplay = useCallback(
		() => {
			if (display === '0') {
				if (val === '0') {
					return;
				} else {
					setDisplay(val);
				}
			} else setDisplay(display + val);
		},
		[ display, setDisplay, val ]
	);

	const handleKeyDown = useCallback(
		e => {
			if (e.key === val) {
				updateDisplay();
			}
		},
		[ updateDisplay, val ]
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
				id={number}
				variant="contained"
				sx={{
					width: '100%',
					height: '100%'
				}}
				color={color}
				onClick={updateDisplay}
			>
				<Typography variant="h4" component="p" color="text.primary">
					{val}
				</Typography>
			</Button>
		</Grid>
	);
};

export default Num;
