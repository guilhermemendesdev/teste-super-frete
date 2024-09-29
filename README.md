# Super Frete

Super Frete é uma aplicação que utiliza Firebase Functions e Firestore para gerenciar registros de transporte. Este projeto é uma demonstração de como criar uma função HTTP que permite a criação de registros, garantindo que cada registro tenha um `increment_id` exclusivo.

## Índice

- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como Baixar o Projeto](#como-baixar-o-projeto)
- [Instalação das Dependências](#instalação-das-dependências)
- [Configuração do Firebase](#configuração-do-firebase)
- [Como Iniciar](#como-iniciar)
- [Como Usar a Aplicação](#como-usar-a-aplicação)
  - [Criar um Novo Registro](#criar-um-novo-registro)
- [Testes Automatizados](#testes-automatizados)
- [Estrutura do Código](#estrutura-do-código)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Funcionalidades

- **Criação de Registros**: Permite adicionar novos registros com um nome e um `increment_id` que aumenta automaticamente a cada novo registro.
- **Integração com Firestore**: Os registros são armazenados no Firestore, permitindo fácil consulta e manipulação.

## Estrutura do Projeto

super-frete/ ├── functions/ │ ├── package.json │ ├── index.js │ └── tests/ │ └── index.test.js ├── firebase.json └── README.md


## Pré-requisitos

Antes de iniciar, certifique-se de que você tem:

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).
- [Firebase CLI](https://firebase.google.com/docs/cli) instalada. Você pode instalar via npm:
  ```bash
  npm install -g firebase-tools
