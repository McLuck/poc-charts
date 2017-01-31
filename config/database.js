module.exports = function(url) {
    var mongoose = require('mongoose');

    mongoose
    .connect('mongodb://'+url);

    mongoose.connection.on('connected',
        function(){
            console.log('Conectado ao mongo');
        });

    mongoose.connection.on('disconnected',
        function(){
            console.log('Desconectado do mongoDB');
        });

    mongoose.connection.on('error',
        function(error){
            console.log(error);
        });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Conexao fechada pelo termino da aplicacao.');
            process.exit(0);
        });
    });

};
