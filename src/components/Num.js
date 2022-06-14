import { Grid, Button, Typography } from '@mui/material';
import { useEffect } from 'react';

const Num = ({ val, cols = 1, number, color = 'secondary', updateDisplay, handleKeyDown }) => {
	useEffect(
		() => {
			const f = e => {
				handleKeyDown(e, val);
			};
			document.addEventListener('keydown', f);
			return () => {
				document.removeEventListener('keydown', f);
			};
		},
		[ handleKeyDown, val ]
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
				onClick={() => updateDisplay(val)}
			>
				<Typography variant="h4" component="p" color="text.primary">
					{val}
				</Typography>
			</Button>
		</Grid>
	);
};

export default Num;
