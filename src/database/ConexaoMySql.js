import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.MYSQL_HOST || "trolley.proxy.rlwy.net" || "localhost",
  port: process.env.MYSQL_PORT || "42849" || "3000",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PWD || "sOhxxsQNuZQsOPvSfRedyLLNFrVnZsZI" || "senai",
  database: process.env.MYSQL_DB || "raiway" || "api",
};
class ConexaoMySql {
  async getConexao() {
    if (!ConexaoMySql.conexao) {
      ConexaoMySql.conexao = await mysql.createConnection(dbConfig);
    }
    return ConexaoMySql.conexao;
  }
}
export default ConexaoMySql;
