import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryOnChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetchCountries();
            setCountries(res);
        })();
    }, [countries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={event => handleCountryOnChange(event.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;