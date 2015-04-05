module.exports = function(grunt) {  
  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'dist/shopping-cart.min.js': ['src/ShoppingCart.js']
        }       
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};
