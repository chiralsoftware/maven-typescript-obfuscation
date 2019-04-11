module.exports = function (grunt) {
    grunt.initConfig({
        // ----- Environment
        // read in some metadata from project descriptor
        project: grunt.file.readJSON('package.json'),
        // define some directories to be used during build
        dir: {
            // location where TypeScript source files are located
            "source_ts": "src/main/resources/static/app/ts",
            // location where all build files shall be placed
            "target": "target",
            // location to place (compiled) javascript files
            "target_js": "target/js",
        },
        // ----- TypeScript compilation
        //  See https://npmjs.org/package/grunt-typescript
        typescript: {
            // Compiles the code into a single file. Also generates a typescript declaration file
            compile: {
                src: ['<%= dir.source_ts %>/**/*.ts'],
                dest: '<%= dir.target_js %>',
                options: {
                    base_path: '<%= dir.source_ts %>',
                    target: 'ES6',
                    declaration: false,
                    comments: false
                }
            }
        },
        obfuscator: {
            options: {
                controlFlowFlattening: true,
                deadCodeInjection: true,
                selfDefending:true,
                identifierNamesGenerator: "mangled"
            },
            task1: {
                files: { 'target/js/code.js': [ 'target/js/greeter.js'] }
            }
        }
    });
    // ----- Setup tasks
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-obfuscator');
    grunt.registerTask('default', ['typescript:compile', 'obfuscator']);
};
