# Bexs Challenge

### :coffee: Requisitos do teste

O Challenge, constitui em elebora um sistema com duas rotas, sendo uma para salvar as informações no arquivo csv e a outra para buscar a melhor rota.

Além disso, o sistema tem uma CLI que, depois de ser inserido o csv das rotas é executado, solicita para que o usuário insira, no terminal, as rotas para que seja calculado a melhor rota.

### Tecnologias utilizadas

- [nodejs](https://nodejs.org/en/)
- [express](https://expressjs.com/pt-br/)
- [csv-parser](https://csv.js.org/parse/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [inquirer](https://www.npmjs.com/package/inquirer)
- [commander](https://www.npmjs.com/package/commander)
- [jest](https://jestjs.io/)

### Estrutura de pastas

```
src                 # Código da aplicação
├─ __test__         # Arquivos de testes do sistema
├─ src              # Arquivos do projeto
├── routes          # Arquivo de routas do sistema
├── useCases        # Casos de Uso do Sistema
├── views           # Arquivo de visualização do Sistema
├─ app.js           # Classe inicial do sistema
├─ server.js        # Classe que inicia o servidor
```

### Instruções para rodar a API

```
# Inicializando o projeto
$ Faça o download da pasta do projeto, inicia com `npm install`


```

### Sobre as rotas criadas

### Executando os testes da API localmente

- No caso do POST passar um objeto no formato JSON:

```javascript
{
  "airports": [
    { "origin": "GRU", "destination": "BRC", "cost": "10" },
    { "origin": "BRC", "destination": "SCL", "cost": "5" },
		{ "origin": "GRU", "destination": "CDG", "cost": "75"},
		{ "origin": "GRU", "destination": "SCL", "cost": "20"},
		{ "origin": "GRU", "destination": "ORL", "cost": "56"},
		{ "origin": "ORL", "destination": "CDG", "cost": "5"},
		{ "origin": "SCL", "destination": "ORL", "cost": "20"}
  ]
}
```

### Thats it ! :coffee:

---

by Lucas Cunha
