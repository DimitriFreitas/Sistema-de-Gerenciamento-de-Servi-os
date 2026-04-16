export const moduleConfigs = {
  clientes: {
    key: "clientes",
    label: "Clientes",
    singularLabel: "cliente",
    basePath: "/clientes",
    sprint: "RF001 a RF004",
    summary:
      "Modulo de clientes com telas de cadastro, consulta, edicao e inativacao baseadas no documento de requisitos.",
    routeMeta: {
      base: {
        eyebrow: "Sprint 1",
        label: "Clientes",
        description: "CRUD visual de clientes com navegacao interna e layout responsivo.",
      },
      list: {
        eyebrow: "Consulta",
        label: "Consultar clientes",
        description: "Listagem com filtros, resumo do cliente e acoes rapidas.",
      },
      create: {
        eyebrow: "Cadastro",
        label: "Novo cliente",
        description: "Formulario base para cadastrar cliente PF ou PJ.",
      },
      edit: {
        eyebrow: "Edicao",
        label: "Editar cliente",
        description: "Atualizacao de dados cadastrais e enderecos de atendimento.",
      },
      deactivate: {
        eyebrow: "Inativacao",
        label: "Inativar cliente",
        description: "Confirmacao com historico e validacao antes de inativar.",
      },
    },
    actions: [
      {
        label: "Menu do modulo",
        path: "/clientes",
        description: "Resumo do modulo e atalhos para todas as operacoes.",
      },
      {
        label: "Consultar clientes",
        path: "/clientes/listar",
        description: "Listagem com busca, filtro e visualizacao do cadastro.",
      },
      {
        label: "Novo cliente",
        path: "/clientes/novo",
        description: "Cadastro de cliente com documento e endereco principal.",
      },
      {
        label: "Editar cliente",
        path: "/clientes/editar",
        description: "Formulario de atualizacao com gerenciamento de enderecos.",
      },
      {
        label: "Inativar cliente",
        path: "/clientes/inativar",
        description: "Confirmacao de inativacao com acoes alternativas.",
      },
    ],
    list: {
      heroTitle: "Consultar clientes",
      heroDescription:
        "A tela segue RF003: filtros no topo, listagem principal e painel lateral com detalhes resumidos do cliente selecionado.",
      filters: [
        { label: "Nome", value: "Ana" },
        { label: "Documento", value: "123.456" },
        { label: "Status", value: "Ativo", type: "select", options: ["Ativo", "Inativo", "Todos"] },
      ],
      columns: ["Nome", "Documento", "Telefone", "Status", "Acoes"],
      rows: [
        {
          id: "cli-1",
          values: ["Ana Beatriz", "123.456.789-00", "(11) 99999-1200", "Ativo"],
        },
        {
          id: "cli-2",
          values: ["Construtora Atlas", "12.345.678/0001-90", "(11) 4002-1987", "Ativo"],
        },
        {
          id: "cli-3",
          values: ["Marcos Vinicius", "987.654.321-00", "(11) 98888-7700", "Inativo"],
        },
      ],
      detailCard: {
        title: "Detalhes do cliente",
        description:
          "O PDF cita abas para Dados Cadastrais, Enderecos e Historico de Servicos. Aqui elas aparecem como base visual da consulta.",
        tabs: ["Dados Cadastrais", "Enderecos", "Historico de Servicos"],
        facts: [
          { label: "Cliente", value: "Ana Beatriz" },
          { label: "Documento", value: "123.456.789-00" },
          { label: "Status", value: "Ativo" },
          { label: "Endereco principal", value: "Rua das Acacias, 120" },
        ],
      },
    },
    create: {
      heroTitle: "Cadastrar cliente",
      heroDescription:
        "RF001 define Nome ou Razao Social, CPF ou CNPJ, Endereco principal, Telefone e E-mail. A tela segue esse conjunto minimo.",
      sideNotes: [
        "Pessoa fisica ou juridica no mesmo fluxo.",
        "Endereco principal em destaque, como no requisito.",
        "Acao principal retorna para a listagem de clientes.",
      ],
      fields: [
        { label: "Tipo de cliente", type: "select", options: ["Pessoa Fisica", "Pessoa Juridica"] },
        { label: "Nome / Razao Social", placeholder: "Informe o nome do cliente" },
        { label: "CPF / CNPJ", placeholder: "000.000.000-00 ou 00.000.000/0000-00" },
        { label: "Endereco principal", placeholder: "Rua, numero e complemento" },
        { label: "Telefone", placeholder: "(00) 00000-0000" },
        { label: "E-mail", placeholder: "cliente@empresa.com" },
      ],
      primaryLabel: "Salvar",
      secondaryLabel: "Voltar para consulta",
      secondaryPath: "/clientes/listar",
    },
    edit: {
      heroTitle: "Editar cliente",
      heroDescription:
        "RF002 pede alteracao de dados cadastrais e gerenciamento de enderecos. O formulario ja nasce com esses pontos visiveis.",
      sideNotes: [
        "Campos preenchidos para representar um cadastro existente.",
        "Bloco de enderecos exibido como area complementar.",
        "Botao principal segue a nomenclatura do requisito.",
      ],
      alert: "Gerenciar enderecos: adicione, edite ou remova pontos de atendimento vinculados ao cliente.",
      fields: [
        { label: "Nome / Razao Social", defaultValue: "Construtora Atlas" },
        { label: "CPF / CNPJ", defaultValue: "12.345.678/0001-90" },
        { label: "Telefone", defaultValue: "(11) 4002-1987" },
        { label: "E-mail", defaultValue: "contato@atlas.com" },
        { label: "Endereco principal", defaultValue: "Av. Industrial, 550" },
        { label: "Status", type: "select", options: ["Ativo", "Inativo"], defaultValue: "Ativo" },
      ],
      extraPanel: {
        title: "Enderecos de atendimento",
        items: ["Matriz - Av. Industrial, 550", "Obra Centro - Rua Nova, 88"],
      },
      primaryLabel: "Salvar Alteracoes",
      secondaryLabel: "Voltar para consulta",
      secondaryPath: "/clientes/listar",
    },
    deactivate: {
      heroTitle: "Inativar cliente",
      heroDescription:
        "RF004 usa modal de confirmacao com detalhes do cliente e acoes alternativas como exportar historico e agendar inativacao.",
      warning:
        "Nao e possivel inativar cliente com servicos pendentes. Em um fluxo real, a listagem de pendencias aparece antes da confirmacao.",
      facts: [
        { label: "Cliente", value: "Construtora Atlas" },
        { label: "Documento", value: "12.345.678/0001-90" },
        { label: "Status atual", value: "Ativo" },
        { label: "Ultimo servico", value: "Instalacao eletrica - 10/04/2026" },
      ],
      optionalField: {
        label: "Observacao da inativacao",
        placeholder: "Registre contexto, data ou orientacao interna.",
      },
      actionButtons: [
        { label: "Confirmar inativacao", variant: "danger" },
        { label: "Exportar historico", variant: "primary" },
        { label: "Agendar inativacao", variant: "secondary" },
      ],
    },
  },
  produtos: {
    key: "produtos",
    label: "Produtos",
    singularLabel: "produto",
    basePath: "/produtos",
    sprint: "RF005 a RF008",
    summary:
      "Modulo de produtos com CRUD visual focado em estoque, fornecedor e inativacao sem exclusao fisica.",
    routeMeta: {
      base: {
        eyebrow: "Sprint 1",
        label: "Produtos",
        description: "CRUD visual de produtos alinhado aos requisitos de estoque.",
      },
      list: {
        eyebrow: "Consulta",
        label: "Consultar produtos",
        description: "Listagem com filtros, status e painel lateral de informacoes.",
      },
      create: {
        eyebrow: "Cadastro",
        label: "Novo produto",
        description: "Formulario base para cadastro de produtos do estoque.",
      },
      edit: {
        eyebrow: "Edicao",
        label: "Editar produto",
        description: "Atualizacao de estoque minimo, localizacao, custo e fornecedor.",
      },
      deactivate: {
        eyebrow: "Inativacao",
        label: "Inativar produto",
        description: "Confirmacao com sugestao de substituto e impacto no estoque.",
      },
    },
    actions: [
      {
        label: "Menu do modulo",
        path: "/produtos",
        description: "Resumo do modulo e atalhos para todas as operacoes.",
      },
      {
        label: "Consultar produtos",
        path: "/produtos/listar",
        description: "Listagem com filtros por nome, fornecedor e status.",
      },
      {
        label: "Novo produto",
        path: "/produtos/novo",
        description: "Cadastro com unidade de medida, custo e localizacao.",
      },
      {
        label: "Editar produto",
        path: "/produtos/editar",
        description: "Atualizacao dos campos operacionais do estoque.",
      },
      {
        label: "Inativar produto",
        path: "/produtos/inativar",
        description: "Confirmacao com sugestao de substituto e transferencia.",
      },
    ],
    list: {
      heroTitle: "Consultar produtos",
      heroDescription:
        "A tela segue RF007: filtros de busca, listagem principal e bloco lateral com abas de consulta do produto.",
      filters: [
        { label: "Nome", value: "Disjuntor" },
        { label: "Fornecedor", value: "Eletrica Central" },
        { label: "Status", value: "Ativo", type: "select", options: ["Ativo", "Inativo", "Todos"] },
      ],
      columns: ["Produto", "Fornecedor", "Estoque", "Localizacao", "Status", "Acoes"],
      rows: [
        {
          id: "prd-1",
          values: ["Disjuntor Tripolar", "Eletrica Central", "18", "Rua A / Prateleira 2", "Ativo"],
        },
        {
          id: "prd-2",
          values: ["Cabo Flexivel 6mm", "Fios Brasil", "52 kg", "Rua B / Box 3", "Ativo"],
        },
        {
          id: "prd-3",
          values: ["Painel de comando", "Metal Sul", "02", "Area tecnica", "Inativo"],
        },
      ],
      detailCard: {
        title: "Detalhes do produto",
        description:
          "O PDF menciona abas para Dados Cadastrais, Movimentacoes, Fornecedor e Servicos Relacionados. Elas aparecem aqui como guia visual.",
        tabs: ["Dados Cadastrais", "Movimentacoes", "Fornecedor", "Servicos Relacionados"],
        facts: [
          { label: "Produto", value: "Disjuntor Tripolar" },
          { label: "Fornecedor", value: "Eletrica Central" },
          { label: "Estoque atual", value: "18 unidades" },
          { label: "Estoque minimo", value: "08 unidades" },
        ],
      },
    },
    create: {
      heroTitle: "Cadastrar produto",
      heroDescription:
        "RF005 define os campos principais de estoque. A tela segue nome, unidade de medida, estoque minimo, localizacao, custo e fornecedor.",
      sideNotes: [
        "Cadastro simples, sem excesso visual.",
        "Campos alinhados ao requisito funcional.",
        "Acao principal devolve para a consulta de produtos.",
      ],
      fields: [
        { label: "Nome do produto", placeholder: "Ex.: Disjuntor Tripolar" },
        { label: "Unidade de medida", type: "select", options: ["Unidade", "Kg"] },
        { label: "Estoque minimo", placeholder: "Quantidade minima" },
        { label: "Localizacao", placeholder: "Rua, box ou prateleira" },
        { label: "Custo unitario", placeholder: "R$ 0,00" },
        { label: "Fornecedor", placeholder: "Nome do fornecedor" },
      ],
      primaryLabel: "Confirmar cadastro",
      secondaryLabel: "Voltar para consulta",
      secondaryPath: "/produtos/listar",
    },
    edit: {
      heroTitle: "Editar produto",
      heroDescription:
        "RF006 pede alteracao de nome, unidade, estoque minimo, localizacao, custo e fornecedor. A tela reflete esse bloco de dados.",
      sideNotes: [
        "Busca rapida e paginacao entram na tela de consulta.",
        "Aqui o foco e ajuste dos dados do item.",
        "Campos sao preenchidos para simular um produto existente.",
      ],
      alert: "Em um fluxo completo, a busca rapida localiza o produto antes da abertura do formulario de edicao.",
      fields: [
        { label: "Nome do produto", defaultValue: "Disjuntor Tripolar" },
        { label: "Unidade de medida", type: "select", options: ["Unidade", "Kg"], defaultValue: "Unidade" },
        { label: "Estoque minimo", defaultValue: "08" },
        { label: "Localizacao", defaultValue: "Rua A / Prateleira 2" },
        { label: "Custo unitario", defaultValue: "R$ 79,90" },
        { label: "Fornecedor", defaultValue: "Eletrica Central" },
      ],
      extraPanel: {
        title: "Resumo do estoque",
        items: ["Estoque atual: 18 unidades", "Ultima entrada: 09/04/2026", "Status: Ativo"],
      },
      primaryLabel: "Salvar Alteracoes",
      secondaryLabel: "Voltar para consulta",
      secondaryPath: "/produtos/listar",
    },
    deactivate: {
      heroTitle: "Inativar produto",
      heroDescription:
        "RF008 usa modal de confirmacao com sugestao de substituto e possibilidade de transferir estoque residual antes da inativacao.",
      warning:
        "Produtos vinculados a servicos em andamento nao podem ser inativados. A excecao foi destacada na interface.",
      facts: [
        { label: "Produto", value: "Painel de comando" },
        { label: "Fornecedor", value: "Metal Sul" },
        { label: "Estoque atual", value: "02 unidades" },
        { label: "Status atual", value: "Ativo" },
      ],
      optionalField: {
        label: "Produto substituto sugerido",
        placeholder: "Selecione um item similar para futuras referencias.",
      },
      actionButtons: [
        { label: "Confirmar inativacao", variant: "danger" },
        { label: "Sugerir substituto", variant: "primary" },
        { label: "Transferir estoque", variant: "secondary" },
      ],
    },
  },
};

export const orderedModules = Object.values(moduleConfigs);
