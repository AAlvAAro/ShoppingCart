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
    uglify: {
      dist: {
        files: {
          'src/dist/shopping-cart.min.js': ['src/*.js']
        }       
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', ['jasmine', 'uglify']);
};
