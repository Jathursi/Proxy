import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-2/12 bg-gray-800 p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => navigate("main")}
                className="w-full text-left px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("blockedList")}
                className="w-full text-left px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
              >
                Blocked List
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("proxy")}
                className="w-full text-left px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
              >
                Proxy
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("docker")}
                className="w-full text-left px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
              >
                Docker
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="w-10/12 p-8">
        <Outlet/>
      </div>
      {/* Main Content */}
      
    </div>
  );
};



export default Dashboard;