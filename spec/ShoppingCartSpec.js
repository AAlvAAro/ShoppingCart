'use_strict';

describe("ShoppingCart", function() {
  var ShoppingCart = require("../ShoppingCart.js");
  var cart, invalidItem, item, item2;

  beforeEach(function() {
    cart = new ShoppingCart({});    
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
    cart._options.taxRate = 16;
    addTwoItems();
    expect(cart.netTotal()).toEqual(cart.getTotal() * 
      getPercentaje(cart._options.taxRate, "taxRate")); 
  });

  it("should calculate the price after a client discount", function() {
    cart._options.clientDiscount = 5;
    addTwoItems();
    expect(cart.netTotal()).toEqual(cart.getTotal() * 
      getPercentaje(cart._options.clientDiscount, "clientDiscount")); 
  });

  it("should calculate the price after a client discount and taxes", function() {
    var priceWithDiscount;
    cart._options.taxRate = 16;
    cart._options.clientDiscount = 5;
    addTwoItems();
    priceWithDiscount = cart.getTotal() * getPercentaje(cart._options.clientDiscount, "clientDiscount");
    expect(cart.netTotal()).toEqual(priceWithDiscount * getPercentaje(cart._options.taxRate, "taxRate"));
  });

  it("should get the total ammount of taxes to pay", function() {
    cart._options.taxRate = 16;
    addTwoItems();
    expect(cart.getTaxes()).toEqual(cart.getTotal() * cart._options.taxRate); 
  });

  function addTwoItems() {
    cart.addItem(item);
    cart.addItem(item2);
  }

  function getPercentaje(percentaje, type) {
    return 1 - (cart._options[type] / 100); 
  }
});
