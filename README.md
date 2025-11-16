# Mentor IA — GS 2025.2

**Tema:** Soluções Disruptivas de IA para o Futuro do Trabalho  
**Disciplina:** Front End & Mobile Development (2TIAPR)  
**Professor:** Hete Caetano

---

## Descrição do projeto
**Mentor IA** é um Web App (React + Vite) que simula um orientador de carreira baseado em respostas pré-programadas.  
O objetivo é demonstrar conceitos de interfaces conversacionais, persistência local e visualização de skills — tudo sem integrar uma IA real (requisito da disciplina).

Funcionalidades principais:
- Chat simulado **Mentor IA** com histórico salvo em `localStorage`.
- CRUD de **Skills** (adicionar / remover) com persistência local.
- **Dashboard** simples que mostra o “nível de preparo” baseado na quantidade de skills cadastradas.
- Navegação entre as telas (Mentor IA / Skills / Dashboard).
- Estrutura de código organizada e componentes reutilizáveis.

---

## Tecnologias
- **React** (Vite)
- **JavaScript (ES6+)**
- CSS (arquivo global)
- localStorage (persistência no navegador)

---

## 🔧 Pré-requisitos
- Node.js (v16+ recomendado)  
- npm (v8+ recomendado)  
- Navegador moderno (Chrome/Edge/Firefox)

---

##  Instalação (local)
1. Clone o repositório:
```bash```
git clone https://github.com/Matheus-Baarbosa/mentor-ia-gs-2025.git
cd mentor-ia-gs-2025

2. Instale dependências:

npm install

3. Rode em modo desenvolvimento:

npm run dev

4. Abra no navegador:

Acesse http://localhost:5173/ (ou o endereço exibido no terminal).

## Scripts úteis

npm run dev      # inicia o servidor de desenvolvimento
npm run build    # gera build para produção (pasta dist/)
npm run preview  # pré-visualiza o build gerado localmente

## Estrutura do projeto (resumida)

src/
 ├─ components/      # componentes reutilizáveis (Navbar, ui/Button, ui/Input, Card...)
 ├─ hooks/           # hooks customizados (useLocalStorage)
 ├─ pages/           # telas (MentorIA, Skills, Dashboard)
 ├─ styles/          # CSS global / tema
 ├─ utils/           # helpers (responses.js)
 ├─ App.jsx
 └─ main.jsx

## Como usar (fluxo rápido)

Chat — Mentor IA

Vá para a aba Mentor IA.

Digite uma pergunta (ex.: Quais carreiras estão em alta?) e clique Enviar.

A resposta do mentor aparece e o histórico é salvo automaticamente.

Skills (CRUD)

Vá para Skills.

Digite uma skill e clique Adicionar.

A skill aparece na lista; remova com Remover.

Dashboard

Mostra o total de skills e uma barra de progresso que representa o "nível de preparo".



