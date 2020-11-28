# GOSTACK Conceitos

## Conceitos de Backend com NodeJS

### Criando Projeto Node Backend

1. Criar pasta `backend/`
2. Executar comando `yarn init -y`
3. Instalar o Express `yarn add express`
4. Instalar o Nodemon como 'Dev' `yarn add nodemon -D`

### Métodos HTTP

- **GET**: Buscar informações do backend
- **POST**: Criar uma informação no backend
- **PUT/PATCH**: Alterar uma informação no backend
- **DELETE**: Deletar uma informação no backend

### Tipos de parâmetros

- **Query Params**: Filtros e paginação
- **Route Params**: Identificar recursos (Atulizar/Deletar)
- **Request Body**: Conteúdo na hora criar ou editar um recurso (JSON)

### Middleware

É um interceptador de requisições que pode interromper totalmente a requisição ou alterar dados da requisição

## Conceitos de Frontend com ReactJS

### ReactJS

- Biblioteca para construção de interfaces
- Utilizado para construção de Single-Page Applications (SPA)

### Vantagens

- Organização do código
  - Componentização;
- Divisão de Responsabilidades;
  - Backend: Regra de negócio
  - Frontend: Interface
- Uma API, múltiplos clientes;
- Programação declarativa;

### JSX

- Escrever HTML dentro do JavaScript
- Com React podemos criar nossos próprios elementos

### Babel / Webpack

- O browser não entende todo esse código
- O Babel converte o código JS de uma forma que o browser entenda;
- O Webpack possui várias funções:
  - Criação do bundle, arquivo com todo código da aplicação;
  - Ensinar ao JavaScript como importar arquivos CSS, imagens e etc;
  - Live reload com Webpack Dev Server;

### Criando Projeto React

- Inicializar o Projeto: `yarn init -y`
- Instalar o React e React-DOM: `yarn add react react-dom`
- Babel: Converter (transpilar) código do React para um código que browser entendan
- Webpack: Pra cada tipo de arquivo (.js, .css, .png) converte o código de uma maneira diferente
- Instalar o Babel e Webpack: `yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli`
- Configurar o Babel, criar um arquivo `babel.config.js`. Com as seguintes configurações

  ```javascript
    module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    };
  ```

- Instalar o Babel CLI: `yarn add @babel/cli`
- Criar o bundle do código JS: `yarn babel src/index.js --out-file public/bundle.js`
- Criar arquivo de configuração do Webpack
- Instalar o Babel Loader: `yarn add babel-loader`
- Instalar o Webpack Dev Server: `yarn add webpack-dev-server -D`
- Configuração do Webpack
  
  ```javascript
    const path = require('path');
    module.exports = {
      entry: path.resolve(__dirname, 'src', 'index.js'),
      output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
      },
      devServer: {
        contentBase: path.resolve(__dirname, 'public'),
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
    };
  ```

- Executar o webpack-dev-server: `yarn webpack serve --mode development`
- JSX: HTML dentro do JavaScript (JavaScript XML)
- Fragment: `<> </>`
- Propriedade: Passar info de um componente pai para o seus filhos componentes
- Estado:
  - O `useState()` retorna uma array com 2 posições
    1. Variável com seu valor inicial
    2. Função para atualizar esse valor
- Importar CSS:
  - Instalar os loaders: `yarn add style-loader css-loader`
  - Adicionar novas regras ao `webpack.config.js`

    ```javascript
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ```

  - Para carregar arquivos dentro da aplicação, devemos instalar: `yarn add file-loader`
  - Adicionar novas regras ao `webpack.config.js`

    ```javascript
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        },
      },
    ```

- Consumindo um API, para isso instalar: `yarn add axios`
- Configuração para Consumir API com axios:
  
  ```javascript
    import axios from 'axios';

    const api = axios.create({
      baseURL: 'http://localhost:3333',
    });

    export default api;
  ```

- Para o Babel enteder devemos adicionar o `yarn add @babel/plugin-transform-runtime -D`

## Conceitos de Mobile com React-Native

- Versão do React para desenvolvimento mobile
- Multiplataforma
- Podemos manipular cada plataforma de forma diferente
- Código não é transpilado

### Sintaxe

- A delclaração de componentes é igual ao web;
- Não usamos HTML e sim componentes próprios;
- Aplicamos estilo sem classe ou ID's;
- Todo texto é `<Text />` não existe estilização própria;

### Expo

- SDK com um conjunto de funcionalidades prontas para usar (câmera, vídeo, integrações);
- Não é necessário configurar emulador;
