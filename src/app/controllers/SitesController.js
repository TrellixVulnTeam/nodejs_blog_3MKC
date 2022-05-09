const Cource = require("../models/cources");
const { mutipleMongooseToOJ } = require('../../util/mongoosedata');

class SitesController {

    index(req, res, next) {
        // Cource.find({}, function(err, cources) {
        //     if (!err) {
        //         res.json(cources);
        //     } else {
        //         res.status(400).json({ err: 'ERRoR!!' })
        //     }
        // });

        Cource.find({})
            .then(cources => {
                res.render('home', {
                    cources: mutipleMongooseToOJ(cources)
                });
            })
            .catch(next)
    }

    search(req, res) {
        res.render('search');

    }
}

module.exports = new SitesController;