import { Container, createTheme, CssBaseline, Paper, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import Choosescreen from './screens/Choosescreen';
import HomeScreen from './screens/HomeScreen';
import Orderscreen from './screens/Orderscreen';


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
        BrowserRouter >
        <
        ThemeProvider theme = { theme } >
        <
        CssBaseline / >
        <
        Container maxWidth = "sm" >
        <
        Paper >
        <
        Route path = "/"
        component = { HomeScreen }
        exact = { true }
        /> <
        Route path = "/choose"
        component = { Choosescreen }
        /> <
        Route path = "/order"
        component = { Orderscreen }
        /> <
        /Paper> <
        /Container> <
        /ThemeProvider> <
        /BrowserRouter>  
    );
}
export default App;