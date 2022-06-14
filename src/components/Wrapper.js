import { Grid } from '@mui/material';
import Display from './Display';
import Num from './Num';
import Operator from './Operators';
import useUpdateDisplay from '../utils/useUpdateDisplay';

const Wrapper = () => {
	const { display, updateDisplay, handleKeyDown } = useUpdateDisplay();

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
			<Operator
				op="C"
				cols="2"
				type="clear"
				color="secondaryDark"
				updateDisplay={updateDisplay}
				handleKeyDown={handleKeyDown}
			/>
			<Operator op="/" type="divide" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />
			<Operator op="*" type="multiply" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />

			<Num val="7" number="seven" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />
			<Num val="8" number="eight" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />
			<Num val="9" number="nine" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />
			<Operator op="-" type="subtract" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />

			<Num val="4" number="four" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />
			<Num val="5" number="five" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />
			<Num val="6" number="six" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />
			<Operator op="+" type="add" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />

			<Num val="1" number="one" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />
			<Num val="2" number="two" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />
			<Num val="3" number="three" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />
			<Operator op="." type="decimal" updateDisplay={updateDisplay} handleKeyDown={handleKeyDown} />

			<Num
				val="0"
				number="zero"
				cols="2"
				color="secondaryDark"
				updateDisplay={updateDisplay}
				handleKeyDown={handleKeyDown}
			/>
			<Operator
				op="="
				cols="2"
				type="equals"
				color="secondaryDark"
				updateDisplay={updateDisplay}
				handleKeyDown={handleKeyDown}
			/>
		</Grid>
	);
};

export default Wrapper;
