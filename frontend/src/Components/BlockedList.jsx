import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlockedList = () => {
  const navigate = useNavigate();
  const [blockedWebsites, setBlockedWebsites] = useState([]);
  const [newWebsite, setNewWebsite] = useState("");

  // Function to Block a Website
  const blockWebsite = () => {
    if (newWebsite.trim() !== "") {
      setBlockedWebsites([...blockedWebsites, newWebsite]);
      setNewWebsite("");
    }
  };

  // Function to Unblock a Website
  const unblockWebsite = (website) => {
    setBlockedWebsites(blockedWebsites.filter((site) => site !== website));
  };

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Blocked Websites</h1>

      {/* Input to Block a Website */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newWebsite}
          onChange={(e) => setNewWebsite(e.target.value)}
          placeholder="Enter website URL"
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
        />
        <button
          onClick={blockWebsite}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-semibold"
        >
          Block
        </button>
      </div>

      {/* List of Blocked Websites */}
      <ul className="text-sm">
        {blockedWebsites.length > 0 ? (
          blockedWebsites.map((website, index) => (
            <li key={index} className="flex justify-between border-b py-2">
              <span>{website}</span>
              <button
                onClick={() => unblockWebsite(website)}
                className="text-sm bg-green-500 px-2 py-1 rounded text-white"
              >
                Unblock
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-400">No websites blocked</p>
        )}
      </ul>

      {/* Back to Dashboard Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded text-white font-semibold"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default BlockedList;
