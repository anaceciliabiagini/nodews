const service = require("../services/produto.service");

exports.listar = (req, res) => {
  const produtos = service.listar();

  res.status(200).json(produtos);
};

exports.buscarPorId = (req, res) => {
  const id = Number(req.params.id);

  const produto = service.buscarPorId(id);

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado"
    });
  }

  res.status(200).json(produto);
};

exports.criar = (req, res) => {
  const { nome, preco } = req.body;

  if (!nome || preco === undefined) {
    return res.status(400).json({
      mensagem: "Nome e preço são obrigatórios"
    });
  }

  const produto = service.criar({
    nome,
    preco
  });

  res.status(201).json(produto);
};