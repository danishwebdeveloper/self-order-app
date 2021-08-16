import React from 'react'
import { useStyles } from '../styles'


export function Logo(props) {
    const styles = useStyles();
    return ( <
        img src = "/images/logo.png"
        alt = "Logo"
        className = { props.large ? styles.largelogo : styles.logo } >
        <
        /img>
    )
}