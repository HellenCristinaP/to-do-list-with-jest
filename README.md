# 📝 To-Do List — Testes Unitários com Jest

## Como rodar esse projeto
1º Clone o projeto

git clone https://github.com/HellenCristinaP/to-do-list-with-jest
2º Instale as depêndencias e rode o projeto

npm install
3º Crie uma pasta .env no projeto raiz e crie duas variáveis:

NEXT_PUBLIC_URL_API={URL da API aqui}

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
- [x] Utilizar o **App Router**.
- [x] Utilizar **TypeScript**.

### Server Component

- [x] Criar um \*_Server Component_- em `app/page.tsx`.
- [x] O Server Component deve carregar a lista de tarefas.
- [x] A página deve ser capaz de renderizar as tarefas carregadas.

### Client Component

- [x] Criar um Client Component chamado `<NovaTarefa />`.
- [x] O componente deve permitir a adição de novas tarefas.
- [x] O formulário deve ser **controlado**.
- [x] O componente deve possuir um campo para entrada da tarefa.
- [x] O componente deve possuir um botão para submissão.
- [x] Deve existir validação do input antes da submissão.

### Hook personalizado

- [x] Criar um hook chamado `useContadorDeTarefas`.
- [x] O hook deve retornar a quantidade atual de tarefas.
- [x] O valor retornado pelo hook deve ser testável de forma isolada.

### Dados das tarefas

Os dados podem ser implementados de uma das seguintes formas:

- [ ] Utilizar um array local para armazenar temporariamente as tarefas;

**ou**

- [x] Chamada para a API.

---

# 🧪 2. Testes Unitários

O projeto deve utilizar:

- [x] **Jest**
- [x] **Testing Library**

Os testes devem verificar os principais comportamentos da aplicação.

## Componente `<NovaTarefa />`

Criar testes para:

- [x] Verificar a renderização correta do componente.
- [x] Verificar a existência do campo de input.
- [x] Verificar a existência do botão.
- [x] Testar a validação do input.
- [x] Testar a submissão do formulário.
- [] Verificar o comportamento esperado ao adicionar uma nova tarefa.

---

## Hook `useContadorDeTarefas`

- [x] Testar o hook de forma isolada.
- [x] Utilizar `renderHook`.
- [x] Verificar o valor retornado pelo hook.
- [x] Garantir que o número de tarefas retornado esteja correto.

---

## Página

- [x] Testar a renderização da página.
- [ ] Verificar se as tarefas são exibidas corretamente.
- [ ] Utilizar os dados locais/simulados do projeto.
- [ ] Não depender de uma API externa real para os testes.

---

## Elementos que devem ser verificados

Os testes devem verificar, no mínimo:

- [x] Renderização correta dos elementos.
- [x] Valores retornados pelo hook.
- [x] Comportamento de interação do formulário.
- [x] Submissão de novas tarefas.
- [x] Validação do input.

---

# 🧰 3. Ferramentas de Teste

O projeto pode utilizar os seguintes recursos recomendados no enunciado:

- [x] `jest.mock`
- [x] `render`
- [x] `screen`
- [x] `fireEvent`
- [ ] `act`
- [x] `renderHook`

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

- [x] Next.js latest
- [x] TypeScript
- [x] App Router
- [x] `app/page.tsx` como Server Component
- [x] Lista de tarefas funcionando
- [x] `<NovaTarefa />` como Client Component
- [x] Formulário controlado
- [x] Validação do input
- [x] Adição de tarefas funcionando
- [x] `useContadorDeTarefas` implementado
- [x] Contagem de tarefas funcionando

### Testes

- [ ] Testes com Jest
- [ ] Testes com Testing Library
- [ ] Teste do `<NovaTarefa />`
- [ ] Teste de validação
- [ ] Teste do botão
- [ ] Teste de submissão
- [x] Teste do `useContadorDeTarefas`
- [x] Uso de `renderHook`
- [ ] Teste da renderização da página
- [ ] Teste da lista de tarefas
- [ ] Verificação dos valores retornados pelo hook
- [ ] Cobertura dos fluxos principais

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
