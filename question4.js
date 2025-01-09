const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  function calcularPercentualFaturamento(faturamento) {
    const faturamentoTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
  
    const percentuais = Object.entries(faturamento).reduce((acc, [estado, valor]) => {
      acc[estado] = ((valor / faturamentoTotal) * 100).toFixed(2);
      return acc;
    }, {});
  
    return percentuais;
  }
  
  const percentuais = calcularPercentualFaturamento(faturamentoPorEstado);
  
  console.log("Percentual de faturamento por estado:");
  for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
  }