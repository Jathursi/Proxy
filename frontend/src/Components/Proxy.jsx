import React, { useState } from "react";

const Proxy = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const proxyData = [
    { id: 1, user: "User1", action: "Blocked", timestamp: "2025-03-01 10:30 AM" },
    { id: 2, user: "User2", action: "Accessed", timestamp: "2025-03-01 11:00 AM" },
  ];

  // Filter proxy data based on search input
  const filteredData = proxyData.filter((item) =>
    item.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Proxy Management</h1>

      {/* Search Bar */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search User..."
          className="w-1/2 p-2 bg-gray-700 text-white rounded focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="border border-gray-600 p-2">User</th>
              <th className="border border-gray-600 p-2">Action</th>
              <th className="border border-gray-600 p-2">Timestamp</th>
              <th className="border border-gray-600 p-2">Manage</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-600 p-2">{item.user}</td>
                  <td className="border border-gray-600 p-2">{item.action}</td>
                  <td className="border border-gray-600 p-2">{item.timestamp}</td>
                  <td className="border border-gray-600 p-2 flex justify-center space-x-2">
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded">Block</button>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded">Remove</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border border-gray-600 p-2 text-center">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Proxy;
