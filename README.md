## DEVELOPMENT TOOLS
~~~
* OS:               Ubuntu 18.04.5 LTS
* NPM:              6.14.6
* Node:             10.22.1
* Angular CLI:      9.1.12
* Docker:           Docker version 19.03.6, build 369ce74a3c
* Docker Compose:   docker-compose version 1.21.2, build a133471
* IDE:              Visual Studio Code
~~~

## INSTALL DEPENDENCES
```sh
# Run in the project root
$ npm install
```

## BUILD
```sh
$ npm run build

# This will generat in "exported-components" folder an example of loading the component from an external website
```

## TODO
```sh
# If <app-hello-world></app-hello-world> element does not exist, DOM throws twice:
ERROR Error: The selector "app-hello-world" did not match any elements
    at di.selectRootElement (demo-angular9-web-component-es2015.js:3)
    at demo-angular9-web-component-es2015.js:3
    at Hs.create (demo-angular9-web-component-es2015.js:3)
    at e.bootstrap (demo-angular9-web-component-es2015.js:3)
    at demo-angular9-web-component-es2015.js:3
    at Array.forEach (<anonymous>)
    at e._moduleDoBootstrap (demo-angular9-web-component-es2015.js:3)
    at demo-angular9-web-component-es2015.js:3
    at c.invoke (demo-angular9-web-component-es2015.js:2)
    at Object.onInvoke (demo-angular9-web-component-es2015.js:3)
```
