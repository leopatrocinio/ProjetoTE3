
module.exports = function (app) {
    var controller = app.controllers.inscrito;

    app.post('/inscritos', controller.salvaInscrito);
    app.get('/inscritos', controller.listaInscritos);
    app.put('/inscritos', controller.alteraInscrito);
    app.delete('/inscritos/:id', controller.removeInscrito);
    app.get('/inscritos/:id', controller.obtemInscrito);

};