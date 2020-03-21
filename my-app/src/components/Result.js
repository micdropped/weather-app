import React from 'react';
import './Result.css';

const Result = props => {
	const { date, city, timezone, sunrise, sunset, temp, pressure, wind, err, } = props.weather;

	let content = null;

	if (!err && city) {
		const cityName = city.charAt(0).toUpperCase() + city.slice(1);;
		const sunriseTime = new Date(
			(sunrise + timezone - 3600) * 1000).toLocaleTimeString();
		const sunsetTime = new Date(
			(sunset + timezone - 3600) * 1000).toLocaleTimeString();

		content = (
			<>
				<h3>Pogoda dla miasta: <em>{cityName}</em></h3>
				<h4>Aktualna dat i godzina: <em>{date}</em></h4>
				<h4>Aktualna temperatura: <em>{temp}</em> &deg;C</h4>
				<h4>Aktualne ciśnienie: <em>{pressure}</em> hPa</h4>
				<h4>Aktualna siła wiatru: <em>{wind}</em> m/s</h4>
				<h4>Wschód słońca: <em>{sunriseTime}</em></h4>
				<h4>Zachód słońca: <em>{sunsetTime}</em></h4>
			</>
		)
	}

	return (
		<div className='result'>
			{err ? `${city} nie występuje w bazie` : content}
		</div>
	);
}

export default Result;