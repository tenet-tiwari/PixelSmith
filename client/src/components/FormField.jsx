import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-400 mb-1"
    >
      {labelName}
    </label>
    <div className="flex items-center">
      <input
        type={type}
        id={name}
        name={name}
        className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-3"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="ml-2 py-1 px-3 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Surprise me
        </button>
      )}
    </div>
  </div>
);

export default FormField;

