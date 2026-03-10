#Lista Paginada de Posts — Recuperativa Ind5

Aplicação React que exibe posts paginados da API JSONPlaceholder.

## Tecnologias

- React 18
- Vite
- CSS puro

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Funcionalidades

- Lista paginada de posts da API JSONPlaceholder
- Botão "Carregar mais" que acumula posts sem substituir os anteriores
- Spinner no carregamento inicial
- Mensagem de loading incremental durante carregamentos seguintes
- Tratamento de erros com mensagem e botão "Tentar novamente"
- Mensagem de fim da lista quando não há mais posts
- Grid responsivo (1 coluna mobile, 3 colunas desktop)
- Cards com hover animado

## Estrutura de componentes

```
src/
  App.jsx                    # Estado global + lógica de fetch
  components/
    PostList.jsx             # Grid de cards
    PostCard.jsx             # Card individual (título, corpo, userId)
    LoadMoreButton.jsx       # Botão com estados de loading e fim
```


## API utilizada

JSONPlaceholder — https://jsonplaceholder.typicode.com

Endpoint: `GET /posts?_page={page}&_limit=10`
