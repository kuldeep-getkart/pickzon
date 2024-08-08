import mongoose from "mongoose";
import config from './config.js'
import logger from './logger.js';

const connectDB = async () => {
   try {
      await mongoose.connect(config.DATABASE_URI);
      logger.info('Connected to MongoDB..🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀');
   } catch (error) {
      logger.error(`MongoDB connection error: ${error}`);
      process.exit(1)
   }
}

export default connectDB;
