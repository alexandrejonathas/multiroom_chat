module.exports.iniciaChat = function(application, req, res){
    var usuario = req.body;

    req.assert('apelido', 'O apelido é obrigatório!').notEmpty();
    req.assert('apelido', 'O apelido deve conter entre 3 e 10 caracteres').len(3, 10);

    var errors = req.validationErrors();

    if(errors){
      res.render('home/index', {errors: errors, usuario: usuario});
      return;
    }

    console.log('chegou na chamada para atualizar a lista de participantes');
    application.get('io').emit('msgParaCliente', {apelido: usuario.apelido, msg: 'entrou no chat'});
    application.get('io').emit('listaParticipantes', {apelido: usuario.apelido, acao: 'adicionar'});

    res.render('chat/chat', {usuario: usuario});

}
