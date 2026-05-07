import mongoose from "mongoose";
import {
  formatCpfCnpj,
  formatPhone,
  isValidCpfCnpj,
  isValidPhone,
} from "../utils/formatters.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Nome e obrigatorio."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "E-mail e obrigatorio."],
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => emailRegex.test(value),
      message: "Informe um e-mail valido.",
    },
  },
  telefone: {
    type: String,
    trim: true,
    set: formatPhone,
    validate: {
      validator: isValidPhone,
      message: "Informe um telefone com DDD e 10 ou 11 digitos.",
    },
  },
  cpf_cnpj: {
    type: String,
    required: [true, "CPF ou CNPJ e obrigatorio."],
    trim: true,
    set: formatCpfCnpj,
    validate: {
      validator: isValidCpfCnpj,
      message: "CPF ou CNPJ invalido.",
    },
  },
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

export default mongoose.model("Cliente", clienteSchema);
