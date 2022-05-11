const Cource = require("../models/cources");
const { mongooseToOJ } = require('../../util/mongoosedata');
const { mutipleMongooseToOJ } = require('../../util/mongoosedata');


class NewsController {

    // [GET] /
    index(req, res) {
            res.render('news')
        }
        // [GET] news/:slug
    show(req, res, next) {
        Cource.findOne({ slug: req.params.slug })
            .then(cources => {
                res.render('news/shownews', {
                    cources: mongooseToOJ(cources)
                });
            })
            .catch(next)

    }

    // [GET]  news/create
    create(req, res) {
        res.render('news/create');
    }

    // [POST]  news/store
    store(req, res, next) {
        // res.json(req.body);
        const courcesave = new Cource(req.body);
        courcesave.save()
            .then(() => res.redirect('/'))
            .catch(next => {

            });
    }




    // [GET]  news/edit
    edit(req, res, next) {
        Cource.find({})
            .then(cources => {
                res.render('news/edit', {
                    cources: mutipleMongooseToOJ(cources)
                });
            })
            .catch(next)
    }

    // [GET]  news/edit_detail
    edit_detail(req, res, next) {
        Cource.findOne({ slug: req.params.slug })
            .then(cources => {
                res.render('news/edit_detail', {
                    cources: mongooseToOJ(cources)
                });
            })
            .catch(next)
    }

    // [PUT]  news/edit_detail/:slug
    update_detail(req, res, next) {
            Cource.updateOne({ slug: req.params.slug }, req.body)
                .then(() => res.redirect('/news/edit'))
                .catch(next);
        }
        // [PUT]  news/delete/:id
    delete(req, res, next) {
        Cource.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }




}





module.exports = new NewsController;