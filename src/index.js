import cors from "cors";
import express from "express";
import AnuncioController from "./controllers/AnuncioController.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const _anuncioController = new AnuncioController();

app.post("/anuncio", _anuncioController.addAnuncio)



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API está rodando na porta ${port}`);
});
