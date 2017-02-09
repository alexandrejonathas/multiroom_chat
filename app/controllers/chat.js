module.exports.iniciaChat = function(application, req, res){
    var usuario = req.body;

    req.assert('apelido', 'O apelido é obrigatório!').notEmpty();
    req.assert('apelido', 'O apelido deve conter entre 3 e 10 caracteres').len(3, 10);

    var errors = req.validationErrors();

    if(errors){
      res.render('home/index', {errors: errors, usuario: usuario});
      return;
    }

    res.render('chat/chat');
}
