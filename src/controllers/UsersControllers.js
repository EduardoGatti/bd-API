import ConexaoMySql from "../database/ConexaoMySql.js";

class UsersControllers{

    async listUser(req, resp){
        try {
            const conexao = await new ConexaoMySql().getConexao();
            const commandSql = `SELECT * FROM users`;
            const filterUser = req.query.filterUser || "";
            const [resultado] = await conexao.execute(commandSql, [`%${filterUser}%`])
            resp.send(resultado)
            
        } catch (error) {
            console.error("Erro ao listar livros:", error);
            resp.status(500).send({
                message: "Erro no servidor. Tente novamente mais tarde.",
                erro: error.message
            });
        }


    }

    async addUser(req, resp){
        try {

            const conexao = await new ConexaoMySql().getConexao();
            if(!conexao){
                console.error("Erro na conexão com o banco de dados.")
                return;
            }
            const newUser = req.body;
    
            if(!newUser.nome || !newUser.email || !newUser.telefone){
                
                resp.status(400).send("Preencha todos os campos!")
                return;
    
            }
    
            const commandSql = `INSERT INTO users( nome, email, telefone) VALUES(?, ?, ?)`
    
            const [resultado] = await conexao.execute(commandSql, [
                newUser.nome,
                newUser.email,
                newUser.telefone
            ])
            resp.send(resultado)
            
        } catch (error) {
        console.error("Erro ao adcionar Usuário:", error);
        resp.status(500).send({
            message: "Erro no servidor. Tente novamente mais tarde.",
            erro: error.message
        });
    }
        }

    }



export default UsersControllers;