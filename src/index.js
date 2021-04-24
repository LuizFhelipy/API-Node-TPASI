const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const router = require('./routes/characterRoute');
const swaggerUi = require('swagger-ui-express');
const app = express();

//Documentação server SwaggerHub: https://app.swaggerhub.com/apis/BlazeF35/API_marvel/1.0.0
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'MarvelAPI',
            description: 'API Marvel mostrando personagens e seus quadrinhos',
            version: '1.0.0',
            contact: {
                name: 'Luiz Fhelipy Rodrigues Teixeira & Lucas Saldanha Santos Pereira',
                description: 'Amazing Devs',
                email: 'lucassaldanha80@hotmail.com'
            },
            servers: ['http://localhost:5000']
        }
    },
    apis: ['./routes/characterRoute']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * /Characters:
 *  get:
 *      summary: API disponibilizada pela Marvel
 *      description: Lista todos os nomes dos persoangens, revistas em quadrinho e sua data de lançamento
 *      consumes: 
 *      - application/json
 *      produces:
 *      - applicatio/json
 *      parameters:
 *      - in: body
 *        schema:
 *        $ref: '#/definition/Characters'
 *      responses:
 *        201: 
 *          description: Requisição Realizada
 *        400:
 *          description: Erro de Requisição
 *        500:
 *          description: Erro interno servidor
 *      
 *        definition:
 *          Characters:
 *              type: string
 *               required:
 *                  - comics
 *                  - events
 *                  - series
 *                  - stories
 *          properties:
 *              id:
 *                  type: string
 *                  format: uuid
 *                  example: 1011334
 *              comics:
 *                  type: string
 *                  example: Iron Man
 *              events:
 *                  type: string
 *                  format: date
 *                  example: 1963-03-03
 *              series:
 *                  type: string
 *                  example: Avengers Assemble
 *              stories:
 *                  type: string 
 *                  example: Invincible Iron Man
 *              manufacturer:
 *                  $ref: '#/definitions/Manufacturer'
 *         Manufacturer: 
 *              required:
 *              - Marvel ApiKey
 *              properties:
 *                  name:
 *                      type: string
 *                      example: Marvel
 *                  homePage:
 *                      type: string
 *                      format: url
 *                      example: https://developer.marvel.com/
 * 
 * host: http://localhost:8081
 */

app.use(express.json());
app.use('/', router);

app.listen(process.env.PORT || 8081, () => {
    console.log('Server started')
})