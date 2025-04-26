import { redirect } from "next/navigation";
import { getUrlByShortUrl } from "@/controllers/page";

export default async function urlRedirect({params}: {params: {id: string}}) {
    const id = params.id;
    const shortUrl = "table" + "/" + id;
    // console.log("*****", shortUrl, "************");
    const response = await getUrlByShortUrl(shortUrl);
    // console.log(response);
    if(response && response.originalUrl) {
        redirect(response.originalUrl);
    } else {
        redirect("/404");
    }
}