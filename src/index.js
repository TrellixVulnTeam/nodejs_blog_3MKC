const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const handlebars = require('express-handlebars')

const port = 3000

//link public
app.use(express.static(path.join(__dirname, 'public')))
// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname : '.hbs'
}
));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views')
)

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})