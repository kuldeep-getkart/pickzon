import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import config from '../config/config.js'

const options = {
    swaggerDefinition: {
        restapi: '3.0.0',
        info: {
            title: 'Pickzon APIs',
            version: '1.0.0',
            description: 'REST APIs',
        },
        servers: [
            {
                url: `http://${config.HOST}:${config.PORT}`
            },
        ],
    },
    apis: ['./src/routes*.js']
}

const specs = swaggerJsdoc(options)

// export default { swaggerUi, specs }
export default (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}
