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
        ts: {
           default : {
                tsconfig: 'src/main/resources/static/app/tsconfig.json'
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
                files: { 'src/main/resources/static/app/js/code.js': [ 'src/main/resources/static/app/js/build.js'] }
            }
        }
    });
    // ----- Setup tasks
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-obfuscator');
    grunt.registerTask('default', ['ts', 'obfuscator']);
};
