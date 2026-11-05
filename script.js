function gerarTriangulo(altura) {
  let desenho = '';

  for (let linha = 1; linha <= altura; linha++) {
    desenho += ' '.repeat(altura - linha);
    desenho += '#'.repeat(linha) + '\n';
  }

  return desenho;
}

function gerarArvore(altura) {
  // Duas colunas de margem deixam a copa centralizada sobre a base.
  let desenho = ' '.repeat(altura + 1) + '☆\n';

  for (let linha = 1; linha <= altura; linha++) {
    desenho += ' '.repeat(altura - linha + 2);
    desenho += '#'.repeat(linha * 2) + '\n';
  }

  const alturaCaule = Math.floor(altura / 2);

  for (let linha = 1; linha <= alturaCaule; linha++) {
    // A última linha do caule também forma a base.
    if (linha === alturaCaule) {
      desenho += '_'.repeat(altura + 1) + '##';
      desenho += '_'.repeat(altura + 1) + '\n';
    } else {
      desenho += ' '.repeat(altura + 1) + '##\n';
    }
  }

  return desenho;
}

function imprimir(tipo, destino) {
  const entrada = prompt('Informe a altura (número inteiro positivo):');
  if (entrada === null) return; // O usuário clicou em Cancelar.

  const altura = Number(entrada);
  if (!Number.isSafeInteger(altura) || altura <= 0) {
    alert('Digite um número inteiro maior que zero.');
    return;
  }

  const desenho = tipo === 'triangulo'
    ? gerarTriangulo(altura)
    : gerarArvore(altura);

  if (destino === 'console') {
    console.log(desenho);
  } else {
    // textContent escreve o desenho; <pre> preserva espaços e quebras.
    document.getElementById(tipo).textContent = desenho;
  }
}

// Conecta os quatro botoes as suas respectivas acoes.
document.querySelectorAll('button[data-tipo]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    imprimir(botao.dataset.tipo, botao.dataset.destino);
  });
});
