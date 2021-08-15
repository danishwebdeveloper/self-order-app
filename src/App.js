import { Container, createTheme, CssBaseline, Paper, ThemeProvider } from '@material-ui/core';
import HomeScreen from './Screens/HomeScreen';


const theme = createTheme({
    typography: {
        h1: {
            fontWeight: 'bold'
        },
        h2: {
            fontSize: '2rem',
            color: 'black'
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: 'white'
        }
    },
    palettes: {
        primary: { main: '#ff1744' }
    }
})

function App() {
    return ( <
        ThemeProvider theme = { theme } >
        <
        CssBaseline / >
        <
        Container maxWidth = "sm" >
        <
        Paper >
        <
        HomeScreen > < /HomeScreen> <
        /Paper> <
        /Container> <
        /ThemeProvider>
    );
}
export default App;