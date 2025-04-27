import { redirect } from "next/navigation";
import { getUrlByShortUrl } from "@/controllers/page";

export default async function urlRedirect({ params }: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const shortUrl = `table/${id}`;
  const response = await getUrlByShortUrl(shortUrl);
  console.log("******************************************************************************************");
  console.log(response);

  if (response?.originalUrl) {
    redirect(response.originalUrl);
  } else {
    redirect("/404");
  }
}
