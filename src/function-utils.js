function imprimeValoresParcela(valorDivida, quantidadeParcelas, percentualJuros) {
    const valorJuros = (valorDivida * percentualJuros) / 100
    const valorTotalDivida = valorDivida + valorJuros;
    const valorParcela = valorTotalDivida / quantidadeParcelas;
    console.log(`${valorTotalDivida}\t\t${valorJuros}\t\t${quantidadeParcelas}\t\t${valorParcela.toFixed(2)}`)
  }
  
  function calculaLucro(valorDeposito, percentualRendimento) {
    return (valorDeposito * percentualRendimento) / 100;
  }
  
  module.exports = { imprimeValoresParcela, calculaLucro }