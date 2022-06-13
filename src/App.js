import { Container } from '@mui/system';
import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme } from '@mui/material/styles';

import Wrapper from './components/Wrapper';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
	const theme = experimental_extendTheme({
		colorSchemes: {
			light: {
				palette: {
					primary: {
						main: '#E63946'
					},
					secondary: {
						main: '#457B9D'
					},
					secondaryLight: {
						main: '#A8DADC'
					},
					secondaryDark: {
						main: '#1D3557'
					},
					light: {
						main: '#F1FAEE'
					},
					text: {
						primary: '#F1FAEE'
					}
				}
			},
			dark: {
				palette: {
					primary: {
						main: '#E63946'
					},
					secondary: {
						main: '#457B9D'
					}
				}
			}
		}
	});

	return (
		<CssVarsProvider theme={theme}>
			<Container sx={{ height: '100vh', width: '100vw', padding: '1rem', bgcolor: '#cfe8fc' }} maxWidth={false}>
				<Wrapper />
			</Container>
		</CssVarsProvider>
	);
}

export default App;
