import mysql from "mysql2/promise";

// const dbConfig = {
//   host: process.env.MYSQL_HOST ?? "localhost",
//   port: process.env.MYSQL_PORT ?? "3000",
//   user: process.env.MYSQL_USER ?? "root",
//   password: process.env.MYSQL_PWD ?? "senai",
//   database: process.env.MYSQL_DB ?? "api",
// };

const dbConfig = {
  uri: "mysql://root:sOhxxsQNuZQsOPvSfRedyLLNFrVnZsZI@trolley.proxy.rlwy.net:42849/railway"
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
