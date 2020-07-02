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
        profissao: {
            type: String,
            required: true
        },
        instituicao: {
            type: String,
            required: true
        }
    });
    return mongoose.model('Palestrante', schema);
}

