//configurando a entrada para o banco
module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '123456',
    database: 'mydb',
    port: 3306,

    define: {

        timestamps: true,
        underscored: true,
        underscoredAll: true
    }

}