require('dotenv').config();
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const express = require('express');
//uninstal pupeteer
const cors = require('cors');
const app = express();


/////////////// mongo
const { MongoClient } = require('mongodb');

let favfoods;
(async () => {
	const client = await MongoClient.connect(process.env.MONGO_URI, {
		useUnifiedTopology: true
	});


	const db = client.db('docker-demo');
	favfoods = db.collection('favfoods');
	console.log(`Connected successfully to ${favfoods.s.namespace.collection}`)
})();


//////////////  express
app.use(cors());
app.use(express.json());


async function getUrl(food = 'test image') {
	const html = await fetch(`https://www.google.com/search?tbm=isch&q=${food}`).then(res => res.text());

	const images = cheerio.load(html)('img').slice(1);

	let src;
	do {
		src = images[Math.floor(Math.random() * images.length)].attribs.src;
	} while (!src)
	return src;
}




app.get('/', async (req, res) => {
	res.send('Running!')
})
app.post('/favfood', async (req, res) => {
	favfoods.insertOne({
		name: req.body.name,
		food: req.body.food,
		date: new Date(),
		image_url: await getUrl(req.body.food),
	})
		.then(dbres => res.sendStatus(200))
		.catch(err => res.sendStatus(400))
})
app.get('/favfoods', async (req, res) => {
	favfoods.find().toArray()
		.then(dbres => res.json(dbres))
		.catch(err => res.sendStatus(400))
})

app.listen(process.env.PORT, () => {
	console.log(`Listening on http://localhost:${process.env.PORT}`)
})

