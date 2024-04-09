<p align="center">
  <img alt="Logo NLW Unite - Rocketseat" src=".github/logo.png" width="200px" />
  <h1 align="center">NLW Unite - Trilha NodeJS</h1>
</p>

<p align="center">
  <a alt="NodeJS">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  </a>
  <a alt="TypeScript">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  </a>
  <a alt="Fastify">
    <img src="https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white" />
  </a>
  <a alt="Prisma">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
  </a>
  <a alt="SQLite">
     <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" />
  </a>
  <a alt="Zod">
     <img src="https://img.shields.io/badge/Zod-3E67B1.svg?style=for-the-badge&logo=Zod&logoColor=white" />
  </a>
</p>

<p align="center">
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#projeto">Projeto</a> •
  <a href="#extras">Extras</a> •
  <a href="#licenca">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=F48F56&labelColor=00292E">
</p>

## 🚀 Tecnologias<a id="tecnologias"></a>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- NodeJS
- TypeScript
- Fastify
- Prisma
- SQLite
- Zod

## 💻 Projeto<a id="projeto"></a>

Projeto de um pass.in, uma aplicação de gestão de participantes em eventos presenciais, desenvolvido durante o evento "NLW Unite" da Rocketseat na Trilha NodeJS.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição. Os participantes inscritos podem emitir uma credencial para check-in no dia do evento. O sistema fará um scan da credencial do participante para permitir a entrada no evento.

### • Requisitos

#### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poser visualizar a lista de participantes; 
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

#### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

#### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

### • Documentação da API (Swagger)

Para documentação da API, acesse o link: https://nlw-unite-nodejs.onrender.com/docs

### • Diagrama ERD

<img src=".github/erd.svg" width="300" alt="Diagrama ERD do banco de dados" />

## ⭐ Extras<a id="extras"></a>

- Erros recebem um tratamento melhor, sendo exibidos de forma mais clara, de modo a facilitar suas correções.

## 📝 Licença<a id="licenca"></a>

Esse projeto está sob a licença MIT.
