// create a server and route to handle the client get request by sending back
// data on the requested animal in db.js
const db = require('./db/db');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


 let mom = undefined;