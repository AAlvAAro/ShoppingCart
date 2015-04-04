describe("ShoppingCart", function() {
  var ShoppingCart = require("../ShoppingCart.js");
  var cart, invalidItem, item, item2;

  beforeEach(function() {
    cart = new ShoppingCart({});    
    cartWithTaxes = new ShoppingCart({
      taxRate: 16,
      clientDiscount: 5
    });
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
    addTwoItems();
    expect(cart.getTotal()).toEqual(1350);
  });

  it("should calculate the price before and after taxes", function() {
    addTwoItems();
    expect(cart.netTotal()).toEqual(cart.getTotal() * 
      getMinusPercentaje(cart._options.taxRate, "taxRate")); 
  });

  it("should be able to add a general discount, and calculate the total", function() {
    cart.addCustomDiscount(); 
    addTwoItems();
    expect(cart.netTotal()).toEqual(cart.getTotal() * getMinusPercentaje(
      [cart._options.taxRate, cart._options.clientDiscount]
    )); 
  });

  function addTwoItems() {
    cart.addItem(item);
    cart.addItem(item2);
  }

  function getMinusPercentaje(percentajes, type) {
    if(typeof percentajes === "array") {
      var total;
      percentajes.forEach(function(percentaje) {
        total += percentaje; 
      });
      return 1 - (total / 100);
    }
    
    return 1 - (cart._options[type] / 100); 
  }
});
