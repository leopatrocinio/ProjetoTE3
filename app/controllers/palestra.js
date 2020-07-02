
module.exports = function (app) {
    var controller = {};
    var palestra = app.models.palestra;


    controller.salvaPalestra = function (req, res) {
        palestra.create(req.body).then(
            function (palestra) {
                res.status(201).json(palestra)
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaPalestras = function (req, res) {
        palestra.find().populate('palestrante').exec().then(
            function (palestra) {
                res.status(200).json(palestra);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.alteraPalestra = function (req, res) {
        var _id = req.body._id;
        palestra.findByIdAndUpdate(_id, req.body).exec().then(
            function (palestra) {
                res.status(200).json(palestra);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.removePalestra = function (req, res) {
        var _id = req.params.id;
        palestra.remove({"_id": _id}).exec().then(
            function (palestra) {
                res.status(204).end();
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemPalestra = function (req, res) {
        var _id = req.params.id;
        palestra.findById(_id).populate('palestrante').exec().then(
            function (palestra) {
                if (!palestra) {
                    res.status(404).end();
                } else {
                    res.status(200).json(palestra);
                }
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    return controller;
}
