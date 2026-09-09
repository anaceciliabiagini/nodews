const Produto = require("../models/produto.model");

function listar() {
  return Produto.listar();
}

function buscarPorId(id) {
  return Produto.buscarPorId(id);
}

function criar(dados) {
  return Produto.criar(dados);
}

module.exports = {
  listar,
  buscarPorId,
  criar
};