import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = [];
const myWishList = []; // possible feature for adding to a wish list

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);

// added two items in the cart
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// remove item by index
await cartService.removeItemByIndex(myCart, 1);

// remove item
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

// deleted two items from cart
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);

// console.log(item2.subtotal());