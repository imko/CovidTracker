import React from 'react';
import CountUp from 'react-countup';
import cn from 'classnames';
import { Card, CardContent, Typography, Grid, CircularProgress } from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = ({ data }) => {
    if (!data) {
        return <CircularProgress />;
    }

    const { confirmed, deaths, recovered, lastUpdate } = data;

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className={cn(styles.card, styles.infected)} xs={12} md={3}>
                    <CardContent>
                        <Typography variant="overline" color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2} separator=',' />
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="caption">Number of confirmed cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cn(styles.card, styles.recovered)} xs={12} md={3}>
                    <CardContent>
                        <Typography variant="overline" color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="caption">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cn(styles.card, styles.deaths)} xs={12} md={3}>
                    <CardContent>
                        <Typography variant="overline" color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={3.5} separator=',' />
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="caption">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;