// importar a biblioteca do mysql/promisse para estabelecer
// a conexão com o banco de dados

import mysql from "mysql2/promise"

// A constante pool é uma conexão com o banco de dados.
// Com elas iremos criar uma coneão com o mysql passando
// alguns parâmetros, tais como:
// - Host(local onde está o banco de dados)
// - User(Usuário do banco de dados)
// - Password (Senha para acesso do banco de dados)
// - Database (nome do banco de dados)
// - Port (porta de comunicação do banco de dados)

const pool = mysql.createPool({
host:"127.0.0.1",
user:"root",
password:"",
database:"dbalunos",
port:3306
});
export default pool;