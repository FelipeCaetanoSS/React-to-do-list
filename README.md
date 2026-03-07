# React To-Do List

Aplicação moderna de gestão de tarefas desenvolvida com **React 19** e **Vite**, focada em performance, organização e boas práticas de desenvolvimento. 

---

## Contexto de Desenvolvimento

Este projeto foi desenvolvido como parte de uma familiarização prática com React, com o objetivo de consolidar conceitos fundamentais como:

- Uso de JavaScript Moderno **(ES6+)**
- Componentização
- Props
- Estado (useState)
- Renderização condicional
- Manipulação de listas
- Filtros e ordenação

O desenvolvimento foi baseado no curso do **Matheus Battisti**, servindo como base de aprendizado e posteriormente adaptado com melhorias e organização própria.

---

## Sobre o Projeto

Este projeto consiste em uma aplicação robusta de controle de tarefas que permite:

- Criar tarefas
- Listar tarefas
- Pesquisar tarefas em tempo real
- Filtrar por status (Todas, Completas, Incompletas)
- Ordenar alfabeticamente (Asc / Desc)
- Categorizar tarefas (Trabalho, Pessoal, Estudos)

---

## Padrões de Qualidade

A base de código mantém alto padrão de qualidade com:

- ESLint
- Prettier
- Husky
- lint-staged

Com validação automática antes dos commits (pre-commit hooks), garantindo integridade e padronização do código no repositório.

---

## Consumo de APIs Externas

Além da API Mock local, este projeto realiza a integração e consumo de APIs públicas externas para expandir suas funcionalidades:

- **Deep Translate (RapidAPI):** API utilizada para serviços de tradução. [Acessar Documentação](https://rapidapi.com/gatzuma/api/deep-translate1/playground/apiendpoint_c1e24071-807e-4926-b2ec-1122ffdef37e)
- **Random Useless Facts:** API pública consumida para gerar fatos aleatórios e curiosidades.[Acessar Documentação](https://uselessfacts.jsph.pl/)

---

## Sobre o JSON Server

O JSON Server simula uma API REST real. Isso significa que as alterações feitas (criar, editar ou excluir tarefas) serão salvas automaticamente no arquivo `public/data/tasks.json`.

### Endpoints Disponíveis

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/tasks` | Retorna a lista de todas as tarefas |
| **POST** | `/tasks` | Adiciona uma nova tarefa |
| **PUT** | `/tasks/:id` | Atualiza uma tarefa inteira |
| **PATCH** | `/tasks/:id` | Atualiza apenas um campo (ex: status de conclusão) |
| **DELETE**| `/tasks/:id` | Remove uma tarefa do banco |

---

##  Tecnologias Utilizadas

* React 19
* Vite
* JSON Server (API Mock)
* Husky & Lint-staged (Padronização de código)
* Prettier & ESLint

---

## Como Executar o Projeto

Este projeto utiliza o **Vite** para o Front-end e o **JSON Server** como uma API REST fake para persistência de dados.

### 1. Instalação das Dependências

Após clonar o repositório, instale todos os pacotes necessários:

```bash
npm install
```

### 2. Iniciar a API (Mock Backend)

O banco de dados de tarefas está localizado em `public/data/tasks.json`. Para rodar o servidor da API na porta 3001, execute:

```bash
npm run server
```

**Nota:** Mantenha este terminal aberto enquanto testa a aplicação. A API estará acessível em: `http://localhost:3001/tasks`

### 3. Iniciar o Front-end

Abra um segundo terminal e inicie o ambiente de desenvolvimento do React/Vite:

```bash
npm run dev
```

Acesse a URL indicada no terminal (geralmente `http://localhost:5173`).
