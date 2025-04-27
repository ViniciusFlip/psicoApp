const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.json({ message: "Servidor rodando com sucesso!" });
});

// Rota de exemplo para o app Expo consumir
app.post("/dados", (req, res) => {
  const { nome, email } = req.body;
  res.json({ mensagem: `Recebido: Nome - ${nome}, Email - ${email}` });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
