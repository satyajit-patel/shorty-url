import mongoose from "mongoose";

export async function connectDB() {
    console.log("*******", process.env.MONGODB_URI, "*********");
    return mongoose.connect(process.env.MONGODB_URI as string);
}