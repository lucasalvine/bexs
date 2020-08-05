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
├─ app              # Arquivos necessário no projeto
├── controllers     # Arquivo de controle do sistema
├── models          # Arquivo de modelos da base de dados usado
├── services        # Arquivo de faz a interação entre o repositorio
├── repositories    # Arquivo que faz a interação com o banco de dados
├── helpers         # Arquivos de auxilio, no caso, as validações
├─ config           # Pasta de configuração do banco de dados
├─ database         # Pasta com os arquivos de migração
├─ app.js           # Classe inicial do sistema
├─ routes.js        # Classe de rotas
├─ server.js        # Classe que inicia o servidor
```

### Instruções para rodar a API

```
#
$

```

### Sobre as rotas criadas

### Executando os testes da API localmente

- No caso do POST passar um objeto no formato JSON:

```javascript
{
  "airports": [
    ["GRU", "BRC", "10"],
    ["BRC", "SCL", "5"],
    ["GRU", "CDG", "75"],
    ["GRU", "SCL", "20"],
    ["GRU", "ORL", "56"],
    ["ORL", "CDG", "5"],
    ["SLC", "ORL", "20"]
  ]
}
```

### Thats it ! :coffee:

---

by Lucas Cunha
