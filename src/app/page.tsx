

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-6 items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-xl text-center">
        <form className="space-y-4">
          <input
            type="url"
            placeholder="Enter URL here"
            className="w-full bg-gray-700 text-white border border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">Facebook</button>
      </div>
    </div>
  );
}