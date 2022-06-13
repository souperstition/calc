import { Grid, Typography } from '@mui/material';

const Display = ({ display }) => {
	return (
		<Grid item xs={12} container alignItems="center" justifyContent="flex-end">
			<Typography id="display" variant="h1" component="h2">
				{display}
			</Typography>
		</Grid>
	);
};

export default Display;
