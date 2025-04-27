import Link from "next/link";
import { revalidatePath } from "next/cache";
import { getData, deleteData } from "@/controllers/page";

async function fetchUrls() {
  // const response = await fetch("/api/urls");
  // return response.json();
  const response = await getData()
  return response;
}

// Server action to delete a URL by ID
type DeleteUrlForm = FormData;
async function deleteUrl(formData: DeleteUrlForm) {
  "use server";
  const id = formData.get("id") as string;
  // await fetch("/api/urls", {
  //   method: "DELETE",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ id })
  // });
  await deleteData(id);
  revalidatePath("/urls");
}

export default async function UrlList() {
  let urlList: {
    _id: string;
    originalUrl: string;
    shortUrl: string;
  }[];

  try {
    urlList = (await fetchUrls()).map((url) => ({
      _id: String(url._id),
      originalUrl: url.originalUrl,
      shortUrl: url.shortUrl,
    }));
  } catch (error) {
    console.error(error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="p-10 bg-gray-800 rounded-2xl shadow-xl max-w-4xl w-full">
          <h1 className="text-3xl font-bold mb-6 text-center text-red-400">Error</h1>
          <p className="text-center text-red-500">Failed to load URLs</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 gap-6">
      <div className="p-10 bg-gray-800 rounded-2xl shadow-xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">All Short Urls</h1>
        <div className="space-y-4">
          {urlList.map((url) => (
            <div
              key={url._id}
              className="p-4 bg-gray-700 rounded-lg shadow border border-gray-600"
            >
              <p className="text-gray-300">
                <strong>Original URL:</strong> {url.originalUrl}
              </p>
              <p className="text-gray-300">
                <strong>Short URL:</strong>{" "}
                <a
                  href={process.env.NEXT_PUBLIC_BASE_URL + "/" + url.shortUrl}
                  target="_blank"
                  className="underline hover:text-blue-300 transition"
                >
                  {process.env.NEXT_PUBLIC_BASE_URL + "/" + url.shortUrl}
                </a>
              </p>

              {/* Delete form */}
              <form action={deleteUrl} className="mt-4">
                <input type="hidden" name="id" value={url._id} />
                <button
                  type="submit"
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-200"
                >
                  Delete
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <Link href="/">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
            Create
          </button>
        </Link>
      </div>
    </div>
  );
}
