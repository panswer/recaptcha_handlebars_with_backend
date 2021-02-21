const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

/* 
    Configuration
*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const pathEnv = path.resolve(__dirname, '../.env');
if (fs.existsSync(pathEnv)) {
    dotenv.config({
        path: pathEnv
    });
}

const pathLayout = path.resolve(__dirname, '../views/layouts');
const pathPartial = path.resolve(__dirname, '../views');
app.engine('hbs', exphbs({
    layoutsDir: pathLayout,
    partialsDir: pathPartial,
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.use(require('./routes/index'));

const port = process.env.PORT || 3500;

app.listen(port, err => err ?
    console.log(err) :
    console.log('Success: ' + port));