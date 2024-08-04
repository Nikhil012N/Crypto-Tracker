
export default function SkeletonLoader() {
    return (
      <div className="relative overflow-x-auto shadow-md rounded-lg bg-white dark:bg-gray-800 animate-pulse">
        <table className="min-w-full text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
            <tr>
              {["Name", "Symbol", "Price ₹", "Volume", "Capital", "Age (days)", "Timestamp"].map((heading) => (
                <th key={heading} scope="col" className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-300">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
                {[...Array(7)].map((_, index) => (
                  <td key={index} className="px-4 py-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  