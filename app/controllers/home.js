module.exports.index = function(application, req, res){
    res.render('home/index', {usuario: {}, errors: {}});
}
