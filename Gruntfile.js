'use strict';

var path = require('path');

module.exports = function(grunt) {

// Load Grunt tasks declared in the package.json file
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

//Project Configuration
grunt.initConfig({
	// Grunt express - our webserver
	// https://github.com/blai/grunt-express
	express: {
		all: {
			options: {
				server: path.resolve(__dirname, './app.js'),
				livereload: true,
				bases: ['./public', './views'],
                // bases: ['**/*.html', '**/*.ejs', '**/*.js', '**/*.css' ],
				port: 3000
			},
		}
	},

	// grunt-watch will monitor the projects files
	// https://github.com/gruntjs/grunt-contrib-watch
	watch: {
		all: {
			files: ['**/*.html'],
			options: {
				livereload: true
			}
		},
		styles: {
			files: ['sources/less/*.less'], // which files to watch
			tasks: ['less:development'],
			options: {
				nospawn: true,
				livereload: true
			}
		},
    },


    // grunt-open will open your browser at the project's URL
    // https://www.npmjs.org/package/grunt-open
    open: {
        all: {
            path: 'http://localhost:3000/'
        }
    },
    less: {

        // Compila todos Less de PAGINA do site 
        // E.g. home.less, video.less
        development: {
            options: {
                paths: ['sources/less']
            },
            files: [{
                expand: true,
                cwd: 'sources/less',
                src: ['*.less'],
                dest: './public/stylesheets/',
                ext: '.css'
            }, ]
        },

    },

});

// Creates the `server` task
grunt.registerTask('default', [
    'express',
    //    'open',
    'watch',
    'less'
]);
};
		// bootstrap: {
		// 	files: ['sources/less/bootstrap-3.3.2/less/*.less'], // which files to watch
		// 	tasks: ['less:bootstrap'],
		// 	options: {
		// 		nospawn: true,
		// 		livereload: true
		// 	}
		// },
		// custom_bootstrap: {
		// 	files: ['sources/less/custom/*.less'], // which files to watch
		// 	tasks: ['less:custom_bootstrap'],
		// 	options: {
		// 		nospawn: true,
		// 		livereload: true
		// 	}
		// }

// // Compila alteracoes feitas no source do BOOTSTRAP 
// // Normalmente @import no Bootstrap.less
// bootstrap: {
//     options: {
//         paths: ["/sources/less/bootstrap-3.3.2/less"]
//     },
//     files: [
//       {
//         expand: true,
//         cwd: 'sources/less/bootstrap-3.3.2/less',
//         src: ['bootstrap.less'],
//         dest: './public/stylesheets/lib/css/',
//         ext: '.css'
//       },
//     ]
// },

// // Compila alteracoes em arquivos de CUSTOMIZACAO  
// // E.g. custom-variables.less, custom-bootstrap.less
// custom_bootstrap: {
//     options: {
//         paths: ["/sources/less/custom"]
//     },
//     files: [
//       {
//         expand: true,
//         cwd: 'sources/less/bootstrap-3.3.2/less',
//         src: ['bootstrap.less'],
//         dest: './public/stylesheets/lib/css/',
//         ext: '.css'
//       },
//     ]
// }