
module.exports = function (app) {
    var controller = app.controllers.palestrante;

    app.post('/palestrantes', controller.salvaPalestrante);
    app.get('/palestrantes', controller.listaPalestrantes);
    app.put('/palestrantes', controller.alteraPalestra);
    app.delete('/palestrantes/:id', controller.removePalestra);
    app.get('/palestrantes/:id', controller.obtemPalestra);

};