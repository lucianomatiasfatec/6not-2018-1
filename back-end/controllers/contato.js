var path = require('path');

module.exports = function() {   
    controller = {};

    controller.registrar = function(req, res) {
        var nomeCaminho = path.join(__dirname, 'arquivos');
        var fs = require('fs');
        fs.writeFile(nomeCaminho + "\\" +"contatos.txt", 
            req.body.name + '\n'+ req.body.phone +'\n' + req.body.email +'\n' + req.body.comment + '\n' + 
            req.body.termsAccepted + '\n' + '---------------------------------------------------\n', {flag: "a"} ,(erro) => {
            if (erro)
                throw erro;
        });                
        res.status(200).json({'status': res.statusCode});        
    }        
    return controller;
}