import mongoose from 'mongoose';

const mongoConnection = async () => {
    if (mongoose.connection.readyState >= 1) return;
    console.log(process.env.NEXT_PUBLIC_MONGO_URI!);
    return mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!);
};

export default mongoConnection;