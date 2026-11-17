# Projeto 2 - Interface Express (CSS com IA)

**Tema:** Passo Firme, um clube de corrida fictício para iniciantes.
**Integrante:** Gustavo Luiz Borges (individual).

## Como abrir
Abra `index.html` no navegador. Todo o CSS está em `css/estilo.css`.

## Estrutura
```
projeto2_interface_express/
├── index.html
├── README.md
└── css/
    └── estilo.css
```

## O que foi feito
- Cabeçalho com nome, frase curta e menu com 3 links internos (Flexbox).
- Apresentação com título, parágrafo e botão de chamada.
- Três cards de destaque organizados com Grid.
- Formulário demonstrativo de participação.
- Rodapé com grupo, turma e aviso de atividade acadêmica.
- Seletores: elementos, classes (`.cabecalho`, `.card`, `.botao`, `.cards`...), id (`#menu-principal`) e hierárquico (`.menu a`).
- `:hover`, `:focus`, `transition` e `transform: scale()`.
- `@media (max-width: 700px)` coloca os cards em uma coluna.

## Prompts principais usados
1. "Crie somente o HTML5 semântico, sem CSS e sem JavaScript, para uma landing page sobre um clube de corrida para iniciantes. Use header, nav, main, três sections e footer. Inclua menu com links internos, apresentação, três cards informativos e um formulário demonstrativo simples. Crie nomes de classes claros."
2. "Estou aprendendo CSS e quero melhorar os cards. Sugira 3 propriedades que ainda não aparecem no meu código. Explique cada uma em linguagem simples, mostre um exemplo pequeno e proponha um valor para eu alterar. Não reescreva o projeto inteiro."

## Propriedades novas testadas
| Propriedade | Elemento | Finalidade | Resultado do teste | Mantida? |
|---|---|---|---|---|
| `clamp()` | `h2` | Tamanho de fonte fluido entre um mínimo e um máximo | Títulos diminuem no celular sem precisar de media query | Sim |
| `linear-gradient()` | `.apresentacao` | Fundo em degradê | Ao trocar 135deg por 90deg o degradê fica horizontal | Sim |
| `accent-color` | checkbox do formulário | Muda a cor do controle nativo | O checkbox ficou na cor coral da paleta | Sim (extra) |

Também foi usado `box-shadow` nos cards para dar profundidade.
