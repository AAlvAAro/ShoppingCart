describe("ShoppingCart", function() {
  var ShoppingCart = require("../ShoppingCart.js");
  var cart, invalidItem, item, item2;

  beforeEach(function() {
    cart = new ShoppingCart();    
    invalidItem = "MacBook Pro";

    item = {
      name: "MacBook Pro",
      price: 1200.00,
      sku: "MBP-200" 
    };

    item2 = {
      name: "Chromebook",
      price: 150.00,
      sku: "CHB-200" 
    };
  });

  afterEach(function() {
    cart = undefined;
  });

  it("should only add objects to the cart with name, sku and price", function() {
    cart.addItem(invalidItem);
    expect(cart.getItems().length).toEqual(0);
    expect(cart.getItems()[0]).not.toBe(invalidItem);
    cart.addItem(item);
    expect(cart.getItems().length).toEqual(1);
    expect(cart.getItems()[0]).toBe(item);
  });

  it("should remove items to the cart", function() {
    cart.removeItem("item");
    expect(cart.getItems().length).toEqual(0);
  });

  it("should return the total of the purchase", function() {
    cart.addItem(item);
    expect(cart.getTotal()).toEqual(1200);
    cart.addItem(item2);
    expect(cart.getTotal()).toEqual(1350);
  });

    
});
