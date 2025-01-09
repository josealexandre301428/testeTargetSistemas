const readline = require('readline').createInterface({
    input: process.stdin
  });
  
  const isFibonacci = (num) => {
    let a = 0;
    let b = 1;
    let fib = b;
  
    while (fib < num) {
      fib = a + b;
      a = b;
      b = fib;
    }
  
    return fib === num;
  };
  
  readline.question('Qual número vamos testar? -> ', (num) => {
    const inputNumber = parseInt(num); // Converte a entrada para um número inteiro
  
    if (isNaN(inputNumber)) {
      console.log('Por favor, insira um número válido.');
    } else {
      const resultado = isFibonacci(inputNumber);
      console.log(resultado ? `${inputNumber} é um número de Fibonacci.` : `${inputNumber} não é um número de Fibonacci.`);
    }
  
    readline.close();
  });