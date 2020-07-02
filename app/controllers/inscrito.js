
module.exports = function (app) {
    var controller = {};
    var inscrito = app.models.inscrito;


    controller.salvaInscrito = function (req, res) {
        inscrito.create(req.body).then(
            function (inscrito) {
                res.status(201).json(inscrito)
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaInscritos = function (req, res) {
        inscrito.find().populate('palestra').exec().then(
            function (inscrito) {
                res.status(200).json(inscrito);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.alteraInscrito = function (req, res) {
        var _id = req.body._id;
        inscrito.findByIdAndUpdate(_id, req.body).exec().then(
            function (inscrito) {
                res.status(200).json(inscrito);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.removeInscrito = function (req, res) {
        var _id = req.params.id;
        inscrito.remove({"_id": _id}).exec().then(
            function (inscrito) {
                res.status(204).end();
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemInscrito = function (req, res) {
        var _id = req.params.id;
        inscrito.findById(_id).populate('palestra').exec().then(
            function (inscrito) {
                if (!inscrito) {
                    res.status(404).end();
                } else {
                    res.status(200).json(inscrito);
                }
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    return controller;
}
