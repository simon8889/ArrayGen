# ArrayGen 🔮
## _An online array generetor for your code_

ArrayGen is a tool made in typescript with express and react, ArrayGen generates an array of numbers with the chosen characteristics, ArrayGen arises with the aim of generating inputs for code tests, its utility to test search and sort algorithms. This Array is generated based on certain parameters that can be chosen.
## Array options ( parameters )
- Array length
- Sort elements
- Duplicate Elements
- Min value
- Max value
## Requirements
requires [Node.js](https://nodejs.org/) v10+ to run.

## Go to ArrayGen
try in [ArrayGen](https://simon8889.github.io/ArrayGen/#/)

## Installation
clone the [github repo](https://github.com/simon8889/ArrayGen)
```sh
$ git clone https://github.com/simon8889/ArrayGen
```

install the dependecies of client
```sh
$ cd client
$ npm install
```
install the dependecies of server
```sh
$ cd server
$ npm install
```

## Enviroment variables
Only the client side have a .env file for the server url, the .env file in the client look like:
```sh
REACT_APP_API_DIRECTION = http://localhost:9000
```

## Run locally
start the server
```sh
$ cd server
$ npm start
```
start the client
```sh
$ cd client
$ npm start
```

## Deploy
the server side is deployed in free heroku app and the frontend is deployed with github pages

## Development
Want to contribute? Great!

ArrayGen is made in typescript in the client and server side, uses express and react with css.