# Criando Projeto Node

1. Criar pasta `backend/`
2. Executar comando `yarn init -y`
3. Instalar o Express `yarn add express`
4. Instalar o Nodemon como 'Dev' `yarn add nodemon -D`

## Métodos HTTP

- **GET**: Buscar informações do backend
- **POST**: Criar uma informação no backend
- **PUT/PATCH**: Alterar uma informação no backend
- **DELETE**: Deletar uma informação no backend

## Tipos de parâmetros

- **Query Params**: Filtros e paginação
- **Route Params**: Identificar recursos (Atulizar/Deletar)
- **Request Body**: Conteúdo na hora criar ou editar um recurso (JSON)

## Middleware

É um interceptador de requisições que pode interromper totalmente a requisição ou alterar dados da requisição
