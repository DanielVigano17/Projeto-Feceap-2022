const Sequelize = require('sequelize')
const sequelize = new Sequelize('bd_smartplanner','root','root',{
    host: 'localhost',
    dialect: 'mysql'
})

const Tarefas = sequelize.define('tarefas',{
    titulo: {
        type: Sequelize.STRING
    },
    descricao:{
        type: Sequelize.TEXT
    },
    horario: {
        type:Sequelize.TIME
    }

})

module.exports = Tarefas