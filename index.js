const express = require("express");

const app = express();

app.use(express.json());

const produtoRoutes = require("./routes/produto.routes");

app.use("/produtos", produtoRoutes);

const hostname = "0.0.0.0";
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Servidor rodando na porta ${port}`);
});