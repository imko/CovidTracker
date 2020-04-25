import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker, Header } from './components';
import { fetchData } from './api';

import styles from './App.module.css';

const App = () => {
    const [data, setData] = useState(null);
    const [country, setCountry] = useState('');
    const [showBarChart, setShowBarChart] = useState(false);

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

    const handleToggleChartOnChange = () => setShowBarChart(!showBarChart);

    return (
        <div className={styles.container}>
            <Header/>
            <Cards data={data}/>
            <CountryPicker
                country={country}
                handleCountryOnChange={handleCountryOnChange}
                showBarChart={showBarChart}
                handleToggleChartOnChange={handleToggleChartOnChange}
            />
            <Chart
                data={data}
                country={country}
                showBarChart={showBarChart}
            />
        </div>
    );
};

export default App;