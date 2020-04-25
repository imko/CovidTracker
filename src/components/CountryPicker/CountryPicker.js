import React, { useEffect, useState } from 'react';
import { BarChartRounded, DonutLargeRounded } from '@material-ui/icons';
import { FormControl, Select, Button, Grid } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ country, handleCountryOnChange, showBarChart, handleToggleChartOnChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetchCountries();
            setCountries(res);
        })();
    }, []);

    return (
        <Grid container direction="column" alignItems="center" justify="center">
            <Grid item>
                <FormControl variant="outlined">
                    <Select native onChange={event => handleCountryOnChange(event.target.value)}>
                        <option value="">Global</option>
                        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                {country
                    ? (<Button
                        variant="contained outlined"
                        color="primary"
                        className={styles.toggleButton}
                        startIcon={showBarChart ? <DonutLargeRounded fontSize="large" /> : <BarChartRounded fontSize="large" />}
                        onClick={handleToggleChartOnChange}
                    >
                        {showBarChart ? 'Donut Chart' : 'Bar Chart'}
                    </Button>)
                    : null
                }
            </Grid>
        </Grid>
    );
};

export default CountryPicker;