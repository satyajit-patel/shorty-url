import { connectDB } from "@/configs/db";
import urlModel from "@/models/url"
import shortId from "shortid";

export async function getData() {
    await connectDB();
    console.log("connectDB");
    const urls = await urlModel.find({});
    console.log("data fetched");
    return urls;
}

export async function createData(originalUrl: string) {
    await connectDB();
    console.log("connectDB");
    const shortUrl = "table" + "/" + shortId();
    await urlModel.create({originalUrl, shortUrl});
    console.log("data created");
    return shortUrl;
}

export async function deleteData(id: string) {
    await connectDB();
    console.log("connectDB");
    await urlModel.findByIdAndDelete(id);
    console.log("data deleted");
}

export async function getUrlByShortUrl(shortUrl: string) {
    await connectDB();
    console.log("connectDB");
    const response = await urlModel.findOne({shortUrl});
    console.log("original data fetched");
    return response;
}