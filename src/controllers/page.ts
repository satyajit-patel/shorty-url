import { connectDB } from "@/configs/db";
import urlModel from "@/models/url"
import shortId from "shortid";

connectDB();

export async function getData() {
    const urls = await urlModel.find({});
    return urls;
}

export async function createData(originalUrl: string) {
    const shortUrl = "table" + "/" + shortId();
    await urlModel.create({originalUrl, shortUrl});
    return shortUrl;
}

export async function deleteData(id: string) {
    await urlModel.findByIdAndDelete(id);
}

export async function getUrlByShortUrl(shortUrl: string) {
    const response = await urlModel.findOne({shortUrl});
    return response;
}