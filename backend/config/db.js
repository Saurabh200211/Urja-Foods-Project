import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb+srv://satputesaurabh169_db_user:4LoDtVMhBPtF4JMW@cluster0.bg21nlj.mongodb.net/urja_foods?retryWrites=true&w=majority&appName=Cluster0';
    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    // Do not exit process in dev if mongo is down, but log warning
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

export default connectDB;
