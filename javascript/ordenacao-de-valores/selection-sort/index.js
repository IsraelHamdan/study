let arr = []; // array que guarda os valores, o array é como se fosse uma caixa

function inputInArr() {
  const getBtn = document
    .getElementById("btn")
    .addEventListener("click", () => {
      const getValue = parseInt(document.getElementById("value").value);
      arr.push(getValue);
      document.getElementById("value").value = "";
      console.log([...arr]);
      return [...arr];
    });
}

const getOrderBtn = () => {
  const btn = document
    .getElementById("btnOrder")
    .addEventListener("click", () => {
      selection([...arr]);
    });
};

getOrderBtn();

function selection(arr) {
  let menor; // variável que indica o menor valor

  // laço externo
  for (let i = 0; i < arr.length - 1; i++) {
    /* 
      controlador = 0; Se controlador é menor que o comprimento do array - ultimo elemento; acrescente 1 ao contador

      ao acontecer isso, o menor elemento recebe o valor do controlador 
    */
    menor = i;

    // laço interno
    for (let j = i + 1; j < arr.length; j++) {
      // controlador = controlador do primeiro laço + 1; Se Controlador é menor que comprimento do array ou seja a quantidade de objetos dentro da caixa; acrescente 1 ao contador j

      // Verifica se o contador i é diferente do menor elemento
      if (i != menor) {
        [arr[i], arr[menor]] = [arr[menor], vetor[i]];
      }
    }
    return arr;
  }
}

inputInArr();
