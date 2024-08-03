import mongoose from 'mongoose';

const mongoConnection = async () => {
    if (mongoose.connection.readyState >= 1) return;
    return mongoose.connect(process.env.MONGO_URI||"");
};

export default mongoConnection;