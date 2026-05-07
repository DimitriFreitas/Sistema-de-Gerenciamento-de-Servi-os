import mongoose from "mongoose";

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: String,
  custo: Number,
  preco: Number,
  quantidadeAtual: { type: Number, default: 0 },
  quantidadeMinima: Number,
  dataValidade: Date
});
export default mongoose.model("Produto", ProdutoSchema);