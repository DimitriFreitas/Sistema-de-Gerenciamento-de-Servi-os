# Backend

API do Sistema de Gerenciamento de Serviços. Esta pasta concentra o servidor Express, a conexão com MongoDB e os modelos usados pelos módulos de clientes e produtos.

## Stack

- Node.js
- Express 5
- MongoDB
- Mongoose
- dotenv

## Responsabilidade

O backend fornece endpoints HTTP para:

- criar clientes;
- listar clientes;
- buscar cliente por ID;
- atualizar clientes;
- remover clientes;
- criar produtos;
- listar produtos;
- buscar produto por ID;
- atualizar produtos;
- remover produtos.

## Estrutura

```text
backend/
├── src/
│   ├── config/             # Configuração de banco de dados
│   ├── controlers/         # Controllers de clientes e produtos
│   ├── models/             # Schemas Mongoose
│   ├── routes/             # Rotas HTTP da API
│   └── app.js              # Aplicação Express
├── .env.example            # Exemplo de variáveis de ambiente
├── package.json            # Dependências e scripts
└── server.js               # Entrada do servidor
```

## Configuração de ambiente

Crie o arquivo `.env` dentro de `backend/`:

```bash
cp .env.example .env
```

Configure as variáveis:

```env
MONGO_URI=mongodb+srv://USUARIO:SENHA@CLUSTER.mongodb.net/NOME_DO_BANCO?retryWrites=true&w=majority
PORT=3000
```

`MONGO_URI` é obrigatória. Sem ela, o servidor encerra a inicialização com erro.

## Como instalar

Dentro de `backend/`:

```bash
npm install
```

Ou a partir da raiz:

```bash
npm --prefix backend install
```

## Como rodar

Dentro de `backend/`:

```bash
npm run dev
```

Ou a partir da raiz:

```bash
npm --prefix backend run dev
```

Por padrão, a API sobe em:

```text
http://localhost:3000
```

## Scripts

- `npm run dev`: inicia o servidor com `node --watch`.
- `npm run start`: inicia o servidor com Node.

## Endpoints

### Clientes

```text
GET    /clientes
GET    /clientes/:id
POST   /clientes
PUT    /clientes/:id
DELETE /clientes/:id
```

### Produtos

```text
GET    /produtos
GET    /produtos/:id
POST   /produtos
PUT    /produtos/:id
DELETE /produtos/:id
```

## Modelos principais

### Cliente

Campos usados pelo módulo:

- `nome`
- `email`
- `telefone`
- `cpf_cnpj`
- `status`

### Produto

Campos usados pelo módulo:

- `nome`
- `descricao`
- `custo`
- `preco`
- `quantidadeAtual`
- `quantidadeMinima`
- `dataValidade`
- `status`

## Integração com o frontend

Durante o desenvolvimento, o frontend chama `/api/...`. O proxy do Vite remove o prefixo `/api` e encaminha a requisição para o backend.

Exemplo:

```text
/api/produtos -> http://localhost:3000/produtos
```

Por isso, para usar o sistema completo em desenvolvimento, mantenha o backend rodando na porta configurada em `PORT`, normalmente `3000`.
