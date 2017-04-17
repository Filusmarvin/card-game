// * Shopping Cart
// * the cart should display its contents:
// "Total:
// ******
// 1 blue shirt (M) $19x1
// 2 red shirts (L) $24x2
// ******
//                  $67"
// * the user should be able to add a shirt to the cart
// * apply a discount of 10% after 5 shirts are added
// * apply a discount of 15% after 10 shirts
// * the user should be able to remove a shirt from the cart

let assert = require('assert');
let Cart = require('../lib/Cart');
let Shirt = require('../lib/Shirt')

describe('ShoppingCart')
