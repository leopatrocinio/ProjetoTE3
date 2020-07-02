const palestra = require("../models/palestra");

module.exports = function (app) {
    var controller = {};
    var palestrante = app.models.palestrante;


    controller.salvaPalestrante = function (req, res) {
        palestrante.create(req.body).then(
            function (palestrante) {
                res.status(201).json(palestrante)
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaPalestrantes = function (req, res) {
        palestrante.find().exec().then(
            function (palestrante) {
                res.status(200).json(palestrante);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.alteraPalestrante = function (req, res) {
        var _id = req.body._id;
        palestrante.findByIdAndUpdate(_id, req.body).exec().then(
            function (palestrante) {
                res.status(200).json(palestrante);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.removePalestrante = function (req, res) {
        var _id = req.params.id;
        palestrante.remove({"_id": _id}).exec().then(
            function (palestrante) {
                res.status(204).end();
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemPalestrante = function (req, res) {
        var _id = req.params.id;
        palestrante.findById(_id).exec().then(
            function (palestrante) {
                if (!palestrante) {
                    res.status(404).end();
                } else {
                    res.status(200).json(palestrante);
                }
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    return controller;
}
