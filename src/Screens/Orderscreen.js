import { Avatar, Box, Grid, List, ListItem, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { Fragment, useContext, useEffect } from 'react'
import { listCatergories } from '../actions';
import { Logo } from '../Components/Logo';
import { Store } from '../Store';
import { useStyles } from '../styles'

export default function Orderscreen() {
    const styles = useStyles();

    // Loading of list categories
    const { state, dispatch } = useContext(Store);
    const { categories, loading, error } = state.categoryList;
    useEffect(() => {
        listCatergories(dispatch);
    }, [dispatch]);

    return ( <
        Box classname = { styles.root } >
        <
        Box classname = { styles.main } >
        <
        Grid container >
        <
        Grid item md = { 2 } >
        <
        List > {
            loading ? ( <
                CircularProgress / >
            ) : error ? ( <
                    Alert severity = "error" > { error } < /Alert>
                ) :
                ( <
                    Fragment >


                    <
                    ListItem button >
                    <
                    Logo >

                    <
                    /Logo> <
                    /ListItem> {
                        categories.map((category) => ( <
                            ListItem button key = { category.name } >
                            <
                            Avatar src = { category.image }
                            alt = { category.name }
                            /> <
                            /ListItem>
                        ))
                    } <
                    /Fragment>
                )
        } <
        /List> <
        /Grid> <
        Grid item md = { 10 } >
        Food List <
        /Grid> <
        /Grid> <
        /Box> <
        /Box>
    )
}