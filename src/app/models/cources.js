const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Cource = new Schema({
    name: String,
    describe: String,
    img: String,
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true,
});


module.exports = mongoose.model('Cource', Cource);