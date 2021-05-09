import Card from './Card.jsx';
import React, { useState, useEffect } from 'react';

export default function Leaderboard() {
	const [data, setData] = useState([0]);

	console.log(window.location)
	useEffect(() => {
		fetch(`http://localhost:5000/favfoods`)
			.then(res => res.json())
			.then(res => setData(res))
	}, [])

	return (
		<div className="area">
			{data.map(({ name, food, date, image_url }, idx) => {
				return <Card name={name} food={food} date={date} url={image_url} key={idx} />
			})}
		</div>
	)
}