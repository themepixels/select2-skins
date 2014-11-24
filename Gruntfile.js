module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {
      dev: {
        files: {
          '<%= pkg.name %>.css' : '<%= pkg.name %>.less'
        }
      },

      prod: {
        options: {
          compress: true
        },
        files: {
          '<%= pkg.name %>.min.css' : '<%= pkg.name %>.less'
        }
      }
    },

    watch: {
      scripts: {
        files: ['<%= pkg.name %>.less'],
        tasks: ['less']
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: [".", "docs"]
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['less', 'connect', 'watch']);


};
