module.exports = function(grunt) {  
  grunt.initConfig({
    jasmine: {
      pivotal: {
        src: 'src/*.js',
        options: {
          specs: 'src/spec/*Spec.js'
        }
      }          
    },
    concat: {
      dist: {
        src: ['src/ShoppingCart.js', 'src/ShoppingCartUI.js'], 
        dest: 'src/dist/shopping-cart.js'
      }    
    },
    uglify: {
      dist: {
        files: {
          'src/dist/shopping-cart.min.js': ['src/dist/shopping-cart.js']
        }       
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['jasmine', 'concat', 'uglify']);
};
