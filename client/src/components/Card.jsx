import React from 'react';
import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => (
  <div className="rounded-xl group relative shadow-lg hover:shadow-xl bg-gray-900">
    <img
      className="w-full h-56 object-cover rounded-t-xl"
      src={photo}
      alt={prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-gray-800 m-2 p-4 rounded-b-xl">
      <p className="text-white text-sm overflow-y-auto h-20 prompt">{prompt}</p>

      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
          <p className="text-white text-sm">{name}</p>
        </div>
        <button
          type="button"
          onClick={() => downloadImage(_id, photo)}
          className="outline-none bg-transparent border-none"
        >
          <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
        </button>
      </div>
    </div>
  </div>
);

export default Card;

