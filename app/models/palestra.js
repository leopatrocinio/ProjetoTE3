var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({
        datahoraInicio: {
            type: Date,
            required: true
        },
        datahoraTermino: {
            type: Date,
            required: true,
            validate: {
                validator: function(v) {
                    return datahoraTermino > datahoraInicio
                },
                message: props => `${props.value} deve ser maior ao horário de início!`
            }
        },
        local: {
            type: String,
            required: true
        },
        palestrante: {
            type: mongoose.Schema.ObjectId,
            ref: 'Palestrante',
            required: true
        },
        created: {
            type: Date,
            default: Date.now,
            required: false
        }
    });
}