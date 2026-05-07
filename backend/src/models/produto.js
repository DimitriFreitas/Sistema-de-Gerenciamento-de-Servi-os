import mongoose from "mongoose";

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Nome do produto e obrigatorio."],
    trim: true,
  },
  descricao: {
    type: String,
    required: [true, "Descricao e obrigatoria."],
    trim: true,
  },
  custo: {
    type: Number,
    min: [0, "Custo nao pode ser negativo."],
  },
  preco: {
    type: Number,
    min: [0, "Preco nao pode ser negativo."],
  },
  quantidadeAtual: {
    type: Number,
    default: 0,
    min: [0, "Quantidade atual nao pode ser negativa."],
  },
  quantidadeMinima: {
    type: Number,
    min: [0, "Quantidade minima nao pode ser negativa."],
  },
  dataValidade: Date,
  status: {
    type: String,
    enum: {
      values: ["ativo", "inativo"],
      message: "Status deve ser ativo ou inativo.",
    },
    default: "ativo",
    lowercase: true,
  },
});
export default mongoose.model("Produto", ProdutoSchema);
