const Todo = require("../models/todo");
const { mongooseToOJ } = require('../../util/mongoosedata');
const { mutipleMongooseToOJ } = require('../../util/mongoosedata');
const { check } = require('express-validator');

class ApisController {


    // [GET] /api/todo/list
    async listtodo(req, res, next) {
        try {

            if (req.query.orderBy) {
                let sort = {};
                sort[req.query.orderBy] = req.query.orderDir;
                const data = await Todo.find({}).sort(sort);
                res.status(200).json({
                    success: true,
                    data: data,
                });

            } else if (req.query.task) {
                let sort = {};
                sort[req.query.orderBy] = req.query.orderDir;
                let key = new RegExp(req.query.task, 'i');
                const data = await Todo.find({ 'task': key });
                res.status(200).json({
                    success: true,
                    data: data,
                });
            } else {
                res.render('todo/list');
            }
        } catch (error) {
            res.status(400).json({
                success: false,
            });
        }
    }

    // [GET] /api/todo/list


    // [GET] /api/todo
    async index(req, res, next) {
        try {
            const data = await Todo.find({});
            res.status(200).json({
                success: true,
                data: data,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
            });
        }

    }

    // [GET] /api/todo/:id
    async gettodoid(req, res, next) {
        try {
            const data = await Todo.findOne({ _id: req.params.id });
            res.status(200).json({
                success: true,
                data: data,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
            });
        }

    }

    // [GET] /api/todo/add
    async add(req, res, next) {
        try {
            const todosave = new Todo(req.body);
            const data = await todosave.save();

            res.status(201).json({
                success: true,
                data: data,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
            });
        }



    }

    // [GET] /api/todo/edit/:id
    async edit(req, res, next) {
        try {
            await Todo.updateOne({ _id: req.params.id }, req.body);
            const data = await Todo.find({});
            res.status(200).json({
                success: true,
                data: data,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
            });
        }
    }

    // [GET] /api/todo/delete/:id
    async delete(req, res, next) {
        try {
            await Todo.deleteOne({ _id: req.params.id });
            const data = await Todo.find({});
            res.status(200).json({
                success: true,
                data: data,
            });

        } catch (error) {
            res.status(400).json({
                success: false,
            });
        }
    }










}





module.exports = new ApisController;