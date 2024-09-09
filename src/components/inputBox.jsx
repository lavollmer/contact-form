import React from "react";

const inputBox = ({ title, value, onChange, error }) => {
  return (
    <div>
      <div className="flex flex-col space-y-2 w-full">
        <label className="text-sm md:text-lg">{title} *</label>
        <input
          type="text"
          aria-label={title}
          value={value}
          onChange={onChange}
          className="border border-grey-medium rounded-lg p-2 py-2 w-full text-sm md:text-lg cursor-pointer hover:border-green-medium hover:shadow-lg"
        />
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default inputBox;
