
module.exports = function (app) {
    var controller = app.controllers.palestrante;

    app.post('/palestrantes', controller.salvaPalestrante);
    app.get('/palestrantes', controller.listaPalestrantes);
    app.put('/palestrantes', controller.alteraPalestrante);
    app.delete('/palestrantes/:id', controller.removePalestrante);
    app.get('/palestrantes/:id', controller.obtemPalestrante);

};