/**WEBPACK  */
// It is a module bundler
// Its main purpose is to bundle JavaScript files
// for usage in a browser. For eg: if there are 2-3 files like - index.js, app.js,
// form.js, button.js. 

/**Webpack Configuration
Webpack can be configured by adding a webpack.config.js file in the root of
our application structure. It requires the following:
● Entry property, which is used to specify which file webpack should
start with to get the internal dependency graph created. A path is
passed while creating the entry point (for eg: src/index.js).
● Loaders check all the imports if any file needs any transformations or
not. So, it internally transforms the files which need transformations.
● Output property specifying where the bundled file should be
generated. Generally kept in the “dist” or “build” folder.*/
