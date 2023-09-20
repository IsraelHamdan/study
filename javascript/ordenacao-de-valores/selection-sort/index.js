const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pergunte ao usuário quantos elementos ele deseja inserir
rl.question("Quantos elementos você deseja inserir? ", (numElements) => {
  numElements = parseInt(numElements);
  if (isNaN(numElements) || numElements <= 0) {
    console.log("Por favor, insira um número válido maior que zero.");
    rl.close();
    return;
  }

  let arr = [];
  let count = 0;

  // Crie um loop para inserir os elementos
  function insertElement() {
    rl.question(`Insira o elemento ${count + 1}: `, (input) => {
      const element = parseInt(input);
      if (!isNaN(element)) {
        arr.push(element);
        count++;

        if (count < numElements) {
          // Continue pedindo elementos até atingir o número desejado
          insertElement();
        } else {
          // Todos os elementos foram inseridos, exiba o array
          console.log("Array inserido:", arr);
          rl.close();
        }
      } else {
        console.log("Por favor, insira um número válido.");
        // Se a entrada não for um número válido, continue pedindo
        insertElement();
      }
    });
  }

  // Inicie o processo de inserção
  insertElement();
});
