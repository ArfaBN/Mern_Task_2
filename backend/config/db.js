import mongoose from 'mongoose';
import dns from 'dns';

// Fix for Windows / ISP DNS resolving error (querySrv ECONNREFUSED)
// This forces Node.js to use Google's Public DNS servers to resolve the MongoDB Atlas SRV record
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI || process.env.MONGO_URI.trim() === '') {
      console.error('❌ MongoDB Connection Error: MONGO_URI is not set in backend/.env.');
      console.error('👉 Please create a database in your separate MongoDB account and paste your connection string into backend/.env');
      process.exit(1);
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
