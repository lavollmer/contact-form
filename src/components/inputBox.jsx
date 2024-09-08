import React from "react";

const inputBox = ({ title, value, onChange, error }) => {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <label className="text-lg">{title} *</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="border border-grey-medium rounded-lg py-2 px-24 text-lg cursor-pointer hover:border-green-medium hover:shadow-lg"
        />
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default inputBox;
