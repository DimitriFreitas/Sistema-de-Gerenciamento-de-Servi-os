import mongoose from "mongoose";

const HistoricoSchema = new mongoose.Schema({
  idFornecedor: String,
  nomeFornecedor: String,
  quantidade: Number,
  valorUnit: Number,
  dataEntrada: Date
});

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: String,
  custo: Number,
  preco: Number,
  quantidadeAtual: Number,
  quantidadeMinima: Number,
  dataValidade: Date,

  historico: [HistoricoSchema]
});

export default mongoose.model("Produto", ProdutoSchema);