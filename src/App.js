import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

import styles from './App.module.css';
import covidImage from './images/covid-19.png';

const App = () => {
    const [data, setData] = useState(null);
    const [country, setCountry] = useState('');

    useEffect(() => {
        (async () => {
            const res = await fetchData();
            setData(res);
        })();
    }, []);

    const handleCountryOnChange = async country => {
        const res = await fetchData(country);
        setData(res);
        setCountry(country);
    };

    return (
        <div className={styles.container}>
            <img className={styles.image} src={covidImage} alt="COVID-19" />
            <Cards data={data}/>
            <CountryPicker handleCountryOnChange={handleCountryOnChange} />
            <Chart data={data} country={country} />
        </div>
    );
};

export default App;