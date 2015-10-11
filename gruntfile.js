// gruntfile.js

module.exports = function(grunt) {

	// load tasks
	require('load-grunt-tasks')(grunt);

	// configure tasks
	grunt.initConfig({
		sass: {
			dist: {
				src: 'source/style/main.scss',
				dest: 'build/style/main.css'
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 9', 'firefox esr']
			},
			dist: {
				src: 'build/style/main.css',
				dest: 'build/style/main.css'
			}
		},
		cssnano: {
			dist: {
				src: 'build/style/main.css',
				dest: 'build/style/main.css'
			}
		},
		concat: {
			dist: {
				src: ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/js/dist/*.js', 'source/script/main.js'],
				dest: 'build/script/main.js'
			}
		},
		uglify: {
			dist: {
				src: 'build/script/main.js',
				dest: 'build/script/main.js'
			}
		},
		concurrent: {
			dist: ['styles', 'scripts']
		},
		watch: {
			styles: {
				files: ['source/style/main.scss'],
				tasks: ['styles']
			},
			scripts: {
				files: ['source/script/main.js'],
				tasks: ['scripts']
			}
		}
	});

	// register tasks
	grunt.registerTask('default', ['build', 'watch']);
	grunt.registerTask('build', ['concurrent']);
	grunt.registerTask('styles', ['sass', 'autoprefixer', 'cssnano']);
	grunt.registerTask('scripts', ['concat', 'uglify']);
};
