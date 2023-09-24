let numbersUnorded = [];

function action() {
  const getBtn = document.getElementById("btn");
  getBtn.addEventListener("click", () => {
    iteracao(numbersUnorded);
  });

  const getBtnOrder = document.getElementById("btnOrder");
  getBtnOrder.addEventListener("click", () => {
    insertionSort(numbersUnorded);
  });
}
action();

function insertionSort(numbersUnorded) {
  let current;
  for (let i = 1; i < vetor.length; i++) {
    let j = i - 1;
    current = vetor[i];
    while (j >= 0 && current < vetor[j]) {
      numbersUnorded[j + 1] = numbersUnorded[j];
      j--;
    }
    numbersUnorded[j + 1] = atual;
  }
  const numbersOrderd = [...numbersUnorded];
  console.log(numbersOrderd);
  return numbersOrderd;
}

function iteracao(numbersUnorded) {
  const getValue = parseInt(document.getElementById("value").value);
  const getBtn = document.getElementById("btn");

  getBtn.addEventListener("click", () => {
    if (!isNaN(getValue)) {
      numbersUnorded.push(getValue);
    }
  });
}
