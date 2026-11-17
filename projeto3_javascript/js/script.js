// 1. Seleção dos elementos
const campoNome = document.getElementById("nome");
const campoArea = document.querySelector("#area");
const botaoOrientacao = document.getElementById("botao-orientacao");
const botaoTema = document.getElementById("botao-tema");
const resultado = document.getElementById("resultado");

// 2. Função que monta a orientação de acordo com a área escolhida
function gerarOrientacao(nome, area) {
  let mensagem = "";

  switch (area) {
    case "html":
      mensagem = `Olá, ${nome}! Comece pela estrutura: pratique tags semânticas, formulários e acessibilidade.`;
      break;
    case "css":
      mensagem = `Olá, ${nome}! Continue praticando cores, espaçamentos, Flexbox, Grid e responsividade.`;
      break;
    case "javascript":
      mensagem = `Olá, ${nome}! Treine variáveis, eventos, condicionais e a manipulação de elementos da página.`;
      break;
    default:
      mensagem = `Olá, ${nome}! Escolha uma área para receber sua orientação.`;
  }

  return mensagem;
}

// 3. Evento do botão "Gerar orientação"
botaoOrientacao.addEventListener("click", function () {
  const nome = campoNome.value.trim();
  const area = campoArea.value;

  // Validação: nome vazio ou só com espaços
  if (nome === "") {
    resultado.textContent = "Por favor, preencha o seu nome para receber a orientação.";
    resultado.classList.remove("mensagem-sucesso");
    resultado.classList.add("mensagem-erro");
    campoNome.focus();
  } else {
    resultado.textContent = gerarOrientacao(nome, area);
    resultado.classList.remove("mensagem-erro");
    resultado.classList.add("mensagem-sucesso");
  }
});

// 4. Evento do botão "Alterar tema"
botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");
});
