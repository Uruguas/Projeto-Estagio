const db = require('../db')

module.exports = {
    buscartodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM Projeto1', (error, result)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};


