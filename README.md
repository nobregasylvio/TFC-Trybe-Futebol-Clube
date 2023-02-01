<h1 align="center">Boas vindas ao repositório do Trybe Futebol Clube!</h1>

O TFC é um site informativo sobre partidas e classificações de futebol!

Nesse Projeto, foi desenvolvido um back-end dockerizado utilizando modelagem de dados através do Sequelize, o código foi escrito em TypeScript, utilizando a estrutura POO e SOLID, há tambem uma validação de tokens com o JWT e validação/criptografia de senhas utilizando o BCrypt. Essa API é consumida por um front-end já provido pela Trybe. :rocket:

<details>
<summary><strong>Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina você deve ter:

 - Sistema Operacional Distribuição Unix
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2
</details>
 
<details>
<summary><strong>Executando o projeto</strong></summary><br />
  1. Clone o repositório
  
  ```
  git clone git@github.com:nobregasylvio/Projeto-TFC.git
  ``` 
  
  
  2. Execute o comando para criação dos containers do Docker

  ```
  npm run compose:up
  ```
  
  
  3. Acesse a aplicação pelo navegador utilizando o link
  
      http://localhost:3000/
   
   
  4. Para realizar o login, utiliza um dos usuarios abaixo
  
      <details>
        <summary><strong>Administrador</strong></summary>
        email: admin@admin.com<br />
        password: secret_admin
      </details>
      <br />
      <details>
        <summary><strong>Usuario Comum</strong></summary>
        email: user@user.com<br />
        password: secret_user
      </details>
  
</details>
