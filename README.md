# Bexs Challenge

### :coffee: Requisitos do teste

O Challenge, constitui em elebora um sistema com duas rotas, sendo uma para salvar as informações no arquivo csv e a outra para buscar a melhor rota.

Além disso, o sistema tem uma CLI que, depois de ser inserido o csv das rotas é executado, solicita para que o usuário insira, no terminal, as rotas para que seja calculado a melhor rota.

Para fazer a busca da melhor rota, usei o algoritmo de Dijkstra's, que parte do principio de como os grafos são construídos e utilizados.

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

# Para executar os teste
$ npm test

# Para carregar o arquivo no projeto
$ bexs file $path_file

# Para pesquisar uma rota usando o CLI
$ bexs_cli routes
$ ? Please enter the route: AAA-AAA

# Executando o REST
$ npm start


```

### Sobre as rotas criadas

- POST - Salva as rotas no arquivo dentro do sistema.
- GET - Faz a busca pela melhor rota.

### Formato dos arquivos

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

- No caso do txt:

```javascript
origin, destination, cost;
GRU, BRC, 10;
BRC, SCL, 5;
GRU, CDG, 75;
GRU, SCL, 20;
GRU, ORL, 56;
ORL, CDG, 5;
SCL, ORL, 20;
```

### Thats it ! :coffee:

---

by Lucas Cunha
