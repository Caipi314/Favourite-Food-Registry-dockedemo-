import React from 'react';


export default function Card({ name, food, date, url }) {
	date = new Date(date).toLocaleString();
	return (
		<div className='card' >
			<div className='card-image'>
				<figure className="image is-4by3">
					<img src={url} alt='' />
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<p className="title is-4">{food}</p>
				</div>

				<div className="content">
					<b>{name}</b> loves <b>{food}</b>
					<br />
					<time dateTime="2016-1-1">{date}</time>
				</div>
			</div>
		</div >
	)
}