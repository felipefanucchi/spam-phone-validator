var PhoneValidator = {
  splittingNumbers: function splittingNumbers(numbers) {
    // Criando uma matriz, com numeros separados em duplas.
    numbers = numbers
      .map((number, index, self) => {
        if (index % 2 === 0) return [number, self[index + 1]]
      })
      .filter((decimalArray) => decimalArray !== undefined)
      .map((decimalArray) => decimalArray.filter((number) => number !== undefined));
  
    // Juntando os valores a cada dupla
    return numbers = numbers.map((decimalArray) => decimalArray.join(''));
  },
  isValid: function isValid(numbers) {
    if (!numbers || !numbers.length) return;
  
    numbers = numbers.replace(/[()-. ]/g, '').split('');
  
    numbers = PhoneValidator.splittingNumbers(numbers);
  
    return !numbers.some((decimal, index, self) => this.validator(decimal, index, self));
  },
  validator: function validator(decimal, index, self) {
    // Array retorna true, se qqr condicional retornar true.
    // eg. ['12', '12', '12']
    // Irei validar se o numero atual, é igual ao proximo, e dois após ele mesmo OU
    // Se o primeiro valor é igual ao terceiro e se o segundo é igual o quarto.
    return decimal === self[index + 1] && decimal === self[index + 2] ||
      decimal === self[index + 2] && self[index + 1] === self[index + 3];
  }
  
}