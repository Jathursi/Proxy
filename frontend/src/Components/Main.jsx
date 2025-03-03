import React from 'react'

function Main() {
  return (
    <div>
        <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Proxy Dashboard</h1>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <StatCard title="Active Users" value={12} />
          <StatCard title="System Status" value="Running" />
          <StatCard title="Total Requests" value={256} />
        </div>

        {/* Table */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <table className="w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-600 p-2">User</th>
                <th className="border border-gray-600 p-2">Action</th>
                <th className="border border-gray-600 p-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 p-2">User 1</td>
                <td className="border border-gray-600 p-2">Blocked a site</td>
                <td className="border border-gray-600 p-2">2025-03-01 10:30 AM</td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">User 2</td>
                <td className="border border-gray-600 p-2">Accessed Proxy</td>
                <td className="border border-gray-600 p-2">2025-03-01 11:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
const StatCard = ({ title, value }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-2xl font-bold text-green-400">{value ?? "-"}</p>
  </div>
);

export default Main