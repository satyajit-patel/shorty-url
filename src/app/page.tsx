// "use server"

// async function fetchUrls() {
//   console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/urls`)
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/urls`);
//   if(!response.ok) {
//       throw new Error('Failed to fetch urls');
//   }
//   return response.json()
// } 

// const handleSubmit = async(formData: FormData) => {
//   const originalUrl = formData.get('originalUrl');
// } 

// export default async function Home() {
//   return (
//     <div className="min-h-screen flex flex-col gap-6 items-center justify-center bg-gray-900 text-white">
//       <div className="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-xl text-center">
//         <form method="POST" action={handleSubmit} className="space-y-4">
//           <input
//             type="url"
//             placeholder="Enter URL here"
//             className="w-full bg-gray-700 text-white border border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//             required
//           />
//           <button
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
      
//       <div className="flex flex-wrap justify-center gap-2 mb-6">
//         <button onClick={fetchUrls} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">See all</button>
//       </div>
//     </div>
//   );
// }