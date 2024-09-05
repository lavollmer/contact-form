import React from "react";

const inputBox = ({ title,userInfo }) => {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <label className="text-lg">{title}</label>
        <input
          type="text"
          id="text"
          value={userInfo}
          className="border border-grey-medium rounded-lg py-2 px-4 text-lg"
        />
      </div>
    </div>
  );
};

export default inputBox;
