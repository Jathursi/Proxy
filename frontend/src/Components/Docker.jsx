import React from "react";

const Docker = () => {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Docker Table</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="border border-gray-600 p-2">Container ID</th>
              <th className="border border-gray-600 p-2">Image</th>
              <th className="border border-gray-600 p-2">Status</th>
              <th className="border border-gray-600 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-600 p-2">123abc</td>
              <td className="border border-gray-600 p-2">nginx</td>
              <td className="border border-gray-600 p-2">Running</td>
              <td className="border border-gray-600 p-2 text-center">
                <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded">Remove</button>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2">456def</td>
              <td className="border border-gray-600 p-2">mysql</td>
              <td className="border border-gray-600 p-2">Stopped</td>
              <td className="border border-gray-600 p-2 text-center">
                <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Docker;
