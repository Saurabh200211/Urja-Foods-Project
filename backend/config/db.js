import mongoose from 'mongoose';

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ MongoDB Connected to Atlas: ${conn.connection.host}`);
  } catch (error) {
    console.error(`\n❌ MongoDB Atlas Connection Error: ${error.message}`);
    if (error.message.includes('bad auth')) {
      console.error(`👉 Cause: The password or username in MONGO_URI is incorrect in Database Access on Atlas.`);
    } else {
      console.error(`👉 Cause: Ensure IP Address 0.0.0.0/0 is added in Atlas Network Access.`);
    }
  }
};

export default connectDB;
