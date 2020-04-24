import axios from 'axios';

const baseUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async country => {
    try {
        const { data } = await axios.get(country ? `${baseUrl}/countries/${country}` : baseUrl);

        return {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        };
    } catch (exception) {
        console.error(exception);
    }
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/daily`);

        return data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
    } catch (exception) {
        console.error(exception);
    }
};

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/countries`);

        return data.countries.map(country => country.name);
    } catch (exception) {
        console.error(exception);
    }
}