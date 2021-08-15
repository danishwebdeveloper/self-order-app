import { Box, Card, CardActionArea, CardContent, CardMedia, Fade, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { setOrderType } from '../actions';
import { Logo } from '../Components/Logo'
import { Store } from '../Store';
import { useStyles } from '../styles'

export default function ChooseScreen(props) {
    const styles = useStyles();
    const { dispatch } = useContext(Store);

    const chooseHandler = (orderType) => {
        setOrderType(dispatch, orderType);
        props.history.push('/order');
    };


    return ( <
        Box className = {
            [styles.root, styles.navy] } >
        <
        Box className = {
            [styles.main, styles.center] } >
        <
        Logo large > < /Logo> <
        Typography component = "h3"
        variant = "h3"
        className = {
            [styles.center] }
        gutterBottom >
        where you will be eating today ?
        <
        /Typography> <
        Box className = {
            [styles.cards] } >
        <
        Card className = {
            [styles.card, styles.space] } >
        <
        CardActionArea onClick = {
            () => chooseHandler('Eat in') } >
        <
        CardMedia component = "img"
        alt = "Eating"
        image = "/images/eatin.png"
        className = { styles.media }
        /> <
        CardContent >
        <
        Typography gutterBottom variant = "h4"
        color = "textPrimary"
        component = "p" >
        Eat In <
        /Typography> <
        /CardContent> <
        /CardActionArea> <
        /Card>

        <
        Card className = {
            [styles.card, styles.space] } >
        <
        CardActionArea onClick = {
            () => chooseHandler('Take Out') } >
        <
        CardMedia component = "img"
        alt = "Eating"
        image = "/images/takeout.png"
        className = { styles.media }
        /> <
        CardContent >
        <
        Typography gutterBottom variant = "h4"
        color = "textPrimary"
        component = "p" >
        Take Out <
        /Typography> <
        /CardContent> <
        /CardActionArea> <
        /Card>

        <
        /Box> <
        /Box> <
        /Box>

    )
}