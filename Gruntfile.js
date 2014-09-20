module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   
    watch: {
      css: {
          files: '**/*.css',
          tasks: ['cssmin'],
      }
    },
    
    cssmin: {
      build: {
        src: 'css/bootstrap.css',
        dest: 'css/bootstrap.min.css'
      }
    }
    
  });

  

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
   

  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'watch']);


};