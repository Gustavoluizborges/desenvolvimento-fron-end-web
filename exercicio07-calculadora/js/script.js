// Seleção dos elementos
const campoValor1 = document.getElementById("valor1");
const campoValor2 = document.getElementById("valor2");
const botaoCalcular = document.getElementById("botao-calcular");
const botaoLimpar = document.getElementById("botao-limpar");
const resultado = document.getElementById("resultado");

// Função que faz a conta de acordo com a operação escolhida
function calcular(valor1, valor2, operacao) {
  switch (operacao) {
    case "soma":
      return valor1 + valor2;
    case "subtracao":
      return valor1 - valor2;
    case "multiplicacao":
      return valor1 * valor2;
    case "divisao":
      return valor1 / valor2;
    default:
      return null;
  }
}

function mostrarMensagem(texto, ehErro) {
  resultado.textContent = texto;
  if (ehErro) {
    resultado.classList.add("erro");
  } else {
    resultado.classList.remove("erro");
  }
}

botaoCalcular.addEventListener("click", function () {
  // Os valores dos inputs chegam como texto: é preciso converter (parse)
  const texto1 = campoValor1.value.trim();
  const texto2 = campoValor2.value.trim();

  if (texto1 === "" || texto2 === "") {
    mostrarMensagem("Preencha os dois valores.", true);
    return;
  }

  const valor1 = parseFloat(texto1);
  const valor2 = parseFloat(texto2);
  const operacao = document.querySelector('input[name="operacao"]:checked').value;

  if (operacao === "divisao" && valor2 === 0) {
    mostrarMensagem("Não é possível dividir por zero.", true);
    return;
  }

  const total = calcular(valor1, valor2, operacao);
  mostrarMensagem(`Resultado: ${total}`, false);
});

botaoLimpar.addEventListener("click", function () {
  mostrarMensagem("O resultado aparecerá aqui.", false);
});
