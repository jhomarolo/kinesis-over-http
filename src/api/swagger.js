const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const {Router} = require('express')

class Swagger {

  routes;
  swaggerDocs;

  constructor() {

    this.routes = Router();
    const swaggerOptions = {
      swaggerDefinition: {
        info: {
          title: 'Kinesis Firehose Logger over HTTP', // Title (required)
          version: '1.0.0', // Version (required)
          description: 'Send logs over http to kinesis firehose with wiston log format',
        },
      },
      basePath: '/',
      apis: ['./src/api/routes/*.js']
    };
    this.swaggerDocs = swaggerJsDoc(swaggerOptions);
  }


  GetSwaggerRoutes() {
    this.routes.use('/swagger', swaggerUi.serve, swaggerUi.setup(this.swaggerDocs, {
      explorer: true
    }));
    return this.routes;
  }
}

module.exports = Swagger;
