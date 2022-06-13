import { Grid } from '@mui/material';
import Display from './Display';
import Num from './Num';

const Wrapper = () => {
	return (
		<Grid height="100%" container spacing={1}>
			<Display />
			<Num val="7" />
			<Num val="8" />
			<Num val="9" />
			<Num val="--" />
			<Num val="4" />
			<Num val="5" />
			<Num val="6" />
			<Num val="--" />
			<Num val="1" />
			<Num val="2" />
			<Num val="3" />
			<Num val="--" />
			<Num val="0" cols="2" />
		</Grid>
	);
};

export default Wrapper;
