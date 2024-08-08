import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import compression from 'compression';

import rateLimiter from './src/middleware/rateLimiter.js';
import swagger from './src/middleware/swagger.js';
import config from './src/config/config.js'
import connectDB from './src/config/db.js';
import routes from './src/routes/index.js'
import { notFound, errorHandler, converter } from './src/middleware/errorMiddleware.js';
import morgan from './src/config/morgan.js';
import logger from './src/config/logger.js';

connectDB();
const app = express();

(config.NODE_ENV !== 'production') && app.use(morgan)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(compression());
app.use(rateLimiter);
app.use('/api/', routes);
app.get('/', (req, res) => res.send('Hiiiiii...👋 from server.!!'));
swagger(app)

app.use(converter);
app.use(notFound);
app.use(errorHandler);
app.listen(config.PORT, () => logger.info(`🚀 Host: http://${config.HOST}:${config.PORT}`));
