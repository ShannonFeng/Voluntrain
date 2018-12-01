# Voluntrain

## Getting started
1. Clone or download this repository to your computer.
2. In a terminal, change directory to where you cloned/downloaded the repository. Run `npm install` to install the project dependencies.

## Running the Web Application

Run `npm run start-all` to start both the Angular client and the server at the same time. Navigate to http://localhost:4200 to view the web application.

To run the client only: run `npm start` to start the Angular client on http://localhost:4200. 

To run the server only: run `npm run start-server` to start the node.js server on http://localhost:3000. 

## Running the tests

Run `npm run test` to start the Mocha test scripts and output code coverage analysis. These scripts test the functions used in server/queries.ts.

Run `ng test --code-coverage` to start the Jasmine tests. This will test each of the Angular components. Jasmine test files contain ".spec.ts" in the name of the file. To view the code coverage analysis, run `http-server ./coverage` and navigate to http://localhost:8080 in your browser.
