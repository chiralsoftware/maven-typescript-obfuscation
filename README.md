# maven-typescript-obfuscation
Use Maven to compile and obfuscate TypeScript within a Spring Boot project

This project shows how to set up a project which uses Maven to control build, 
and use Grunt to compile and then obfuscate TypeScript. It also uses a Maven task
to compile SASS to CSS.

In this case, we use the frontend-maven-plugin to launch the Grunt tasks, and all the 
JavaScript related tasks are controlled from the Gruntfile.js. The supplied Gruntfile.js
includes the tasks to compile TypeScript and run the obfuscator.

This is all you need to have TypeScript properly integrated with a Spring Boot project
all under the control of Maven.
