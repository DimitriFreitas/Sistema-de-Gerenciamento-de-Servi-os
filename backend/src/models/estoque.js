import mongoose from "mongoose";

const EstoqueSchema = new mongoose.Schema({
  produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Produto",
    required: true
  },

  fornecedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fornecedor"
    // usado apenas na entrada
  },

  tipo: {
    type: String,
    enum: ["entrada", "saida"],
    required: true
  },

  quantidade: {
    type: Number,
    required: true,
    min: 1
  },

  valorUnitario: {
    type: Number,
    min: 0
  },

  valorTotal: {
    type: Number,
    min: 0
  },

  data: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Estoque", EstoqueSchema);