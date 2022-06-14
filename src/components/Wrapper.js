import { Grid } from '@mui/material';
import { useState } from 'react';
import Display from './Display';
import Num from './Num';
import Operator from './Operators';

const Wrapper = () => {
	const [ display, setDisplay ] = useState('0');

	return (
		<Grid
			height="100%"
			width="100%"
			container
			spacing={1}
			sx={{
				margin: '0'
			}}
		>
			<Display display={display} />
			<Operator op="C" cols="2" type="clear" color="secondaryDark" setDisplay={setDisplay} display={display} />
			<Operator op="/" type="divide" setDisplay={setDisplay} display={display} />
			<Operator op="*" type="multiply" setDisplay={setDisplay} display={display} />

			<Num val="7" number="seven" setDisplay={setDisplay} display={display} />
			<Num val="8" number="eight" setDisplay={setDisplay} display={display} />
			<Num val="9" number="nine" setDisplay={setDisplay} display={display} />
			<Operator op="-" type="subtract" setDisplay={setDisplay} display={display} />

			<Num val="4" number="four" setDisplay={setDisplay} display={display} />
			<Num val="5" number="five" setDisplay={setDisplay} display={display} />
			<Num val="6" number="six" setDisplay={setDisplay} display={display} />
			<Operator op="+" type="add" setDisplay={setDisplay} display={display} />

			<Num val="1" number="one" setDisplay={setDisplay} display={display} />
			<Num val="2" number="two" setDisplay={setDisplay} display={display} />
			<Num val="3" number="three" setDisplay={setDisplay} display={display} />
			<Operator op="." type="decimal" setDisplay={setDisplay} display={display} />

			<Num val="0" number="zero" cols="2" color="secondaryDark" setDisplay={setDisplay} display={display} />
			<Operator op="=" cols="2" type="equals" color="secondaryDark" setDisplay={setDisplay} display={display} />
		</Grid>
	);
};

export default Wrapper;
