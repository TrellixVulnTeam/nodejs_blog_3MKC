const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Cource = new Schema({
    name: String,
    describe: String,
    img: String,
    slug: { type: String, maxLength: 255 },
    created_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Cource', Cource);