const swaggerAutogen = require('swagger-autogen')();
require('./app');


const doc = {

  info: {

    title: 'Testing with MYSQL',

    description: 'API Testing',

  },

  host: 'shark-app-tgz3l.ondigitalocean.app',

  schemes: ['https', 'http'],

  "securityDefinitions": {

    "bearerAuth": {

      "name": "Authorization",

      "in": "header",

      "type": "apiKey",

      "description": "JWT Authorization header"

    }

  },

  "security": [ { "bearerAuth": [] } ]

};




const outputFile = './swagger_output.json';
const endpointsFiles = ['./app.js'];



/* NOTE: if you use the express Router, you must pass in the

   'endpointsFiles' only the root file where the route starts,

   such as index.js, app.js, routes.js, ... */



   swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {

    require('./app.js'); // Your project's root file

  });