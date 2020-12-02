<h1 align="center" >
  <img src="https://ik.imagekit.io/ik54mxkwpj/logo_QB6Mz91ou.png" />
</h1>

## 📋 Sobre

O projeto **ManagerProduct** é uma aplicação para controle de produto, no qual o usuário poderá fazer cadastro e se autenticar-se na aplicação assim sendo redirecionado automaticamente ao Dashboard, contendo as funcionalidades de Cadastro, Edição e Remoção do produto. Além de ter uma área para editar o perfil, podendo adicionar um avatar, trocando nome, senha, email e fazendo logout da aplicação.
Este projeto tem objetivo de praticar e estudar.

---

### 🌍 Version English

The project **ManagerProduct** is a application to product control, in which the user make can register and authenticate in the application, so beign automatically redirected to Dashboard, containing functionalities of Register, Edit and Removing of Product. Besides having a area to perfil edit, can add a avatar, changing name, password, email and maked logout of application.
This project aims to practice and study.

[**Link para o Frontend:**](https://github.com/CarlosAug-tech/managerproduct-web)

---

## 💡 Tecnologias Utilizadas

O backend do projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.JS](https://nodejs.org/en/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [Nodemon](https://nodemon.io/)

### 🗃 **Database**:

- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)

---

## ⚙ Como configurar a Database

```bash
  $ docker run --name [nomedocontainer] -e POSTGRES_PASSWORD=[senha] -p 5432:[5432 ou porta livre] -d postgres
```

### Inicializando os containers do Docker:

```bash
  $ docker start [nomedocontainer]
```

---

## 📦 Como baixar o projeto

```bash

  # Clonar o repositório
  $ git clone https://github.com/CarlosAug-tech/managerproduct-server

  # Entrar no diretório
  $ cd managerproduct

  # Instalar as dependências
  $ yarn install

  # Iniciar o backend
  $ yarn dev
```

---

Desenvolvido 😎 por Carlos Augusto Silva Santos
