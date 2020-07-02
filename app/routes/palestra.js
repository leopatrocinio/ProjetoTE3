
module.exports = function (app) {
    var controller = app.controllers.palestra;

    app.post('/palestras', controller.salvaPalestra);
    app.get('/palestras', controller.listaPalestras);
    app.put('/palestras', controller.alteraPalestra);
    app.delete('/palestras/:id', controller.removePalestra);
    app.get('/palestras/:id', controller.obtemPalestra);

};