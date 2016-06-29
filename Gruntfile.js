'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    cssmin: {
        css : {
            src: 'dist/yoleth-themepicker.css',
            dest: 'dist/yoleth-themepicker.min.css'
        }
    },
    uglify: {
        js : {
            src: 'dist/yoleth-themepicker.js',
            dest: 'dist/yoleth-themepicker.min.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['cssmin', 'uglify']);

};
