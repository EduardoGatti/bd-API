import cors from "cors";
import express from "express";
import AnuncioController from "./controllers/AnuncioController.js";
import LivroController from "./controllers/LivroController.js";
import UsersControllers from "./controllers/UsersControllers.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const _anuncioController = new AnuncioController();
const _livroController = new LivroController();
const _userController = new UsersControllers();


app.post("/anuncio", _anuncioController.addAnuncio);
app.get("/anuncio", _anuncioController.listAnuncio);
app.post("/livro", _livroController.addLivro);
app.get("/livro", _livroController.listLivro);
app.post("/user", _userController.addUser)
app.get("/user", _userController.listUser)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API está rodando na porta ${port}`);
});
