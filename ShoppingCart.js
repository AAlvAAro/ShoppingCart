var ShoppingCart = (function() {
  function ShoppingCart() {
    var total = 0,
        items = [];
    

    this.getItems = function() {
      return items; 
    }

    this.addItem = function(item) {
      if(typeof item === "object") {
        items.push(item);
        total += item.price;
      }
    }
    
    this.removeItem = function(item) {
      items.splice(item, 1); 
    }

    this.getTotal = function() {
      return total;
    }
  };
  return ShoppingCart;
})();

module.exports = ShoppingCart;
