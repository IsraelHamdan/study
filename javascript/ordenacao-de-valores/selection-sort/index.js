var arr = [];

function getName() {
  const getBtn = document.getElementById("btn");

  getBtn.addEventListener("click", () => {
    const getValue = parseInt(document.getElementById("value").value);

    arr.push(getValue);

    document.getElementById("value").value = "";
    selection([...arr]);
  });
}

function selection(e) {}

getName();
