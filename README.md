# Super Frete

Super Frete é uma aplicação que utiliza Firebase Functions e Firestore para gerenciar registros de transporte. Este projeto é uma demonstração de como criar uma função HTTP que permite a criação de registros, garantindo que cada registro tenha um `increment_id` exclusivo.

## Índice

- [Super Frete](#super-frete)
  - [Índice](#índice)
  - [Funcionalidades](#funcionalidades)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Como Baixar o Projeto](#como-baixar-o-projeto)
  - [Configuração do Firebase](#configuração-do-firebase)
  - [Como Iniciar](#como-iniciar)
  - [Como Usar a Aplicação](#como-usar-a-aplicação)
  - [Testes Automatizados](#testes-automatizados)
  - [Estrutura do Código](#estrutura-do-código)

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

## Como Baixar o Projeto

- Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/super-frete.git

- Navegue até o diretório do projeto:
   ```bash
   cd super-frete

- Navegue até o diretório functions:
     ```bash
   cd functions

## Configuração do Firebase
- Crie um projeto no Firebase Console.
- Ative o Firestore no console do Firebase.
- Configure as credenciais do seu projeto localmente. Você pode usar o comando abaixo para autenticar sua conta Firebase:

     ```bash
   firebase login

- Inicie o emulador do Firebase para Firestore e Functions:

     ```bash
   firebase emulators:start

## Como Iniciar

- Após configurar o Firebase, inicie os emuladores:

     ```bash
   firebase emulators:start
   
## Como Usar a Aplicação
- Para adicionar um novo registro, faça uma requisição POST para o endpoint da função:
     ```bash
   http://localhost:5001/<PROJECT_ID>/us-central1/createNewRecord
- Método: POST
- Corpo da requisição:
     ```bash
   {
  "name": "Nome do Registro"
   }

## Testes Automatizados
- O projeto inclui testes automatizados utilizando Jest. Para executar os testes, navegue até o diretório **functions** e execute:
     ```bash
   npm run test

## Estrutura do Código
**index.js**

O arquivo ```index.js ``` contém a definição da função ```createNewRecord ```, que:

- Verifica se a requisição é do tipo POST.
- Obtém o próximo ```increment_id ``` disponível.
- Adiciona um novo registro ao Firestore.
- Retorna o ID do registro criado e os dados.