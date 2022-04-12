import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected... ${con.connection.host}`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};