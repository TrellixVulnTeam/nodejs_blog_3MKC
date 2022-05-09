const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');

const port = 3000;



// connect databases
const db = require('./config/db');
db.connect();

//link public
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


// route
const route = require('./routes/index');
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})