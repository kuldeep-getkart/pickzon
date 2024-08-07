import mongoose from "mongoose";
import config from './config.js'

const connectDB = async () => {
   try {
      const connect = await mongoose.connect(config.DATABASE_URI);
      console.log('Database Connected..!!');
   } catch (error) {
      console.error(`Error : ${error.message}`);
      process.exit(1)
   }
}

export default connectDB;
