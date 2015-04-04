'use_strict';

var ShoppingCart = (function() {
  function ShoppingCart(customOptions) {
    var self = this;
        total = 0,
        items = [],

        defaultOptions = {
          taxRate: 0,
          clientDiscount: 0,
          shippingCost: null
        };
        
    self._options = customOptions || defaultOptions;
    

    self.getItems = function() {
      return items; 
    }

    self.addItem = function(item) {
      if(typeof item === "object") {
        items.push(item);
        total += item.price;
      }
    }
    
    self.removeItem = function(item) {
      items.splice(item, 1); 
    }

    self.getTotal = function() {
      return total;
    }

    self.netTotal = function() {
      var hasTax = this._options.taxRate > 0,
          hasDiscount = this._options.clientDiscount > 0;
      if(hasDiscount && hasTax) {
        var discountedTotal  = total * (1 - (this._options.clientDiscount / 100));
        return discountedTotal * (1 - (this._options.taxRate / 100)); 
      } else if(hasDiscount && !hasTax) {
        return total * (1 - (this._options.clientDiscount / 100)); 
      } else {
        return total * (1 - (this._options.taxRate / 100)); 
      }
    }

    self.addCustomDiscount = function(discount) {
      this._options.clientDiscount = discount; 
    }
  };
  return ShoppingCart;
})();

module.exports = ShoppingCart;
