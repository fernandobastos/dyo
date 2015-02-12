var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
    plate: Number,
    _user: { type: Number, ref: 'User' }

});

module.exports = mongoose.model('Car', CarSchema);

