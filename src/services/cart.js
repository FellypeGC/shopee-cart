// quais ações o carrinho pode fazer

// casos de uso

// adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// calcular o total
async function calculateTotal(userCart) {
  console.log("Shopee cart total");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total: ${result}`);
}

// deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// remover um item - diminui um item pelo index
async function removeItemByIndex(userCart, index) {
  // transforma o indice visual do usuário para o indice do back-end
  const deleteIndex = index - 1;

  // é maior do que zero e se é menor do que o tamanho do carrinho
  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

// remover um item - diminui um item 
async function removeItem(userCart, item) {
  // 1 - encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  // 2 - caso não encontre o item
  if (indexFound === -1) {
    console.log("Index não encontrado");
    return;
  }

  // 3 - item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
  } 

  // 4 - caso item = 1 deletar o item
  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
  }
}

async function displayCart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
  });
}

export {
  addItem,
  deleteItem,
  removeItemByIndex,
  removeItem,
  calculateTotal,
  displayCart
}