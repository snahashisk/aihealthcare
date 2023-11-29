import React from "react";

const SimpleInfo = ({ age, height, weight, bloodGroup }) => {
  return (
    <div className="mt-16 flex w-3/4 justify-between">
      <div>
        <p className="text-5xl font-medium text-teal-700">{age}</p>
        <p className="text-gray-500">Years Old</p>
      </div>
      <div>
        <p className="text-5xl font-medium text-teal-700">{height}</p>
        <p className="text-gray-500">Height, cm</p>
      </div>
      <div>
        <p className="text-5xl font-medium text-teal-700">{weight}</p>
        <p className="text-gray-500">Weight, kg</p>
      </div>
      <div>
        <p className="text-5xl font-medium text-teal-700">{bloodGroup}</p>
        <p className="text-gray-500">Blood Group</p>
      </div>
    </div>
  );
};

export default SimpleInfo;
