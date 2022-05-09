const Cource = require("../models/cources");
const { mongooseToOJ } = require('../../util/mongoosedata');


class NewsController {

    index(req, res) {
        res.render('news')
    }

    show(req, res, next) {
        Cource.findOne({ slug: req.params.slug })
            .then(cources => {
                res.render('news/shownews', {
                    cources: mongooseToOJ(cources)
                });
            })
            .catch(next)

    }
}

module.exports = new NewsController;