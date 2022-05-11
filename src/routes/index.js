const newRouter = require('./news');
const siteRouter = require('./sites');
const apiRouter = require('./api');

function route(app) {


    app.use('/news', newRouter);

    app.use('/api', apiRouter);

    app.use('/', siteRouter);

}


module.exports = route;