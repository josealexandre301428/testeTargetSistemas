const fs = require('fs');


const data = JSON.parse(fs.readFileSync('faturamento.json'));


function calcularFaturamento(dados) {

  const valoresValidos = dados.filter(dia => dia.valor !== null);


  const somaTotal = valoresValidos.reduce((acc, dia) => acc + dia.valor, 0);

  const mediaMensal = somaTotal / valoresValidos.length;

  const menorValor = Math.min(...valoresValidos.map(dia => dia.valor));
  const maiorValor = Math.max(...valoresValidos.map(dia => dia.valor));

  const diasAcimaDaMedia = valoresValidos.filter(dia => dia.valor > mediaMensal).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia,
    mediaMensal
  };
}

const resultado = calcularFaturamento(data);
console.log('Menor valor de faturamento:', resultado.menorValor.toFixed(2));
console.log('Maior valor de faturamento:', resultado.maiorValor.toFixed(2));
console.log('Número de dias acima da média:', resultado.diasAcimaDaMedia.toFixed(2));
console.log('Média mensal:', resultado.mediaMensal.toFixed(2));