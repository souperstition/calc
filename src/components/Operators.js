import { useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';

const Operator = ({ op, type, cols = 1, color = 'primary', updateDisplay, handleKeyDown }) => {
	useEffect(
		() => {
			const f = e => {
				handleKeyDown(e, op.toLowerCase());
			};
			document.addEventListener('keydown', f);
			return () => {
				document.removeEventListener('keydown', f);
			};
		},
		[ handleKeyDown, op ]
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
				onClick={() => updateDisplay(op)}
			>
				<Typography variant="h4" component="p" color="text.primary">
					{op}
				</Typography>
			</Button>
		</Grid>
	);
};

export default Operator;
