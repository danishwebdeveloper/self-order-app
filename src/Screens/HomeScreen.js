import React from 'react'
import { Box, Card, CardActions, Typography } from '@material-ui/core'
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { useStyles } from '../styles';
import { Logo } from '../Components/Logo';

export default function HomeScreen() {
    const styles = useStyles();
    return ( <
        Card >
        <
        CardActions >
        <
        Box className = {
            [styles.root, styles.red] } >
        <
        Box className = {
            [styles.new, styles.check] } >
        <
        Typography component = "h3"
        variant = "h3" >
        Extra Blatt Order Application!
        <
        /Typography> <
        /Box> <
        Box className = {
            [styles.main, styles.center] } >
        <
        Typography component = "h3"
        variant = "h3" >
        Fast & Easy!
        <
        /Typography> <
        Typography component = "h4"
        variant = "h4" >
        Cash < br / > & pay < br / > Here <
        /Typography> <
        TouchAppIcon fontSize = "large" > < /TouchAppIcon> <
        /Box> <
        Box className = {
            [styles.center, styles.green] } >
        <
        Logo large >
        <
        /Logo> <
        Typography component = "h5"
        variant = "h5" >
        Touch To Start <
        /Typography> <
        /Box> <
        /Box> <
        /CardActions> <
        /Card>
    )
}