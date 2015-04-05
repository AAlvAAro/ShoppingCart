'use_strict';

var ShoppingCart = (function() {
  function ShoppingCart(customOptions) {
    var self = this,
        total = 0,
        items = [],

        // Set the initial options for taxing and shipping according to the 
        // business' needs. Create an object customOptions with the properties:
        //    * taxRate: number, use 15 for 15%.
        //    * clientDiscount: same as taxRate. 
        //    * shoppingCost: use the actual numeric value of the shipping cost, i.e. 10.50
        // The clientDiscount should be passed as 0 and can be modified whenever
        // a particular client has a preferent price discount.
        // If customOptions is not declared the cart's options will be set to the
        // default ones.

        defaultOptions = {
          taxRate: 0,
          clientDiscount: 0,
          shippingCost: null
        };
        
    self._options = customOptions || defaultOptions;
    
    self.addCustomDiscount = function(discount) {
      self._options.clientDiscount = discount; 
    }

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
    
    self.getTaxes = function() {
      return total * self._options.taxRate / 100;
    }

    self.getTotalDiscount = function() {
      return total * self._options.clientDiscount / 100; 
    }

    // Get the Purchase's Total after client discount and taxes if they exist
    self.netTotal = function() {
      var hasTax = self._options.taxRate > 0,
          hasDiscount = self._options.clientDiscount > 0;
      if(hasDiscount && hasTax) {
        var discountedTotal  = total * (1 - (self._options.clientDiscount / 100));
        return discountedTotal * (1 - (self._options.taxRate / 100)); 
      } else if(hasDiscount && !hasTax) {
        return total * (1 - (self._options.clientDiscount / 100)); 
      } else {
        return total * (1 - (self._options.taxRate / 100)); 
      }
    }

  };
  return ShoppingCart;
})();

'use_strict';

var ShoppingCartUI = {
  initialize: function() {
  	// Get the UI ready 
  },
  watch: function() {
    // Watch the cart object for changes and display them within the UI  
  },
  reset: function() {
    // Clear the UI to the initial state
  },
  report: function() {
    // Create a document with the purchase quote
  }
}
