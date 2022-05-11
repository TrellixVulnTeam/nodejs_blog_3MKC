const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Todo = new Schema({
    task: String,
    level: String,
    slug: { type: String, slug: 'task', unique: true }
}, {
    timestamps: true,
});


module.exports = mongoose.model('Todo', Todo);