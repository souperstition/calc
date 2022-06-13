import { Container } from '@mui/system';
import Wrapper from './components/Wrapper';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
	return (
		<Container sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
			<Wrapper />
		</Container>
	);
}

export default App;
