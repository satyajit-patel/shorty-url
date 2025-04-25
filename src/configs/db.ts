import mongoose from "mongoose";

export async function connctDB() {
    console.log(process.env.MONGDB_URI);
    return mongoose.connect(process.env.MONGODB_URI as string);
}