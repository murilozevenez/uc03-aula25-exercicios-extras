const { questionFloat } = require('readline-sync');
const { imprimeValoresParcela } = require('./function-utils')


const valorDivida = questionFloat("Informe o valor da dívida: ");

console.log('Vlr Dívida\tVlr Juros\tNum Parcelas\tVlr Parcela');

let percentualJuros = 0;
let numParcelas = 0;

for (let parcela = 0; parcela <= 12; parcela = parcela + 3) {
  if (parcela == 0) {
    numParcelas = parcela + 1;
    percentualJuros = 0;
  } else if (parcela == 3) {
    numParcelas = parcela;
    percentualJuros = 10;
  } else if (parcela == 6) {
    numParcelas = parcela;
    percentualJuros = 15;
  } else if (parcela == 9) {
    numParcelas = parcela;
    percentualJuros = 20;
  } else if (parcela == 12) {
    numParcelas = parcela;
    percentualJuros = 25;
  }
  imprimeValoresParcela(valorDivida, numParcelas, percentualJuros);
}