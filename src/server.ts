import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Enviou a requisição" });
});

app.post("/", (req, res) => {
  const { nome } = req.body;
  console.log(nome);
  res.status(201).json({ message: "A informação foi salva" });
});

app.listen(3000, () => {
  console.log("Está executando");
});
