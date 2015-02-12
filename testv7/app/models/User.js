var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    age: String,
    enabled: Boolean

});

module.exports = mongoose.model('User', UserSchema);

