function getValue() {
  let items = [];
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    const value = parseInt(document.getElementById("number").value);

    items.push(value);
    console.log(items);
    let arr = items.bubble();
  });
}

getValue(items);

function bubble(items) {
  for (let j = 0; j > items.length - 1; j++) {
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i] > items[j]) {
        [items[i], (items[i + 1] = [items[i + 1], items[i]])];
      }
    }
  }
  console.log(items);
  return items;
}

bubble(items);
