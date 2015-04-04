var ShoppingCart = (function() {
  function ShoppingCart(customOptions) {
    var total = 0,
        items = [],

        defaultOptions = {
          taxRate: 0,
          clientDiscount: null,
          shippingCost: null
        };
        
    this._options = customOptions || defaultOptions;
    

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

    this.netTotal = function() {
      var haveTax = this._options.taxRate > 0,
          haveDiscount = this._options.clientDiscount > 0;
      if(haveTax) {
        return total * (1 - (this._options.taxRate / 100)); 
      } else if(haveDiscount) {
        return total * (1 - (this._options.clientDiscount / 100)); 
      }
    }

    this.addCustomDiscount = function(discount) {
      this._options.clientDiscount = discount; 
    }
  };
  return ShoppingCart;
})();

module.exports = ShoppingCart;
