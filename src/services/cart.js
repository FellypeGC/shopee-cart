// which actions the cart can do

// use cases

// add item in the cart
async function addItem(userCart, item) {
  userCart.push(item);
}

// calculate total
async function calculateTotal(userCart) {
  console.log("Shopee cart total");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total: ${result}`);
}

// delete item from cart
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// remove an item - decreases an item by index
async function removeItemByIndex(userCart, index) {
  // transforms the user's visual index to the backend index
  const deleteIndex = index - 1;

  // is greater than zero and if it is less than the cart size
  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

// remove an item - decreases an item 
async function removeItem(userCart, item) {
  // 1 - find the index of the item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  // 2 - case not find the item
  if (indexFound === -1) {
    console.log("Index não encontrado");
    return;
  }

  // 3 - item > 1 subtract one item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
  } 

  // 4 - case item = 1 delete the item
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