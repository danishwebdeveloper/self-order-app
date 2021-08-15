import React from 'react'
import { useStyles } from '../styles'


export function Logo() {
    const styles = useStyles();
    return ( <
        img src = "/images/logo.png"
        alt = "Logo"
        className = { styles.largelogo } >
        <
        /img>
    )
}