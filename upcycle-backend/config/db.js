import colors from 'colors';
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected... ${con.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err.message.red.underline.bold);
    process.exit(1);
  }
};
