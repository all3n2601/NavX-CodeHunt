import React from "react";

const MatchUsers = () => {
  const startDestination = localStorage.getItem("startDestination");
  const endDestination = localStorage.getItem("endDestination");

  const matchingUsers = [
    {
      name: "Leslie Alexander",
      gender: "Female",
      source: startDestination,
      destination: "Rayapudi",
    },
    {
      name: "Michael Foster",
      gender: "Male",
      source: "Velagapudi",
      destination: endDestination,
    },
  ];

  const handleAccept = (index) => {
    // Logic to handle the accept action for the user at the given index
    console.log(`Accepted user at index ${index}`);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-[80%] w-[80%]">
        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-4">
            <div className="grid grid-cols-4 gap-x-4">
              <p className="col-span-1">Name</p>
              <p className="col-span-1">Gender</p>
              <p className="col-span-1">Source</p>
              <p className="col-span-1">Destination</p>
            </div>
          </li>

          <li className="py-4">
            <div className="grid grid-cols-4 gap-x-4">
              <p className="col-span-1">John Doe</p>
              <p className="col-span-1">Female</p>
              <p className="col-span-1">VITAP</p>
              <p className="col-span-1">Vijayawada</p>
            </div>
          </li>

          <h2 className="py-4">Matching Users</h2>

          <li className="py-4">
            <div className="grid grid-cols-5 gap-x-4">
              <p className="col-span-1">Name</p>
              <p className="col-span-1">Phone Number</p>
              <p className="col-span-1">Source</p>
              <p className="col-span-1">Destination</p>
              <p className="col-span-1">Acceptance</p>
            </div>
          </li>

          {matchingUsers.map((user, index) => (
            <li className="py-4" key={index}>
              <div className="grid grid-cols-5 gap-x-4">
                <p className="col-span-1">{user.name}</p>
                <p className="col-span-1">{user.gender}</p>
                <p className="col-span-1">{user.source}</p>
                <p className="col-span-1">{user.destination}</p>
                <button
                  className="col-span-1 bg-blue-500 text-white px-3 py-1 rounded-md"
                  onClick={() => handleAccept(index)}
                >
                  Accept
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchUsers;
