module.exports = {
    mutipleMongooseToOJ: function(arrs) {
        return arrs.map(arr => arr.toObject());
    },
    mongooseToOJ: function(arr) {
        return arr ? arr.toObject() : arr;
    }
}