import React, { useEffect, useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data, country, showBarChart }) => {
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
                    label: 'Confirmed',
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
                        labels: ['Confirmed', 'Recovered', 'Deaths'],
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

    const doughnutChart = (
        data ? (
            <Doughnut
                data={{
                    labels: ['Confirmed', 'Recovered', 'Deaths'],
                    datasets: [{
                        backgroundColor: ['#438DB6', '#C2DDD0', '#E77158'],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                        hoverBackgroundColor: ['#3B8BCC', '#C5E8D7', '#F56F53'],
                        hoverBorderColor: ['#4EA4D4', '#C2DDD0', '#E77158']
                    }]
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {country ? (showBarChart ? barChart : doughnutChart) : lineChart}
        </div>
    );
};

export default Chart;