import { Grid, Button } from '@mui/material';

const Num = ({ val }) => {
	return (
		<Grid item xs={3}>
			<Button
				variant="contained"
				sx={{
					width: '100%',
					height: '100%'
				}}
			>
				{val}
			</Button>
		</Grid>
	);
};

export default Num;
