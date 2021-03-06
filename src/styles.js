import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({

    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    red: {
        background: '#ff2040',
        color: '#ffffff',
    },
    main: {
        flex: 1,
        overflow: 'auto',
        flexDirection: 'column',
        display: 'flex',
        color: '#ffffff'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    green: {
        background: '#00b020',
    },

    largelogo: {
        height: 100,
    },
    logo: {
        height: 50,
    },

    check: {
        height: '20px',
        margin: '15px',
        display: 'felx',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    navy: {
        background: '#003080'
    },
    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        margin: 10
    },
    space: {
        padding: 10
    },
    media: {
        width: 200
    }

}))