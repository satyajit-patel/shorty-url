import { redirect } from "next/navigation";
import { getUrlByShortUrl } from "@/controllers/page";

type PageProps = { params: { id: string } };

export default async function urlRedirect({params}: PageProps) {
    const {id} = params;
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