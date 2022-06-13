import { Grid, Button, Typography } from '@mui/material';

const Num = ({ val, cols = 1 }) => {
	return (
		<Grid item xs={3 * cols}>
			<Button
				variant="contained"
				sx={{
					width: '100%',
					height: '100%'
				}}
			>
				<Typography variant="h4" component="body1">
					{val}
				</Typography>
			</Button>
		</Grid>
	);
};

export default Num;
