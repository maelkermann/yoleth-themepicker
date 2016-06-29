'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        cssmin: {
            css : {
                src: 'src/yoleth-themepicker.css',
                dest: 'dist/yoleth-themepicker.css'
            }
        },
        uglify: {
            js : {
                src: 'src/yoleth-themepicker.js',
                dest: 'dist/yoleth-themepicker.js'
            }
        },
        copy: {
            dist: {
                files: [{
                    flatten: true,
                    expand: true,
                    cwd : 'src/',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['cssmin', 'uglify', 'copy']);

};
