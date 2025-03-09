import ConexaoMySql from "../database/ConexaoMySql.js";

class AnuncioController{

    async listAnuncio(req, resp) {
        try {
            
            const conexao = await new ConexaoMySql().getConexao();
            const commandSql = `SELECT * FROM anuncios`

            const filterAnuncio = req.query.filterAnuncio || "";
            const [resultado] = await conexao.execute(commandSql, [`${filterAnuncio}`]);

            resp.send(
                resultado
            )
            

        } catch (error) {
            resp.status(500).send(error)
        }
    }

    async addAnuncio(req, resp) {
        
        try {
            
            const newAnuncio = req.body;
            if(!newAnuncio.title || !newAnuncio.body){
                resp.status(400).send("Preencha Todos os Campos");
                return;
            }
            const conexao = await new ConexaoMySql().getConexao();
            if(!conexao){
                console.error("Erro na conexão com o banco de dados.")
                return;
            }
            const commandSql = `
            INSERT INTO anuncios(title, body) VALUES (?, ?)
            `
            const [resultado] = await conexao.execute(commandSql,[
                newAnuncio.title,
                newAnuncio.body
            ])
            resp.send({ message:"Anúncio cadastrado com sucesso!", resultado });
            
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
            if (error.code === 'ER_DUP_ENTRY') {
              resp.status(400).send("Anúncio já cadastrado.");
              return;
            }
            resp.status(500).send({
              message: "Erro no servidor. Tente novamente mais tarde.",
              erro: error.message
            });
          }
        }

    }

export default AnuncioController;