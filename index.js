require('dotenv').config(); // call .env

const express = require('express');
const app = express();
const router = require('./routes/web');
const engine = require('ejs-mate');
const port = process.env.PORT || 3000;
const base_url = `http://localhost:${port}`;

app.use(express.json()) // for get request.body with json
app.use(router) // use router
app.use(express.static('public')); // middleware for use folder "public"

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); // so you can render('index')

app.listen(port, () => console.log(`app listening on base_url ${base_url}`))
