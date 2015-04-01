function ShoppingCart() {
  var total = 0,
      items = [];
  

  this.getItems = function() {
    return items; 
  }

  this.addItem = function(item) {
    if(typeof item === "object") {
      items.push(item);
    }
  }
  
  this.removeItem = function(item) {
    items.splice(item, 1); 
  }

  this.getTotal = function() {
    for(item in items) {
      total = total + item.price;
    } 
    return total;
  }
}

module.exports = ShoppingCart;
