var mongoose = require('mongoose');
require('mongoose-type-email');
module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true,
            index: {
                unique: true
            }
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        created: {
            type: Date,
            default: Date.now,
            required: false
        },
        palestras: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Palestra',
            required: true
        }]
    });
    return mongoose.model('Inscrito', schema);
}

