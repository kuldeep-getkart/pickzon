import rateLimit from 'express-rate-limit';
import httpStatus from 'http-status';
import APIError from '../utils/apiError.js';

const rateLimiter = rateLimit({
    windowMs: 15 * 1000, // 15 sec
    max: 100, // max requestes from same IP
    handler: (req, res, next) => {
        next(new APIError('Too many requests, please try again later.', httpStatus.TOO_MANY_REQUESTS));
    }
});

export default rateLimiter;
