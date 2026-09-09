class Produto {
  static produtos = [
    {
      id: 1,
      nome: "Notebook",
      preco: 3500
    },
    {
      id: 2,
      nome: "Mouse",
      preco: 120
    }
  ];

  static listar() {
    return this.produtos;
  }

  static buscarPorId(id) {
    return this.produtos.find(produto => produto.id === id);
  }

  static criar(dados) {
    const novoProduto = {
      id: this.produtos.length + 1,
      nome: dados.nome,
      preco: dados.preco
    };

    this.produtos.push(novoProduto);

    return novoProduto;
  }
}

module.exports = Produto;