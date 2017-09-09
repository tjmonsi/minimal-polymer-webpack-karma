# minimal-polymer-webpack-karma
Reduced Repo for Trying Polymer Webpack with Karma testing

## To run
```
$ npm i -g yarn http-server karma
$ yarn install
$ ./node_modules/.bin/webpack
$ http-server dist
```

## To test
```
$ karma start karma.conf-without-babel.js            # this works because the files are not compiled to ES5
$ karma start karma.conf.js                          # this doesn't work and it will return this:

Uncaught TypeError: Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.
  at src/shell.test.js:12139
```

Only difference between the two karma configuration files is that the latter one doesn't have `babel-loader` plugin