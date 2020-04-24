import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data, country }) => {
    const [dailyData, setDailyDate] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetchDailyData();
            setDailyDate(data);
        })();
    }, []);

    const lineChart = (
        dailyData ?
        <Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    label: 'Infected',
                    data: dailyData.map(({ confirmed }) => confirmed),
                    borderColor: '#438DB6',
                    fill: true
                }, {
                    label: 'Deaths',
                    data: dailyData.map(({ deaths }) => deaths),
                    borderColor: 'red',
                    backgroundColor: '#E77158',
                    fill: true
                }]
            }}
        /> : null
    );

    const barChart = (
        data ?
            (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['#438DB6', '#C2DDD0', '#E77158'],
                            data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false},
                        title: { display: true, text:`Current state in ${country}`}
                    }}
                />
            ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
};

export default Chart;