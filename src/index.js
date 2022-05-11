const express = require('express');
const morgan = require('morgan');
var methodOverride = require('method-override');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');

const port = 3000;

//change method
app.use(methodOverride('_method'));

// show file json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// connect databases
const db = require('./config/db');
db.connect();

//link public
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sumstt: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


// route
const route = require('./routes/index');
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})