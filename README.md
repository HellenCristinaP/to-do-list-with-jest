# 📝 To-Do List — Testes Unitários com Jest

## 📌 Descrição do Projeto

Aplicação simples de **listagem e adição de tarefas**, desenvolvida com **Next.js 15**, **TypeScript**, **Jest*- e **Testing Library**.

O projeto tem como objetivo colocar em prática conceitos de **testes unitários em Next.js 15**, trabalhando com:

- Server Components;
- Client Components;
- Hooks personalizados;
- Formulários controlados;
- Componentes reutilizáveis;
- Testes unitários;
- App Router.

---

## 🎯 Objetivo

Implementar e testar uma aplicação de gerenciamento de tarefas que permita:

- Exibir uma lista de tarefas;
- Adicionar novas tarefas;
- Contar a quantidade de tarefas através de um hook personalizado;
- Testar os principais componentes, hooks e comportamentos da aplicação.

---

# 📋 Requisitos

## 1. Estrutura da Aplicação

### Next.js e TypeScript

- [x] Utilizar **Next.js 15**.
- [ ] Utilizar o **App Router**.
- [x] Utilizar **TypeScript**.

### Server Component

- [X] Criar um **Server Component*- em `app/page.tsx`.
- [X] O Server Component deve carregar a lista de tarefas.
- [x] A página deve ser capaz de renderizar as tarefas carregadas.

### Client Component

- [X] Criar um Client Component chamado `<NovaTarefa />`.
- [X] O componente deve permitir a adição de novas tarefas.
- [X] O formulário deve ser **controlado**.
- [x] O componente deve possuir um campo para entrada da tarefa.
- [x] O componente deve possuir um botão para submissão.
- [x] Deve existir validação do input antes da submissão.

### Hook personalizado

- [X] Criar um hook chamado `useContadorDeTarefas`.
- [X] O hook deve retornar a quantidade atual de tarefas.
- [X] O valor retornado pelo hook deve ser testável de forma isolada.

### Dados das tarefas

Os dados podem ser implementados de uma das seguintes formas:

- [ ] Utilizar um array local para armazenar temporariamente as tarefas;

**ou**

- [X] Chamada para a API.

---

# 🧪 2. Testes Unitários

O projeto deve utilizar:

- [x] **Jest**
- [x] **Testing Library**

Os testes devem verificar os principais comportamentos da aplicação.

## Componente `<NovaTarefa />`

Criar testes para:

- [ ] Verificar a renderização correta do componente.
- [ ] Verificar a existência do campo de input.
- [ ] Verificar a existência do botão.
- [ ] Testar a validação do input.
- [ ] Testar a submissão do formulário.
- [ ] Verificar o comportamento esperado ao adicionar uma nova tarefa.

---

## Hook `useContadorDeTarefas`

- [ ] Testar o hook de forma isolada.
- [ ] Utilizar `renderHook`.
- [ ] Verificar o valor retornado pelo hook.
- [ ] Garantir que o número de tarefas retornado esteja correto.

---

## Página

- [ ] Testar a renderização da página.
- [ ] Verificar se as tarefas são exibidas corretamente.
- [ ] Utilizar os dados locais/simulados do projeto.
- [ ] Não depender de uma API externa real para os testes.

---

## Elementos que devem ser verificados

Os testes devem verificar, no mínimo:

- [ ] Renderização correta dos elementos.
- [ ] Valores retornados pelo hook.
- [ ] Comportamento de interação do formulário.
- [ ] Submissão de novas tarefas.
- [ ] Validação do input.

---

# ⚙️ 3. Tecnologias

- [ ] Next.js 15
- [ ] TypeScript
- [ ] React
- [ ] Jest
- [ ] Testing Library
- [ ] App Router

---

# 🧰 4. Ferramentas de Teste

O projeto pode utilizar os seguintes recursos recomendados no enunciado:

- [ ] `jest.mock`
- [ ] `render`
- [ ] `screen`
- [ ] `fireEvent`
- [ ] `act`
- [ ] `renderHook`

---

# 📊 5. Cobertura dos Fluxos Principais

- [ ] Garantir cobertura mínima dos **fluxos principais da aplicação**.
- [ ] Testar a criação de uma nova tarefa.
- [ ] Testar a validação do formulário.
- [ ] Testar a renderização das tarefas.
- [ ] Testar o contador de tarefas.
- [ ] Testar os principais elementos da interface.

---

# 📦 6. Entrega

O projeto deve ser disponibilizado em um **repositório do GitHub**.

O repositório deve conter:

- [ ] Código-fonte completo do projeto.
- [ ] Arquivos de testes.
- [ ] `README.md`.
- [ ] Instruções de instalação.
- [ ] Instruções de execução.
- [ ] Configuração necessária para executar os testes.

# 🚀 8. Instruções do README

O `README.md` deve apresentar pelo menos:

- [ ] Descrição do projeto.
- [ ] Tecnologias utilizadas.
- [ ] Pré-requisitos.
- [ ] Instruções para instalação.
- [ ] Instruções para executar a aplicação.
- [ ] Instruções para executar os testes.
- [ ] Estrutura do projeto.
- [ ] Informações sobre os testes implementados.

---

# 🔍 Checklist Final

Antes da entrega, verificar:

### Aplicação

- [ ] Next.js 15
- [ ] TypeScript
- [ ] App Router
- [ ] `app/page.tsx` como Server Component
- [ ] Lista de tarefas funcionando
- [ ] `<NovaTarefa />` como Client Component
- [ ] Formulário controlado
- [ ] Validação do input
- [ ] Adição de tarefas funcionando
- [ ] `useContadorDeTarefas` implementado
- [ ] Contagem de tarefas funcionando

### Testes

- [ ] Testes com Jest
- [ ] Testes com Testing Library
- [ ] Teste do `<NovaTarefa />`
- [ ] Teste de validação
- [ ] Teste do botão
- [ ] Teste de submissão
- [ ] Teste do `useContadorDeTarefas`
- [ ] Uso de `renderHook`
- [ ] Teste da renderização da página
- [ ] Teste da lista de tarefas
- [ ] Verificação dos valores retornados pelo hook
- [ ] Cobertura dos fluxos principais

### Entrega

- [ ] Repositório no GitHub
- [ ] Código-fonte enviado
- [ ] Testes enviados
- [ ] README criado
- [ ] Instruções de instalação
- [ ] Instruções de execução
- [ ] Instruções dos testes
- [ ] Link do repositório compartilhado

---

## 💡 Observações

O objetivo principal da atividade não é apenas criar uma To-Do List funcional, mas demonstrar a aplicação de **testes unitários em um projeto Next.js 15**, especialmente envolvendo:

1. **Server Components**
2. **Client Components**
3. **Hooks personalizados**
4. **Formulários controlados**
5. **Interações do usuário**
6. **Renderização de componentes**
7. **Testes isolados de hooks**
8. **Testes dos principais fluxos da aplicação**