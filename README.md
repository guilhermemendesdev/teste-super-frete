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

- Os emuladores irão rodar localmente, geralmente em:

- Functions

     ```bash
   [firebase emulators:start](http://localhost:5001/<PROJECT_ID>/us-central1/createNewRecord)

   - Firestore
     ```bash
   http://localhost:8080

   ## Como Usar a Aplicação
   Para adicionar um novo registro, faça uma requisição POST para o endpoint da função:

   - URL:

        ```bash
   http://localhost:5001/<PROJECT_ID>/us-central1/createNewRecord
   
   - Método: POST

   - Cabeçalhos:
           ```bash
  Content-Type: application/json

- Corpo da Requisição:

           ```bash
  {
    "name": "Nome do Registro"
   }
