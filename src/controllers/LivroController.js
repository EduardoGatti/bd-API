import ConexaoMySql from "../database/ConexaoMySql.js";

class LivroController {

    async listLivro(req, resp) {

        try {
            
            const conexao = await new ConexaoMySql().getConexao();
            const commandSql = `SELECT * FROM livro;`
            const filterLivro = req.query.filterLivro || "";
            const [resultado] = await conexao.execute(commandSql, [
                `%${filterLivro}%`, 
                `%${filterLivro}%`, 
                `%${filterLivro}%`
            ]);
            
    
            resp.send(resultado)

        } catch (error) {
            console.error("Erro ao listar livros:", error);
            resp.status(500).send({
                message: "Erro no servidor. Tente novamente mais tarde.",
                erro: error.message
            });
        }
        
        

    }

    async addLivro(req, resp) {
        try {

            const newLivro = req.body;
            if (!newLivro.titulo || !newLivro.autor || !newLivro.genero || !newLivro.descricao || !newLivro.isbn || !newLivro.editora || !newLivro.publicacao) {

                resp.status(400).send("Preencha todos os campos!")
                return;

            }
            const conexao = await new ConexaoMySql().getConexao();
            if (!conexao) {
                console.error("Erro na conexão com o banco de dados.")
                return;
            }
            const commandSql = `
            INSERT INTO livro (titulo, autor, genero, descricao, isbn, editora, publicacao)
            VALUES (?, ?, ?, ?, ?, ?, ?);
            `

            const [resultado] = await conexao.execute(commandSql, [

                newLivro.titulo,
                newLivro.autor,
                newLivro.genero,
                newLivro.descricao,
                newLivro.isbn,
                newLivro.editora,
                newLivro.publicacao
            ]
            )
            resp.send({ message: "Livro cadastrado com sucesso!", resultado });

        } catch (error) {
            console.error("Erro ao adicionar Livro:", error);
            if (error.code === 'ER_DUP_ENTRY') {
              resp.status(400).send("Livro já cadastrado.");
              return;
            }
            resp.status(500).send({
              message: "Erro no servidor. Tente novamente mais tarde.",
              erro: error.message
            });
          }


    }
}

export default LivroController;