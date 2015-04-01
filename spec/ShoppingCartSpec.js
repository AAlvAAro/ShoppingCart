describe("ShoppingCart", function() {
  var ShoppingCart = require("../ShoppingCart.js");
  var cart, item, obj;

  beforeEach(function() {
    cart = new ShoppingCart();    
    item = "MacBook Pro";
    obj = {
      name: "MacBook Pro",
      price: 100.00,
      sku: "ABC123-200" 
    }
  });

  it("should only add objects to the cart with name, sku and price", function() {
    cart.addItem(item);
    expect(cart.getItems().length).toEqual(0);
    expect(cart.getItems()[0]).not.toBe(item);
    cart.addItem(obj);
    expect(cart.getItems().length).toEqual(1);
    expect(cart.getItems()[0]).toBe(obj);
  });

  it("should remove items to the cart", function() {
    cart.removeItem("item");
    expect(cart.getItems().length).toEqual(0);
  });

  it("should return the total of the purchase", function() {
    cart.addItem(obj);
    expect(cart.getTotal()).toEqual(200.00);
  });

    
});
