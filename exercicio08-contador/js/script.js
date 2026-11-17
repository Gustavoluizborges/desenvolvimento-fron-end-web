const numero = document.getElementById("numero");
const mensagem = document.getElementById("mensagem");
const botaoAumentar = document.getElementById("botao-aumentar");
const botaoDiminuir = document.getElementById("botao-diminuir");
const botaoZerar = document.getElementById("botao-zerar");

const LIMITE = 10;
let contador = 0;

// Atualiza o número na tela e a cor conforme o valor
function atualizarTela() {
  numero.textContent = contador;
  numero.className = "numero";

  if (contador === 0) {
    numero.classList.add("zero");
  } else if (contador < 5) {
    numero.classList.add("baixo");
  } else if (contador < LIMITE) {
    numero.classList.add("alto");
  } else {
    numero.classList.add("maximo");
  }
}

function aumentar() {
  if (contador < LIMITE) {
    contador++;
    mensagem.textContent = "";
  } else {
    mensagem.textContent = `O limite é ${LIMITE}.`;
  }
  atualizarTela();
}

function diminuir() {
  if (contador > 0) {
    contador--;
    mensagem.textContent = "";
  } else {
    mensagem.textContent = "O contador não pode ficar negativo.";
  }
  atualizarTela();
}

function zerar() {
  contador = 0;
  mensagem.textContent = "Contador zerado.";
  atualizarTela();
}

botaoAumentar.addEventListener("click", aumentar);
botaoDiminuir.addEventListener("click", diminuir);
botaoZerar.addEventListener("click", zerar);

atualizarTela();
