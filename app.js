const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config')
const DB = require('./utils/_db');

const _db = new DB();
_db.getDB();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

require('./routes')(app);

app.listen(PORT,() => {
    console.log(`server is running in port ${PORT}`);
})

module.exports = app;