# 🧠 To-Do Inteligente

## 📌 Sobre o Projeto

O **To-Do Inteligente** é uma aplicação web desenvolvida com foco na organização de tarefas do dia a dia. O sistema permite ao usuário visualizar, concluir e desmarcar tarefas de forma dinâmica, com atualização em tempo real dos indicadores do dashboard.

Este projeto foi desenvolvido como parte da disciplina de **Desenvolvimento de Software Web**, com o objetivo de aplicar conceitos modernos de desenvolvimento front-end utilizando **React**, **TypeScript** e **Bootstrap**.

---

## 🎯 Objetivos do Projeto

* Aplicar conceitos de componentização em React
* Utilizar TypeScript para tipagem segura dos dados
* Criar uma interface responsiva com Bootstrap
* Implementar controle de estado com atualização dinâmica
* Seguir boas práticas de organização de código

---

## ⚙️ Tecnologias Utilizadas

* ⚛️ React (com Vite)
* 🟦 TypeScript
* 🎨 Bootstrap (via CDN)
* 💅 CSS personalizado

---

## 🧱 Arquitetura do Projeto

A aplicação foi estruturada seguindo o princípio de **separação de responsabilidades**, dividindo a interface em componentes reutilizáveis:

```
src/
 ├── components/
 │    ├── Header.tsx
 │    ├── Sidebar.tsx
 │    ├── Dashboard.tsx
 │    ├── TaskCard.tsx
 │
 ├── pages/
 │    └── Home.tsx
 │
 ├── types/
 │    └── Task.ts
 │
 ├── styles/
 │    └── custom.css
```

### 🔍 Descrição dos Componentes

* **Header** → Responsável pelo topo da aplicação
* **Sidebar** → Menu lateral de navegação
* **Dashboard** → Exibe indicadores (total, concluídas, pendentes)
* **TaskCard** → Representa uma tarefa individual
* **Home** → Página principal que gerencia estado e lógica

Essa organização facilita:

* manutenção
* reutilização de código
* escalabilidade do sistema

---

## 🔄 Funcionalidades

✔ Listagem de tarefas
✔ Conclusão de tarefas
✔ Desmarcar tarefas
✔ Dashboard com contadores dinâmicos
✔ Atualização em tempo real
✔ Interface responsiva

---

## 🧠 Lógica de Funcionamento

A aplicação utiliza o hook `useState` para gerenciar o estado das tarefas.
Cada interação do usuário (como concluir ou desmarcar uma tarefa) atualiza o estado global, refletindo automaticamente:

* Mudança visual da tarefa
* Atualização dos dados no dashboard

---

## 📱 Responsividade

A interface foi construída utilizando o sistema de grid do Bootstrap (12 colunas), garantindo:

* Layout adaptável em diferentes tamanhos de tela
* Sidebar lateral no desktop
* Empilhamento no mobile

---

## 🧾 Requisitos Atendidos

✔ Componentização
✔ Organização de pastas
✔ Tipagem com TypeScript
✔ Uso de Bootstrap + CSS externo
✔ HTML semântico (`header`, `main`, `section`, `aside`, `address`)
✔ Dashboard dinâmico
✔ Responsividade

---

## 🚀 Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

---

## 👨‍💻 Autor

**Matteo Caetano**
📅 2026
📚 Análise e Desenvolvimento de Sistemas
📖 Disciplina: Desenvolvimento de Software Web

---

## 🎥 Observação

Este projeto acompanha um vídeo explicativo demonstrando as decisões técnicas, arquitetura e funcionamento da aplicação.

---
