import urlModel, {IUrl} from "@/models/url"
import shortId from "shortid";

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