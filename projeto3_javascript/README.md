# Projeto 3 - Painel Interativo: Descubra seu caminho no Front-End

**Integrante:** Gustavo Luiz Borges (individual - responsável pelo HTML, CSS, JavaScript, testes e documentação).

## Como abrir
Abra `index.html` no navegador.

## Estrutura
```
projeto3_javascript/
├── index.html
├── README.md
├── css/
│   └── estilo.css
└── js/
    └── script.js
```

## Funcionamento
1. O visitante digita o nome e escolhe uma área (HTML, CSS ou JavaScript).
2. Ao clicar em **Gerar orientação**, o JavaScript lê os campos, valida o nome e mostra uma mensagem personalizada na própria página.
3. Se o nome estiver vazio, aparece uma orientação de erro no lugar do resultado.
4. O botão **Alterar tema** alterna entre tema claro e escuro.

Exemplo: nome "Ana" + CSS → "Olá, Ana! Continue praticando cores, espaçamentos, Flexbox, Grid e responsividade."

## Comandos JavaScript utilizados
| Comando | Uso no projeto |
|---|---|
| `document.getElementById()` / `querySelector()` | Localizar campos, botões e área de resultado |
| `const` e `let` | Guardar elementos e a mensagem |
| `addEventListener('click', ...)` | Executar ações quando os botões são clicados |
| `.value` e `.trim()` | Ler o nome e ignorar espaços em branco |
| `if/else` e `switch` | Validar o nome e escolher a mensagem por área |
| Template string `` `Olá, ${nome}!` `` | Inserir o nome na mensagem |
| `.textContent` | Exibir o resultado na página |
| função `gerarOrientacao()` | Montar a mensagem |
| `.classList.toggle()` | Alternar o tema escuro |

## Testes realizados
- Nome vazio e nome só com espaços: mostra a mensagem de erro.
- Cada uma das três áreas: mostra a mensagem correspondente.
- Troca de tema claro/escuro.
- Tela pequena: botões ficam empilhados.
