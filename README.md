# user-trackr-api-nestjs-react

## Projeto

Este repositório contém um projeto com arquitetura de frontend e backend, utilizando Docker para simplificar a configuração e execução dos serviços. O backend é desenvolvido com Nest.js e TypeORM para gerenciar as migrações do banco de dados, enquanto o frontend possui um ambiente isolado em Docker.

## Descrição do Projeto

Este projeto é uma aplicação web que conecta um frontend responsivo a um backend robusto. O backend gerencia a lógica de negócios e a interação com o banco de dados, enquanto o frontend oferece uma interface de usuário amigável. O uso do Docker permite que todos os desenvolvedores trabalhem em um ambiente consistente, evitando problemas de configuração.

## Pré-requisitos

Para rodar este projeto, você precisará dos seguintes softwares instalados:

- [Git](https://git-scm.com/downloads)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (geralmente incluído na instalação do Docker)

---

## Executando o Projeto (para quem deseja apenas rodar)

Para rodar o projeto completo (frontend e backend) usando Docker, siga estas instruções:

1. Clone o repositório:

   ```bash
   git clone https://github.com/hassanrodrigues/user-trackr-api-nestjs-react.git
   cd user-trackr-api-nestjs-react

2.	Inicie os contêineres:

     ```bash
     docker-compose up -d
     ou
     docker compose up -d
3.	Acesse o backend no endereço http://localhost:3002/swagger e o frontend no endereço http://localhost:3000.

4. Credenciais
    ```bash
    email= hassanrodrigues14@gmail.com
    senha=123456
    ou 
    email=outrousarioExistente
    senha=User@ano(User@2024)
5. Para encerrar os contêineres, use:
   ```bash
   docker-compose down
   docker compose down

## Configurando para Desenvolvimento (para quem quer atuar no projeto)
1. Clone o repositório:
    ```bash
    git clone https://github.com/hassanrodrigues/user-trackr-api-nestjs-react.git
      cd user-trackr-api-nestjs-react
2.	Instale as dependências do backend:
      ```bash
         cd backend
         npm install
         ou
         pnpm install
3. Crie um arquivo .env na pasta backend e configure as variáveis de ambiente, com base no .env.example
4.	Inicie o Docker Compose para os serviços de banco de dados:
      ```bash
      docker-compose up -d database
5. Inicie o servidor de desenvolvimento do backend: 
  	1.	Instale as dependências do frontend:
   npm run start:dev
   ou
   pnpm run start:dev
### Configuração do Frontend
1. Instale as dependências do frontend:
   ```bash
   cd frontend
   yarn install
2.  Inicie o servidor de desenvolvimento do frontend:
      ```bash
      npm run dev

## Front Prints
#### Tela Login
![login](./imgs/login.png)
#### Tela usuario
![users](./imgs/users.png)
#### Tela Dashboard
![dashboard](./imgs/dashboard.png)
#### Outras Imagens
![perfil](./imgs/perfil.png)


## Banco de Dados (PostgreSQL)
Este projeto utiliza PostgreSQL como banco de dados. Ao rodar o backend, será feito as migrations e seed de um usuário padrão, com as credenciais citadas acima.
   