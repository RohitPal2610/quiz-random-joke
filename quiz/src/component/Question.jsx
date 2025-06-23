import React from 'react';

const Question = ({ data, onselect }) => {
  return (
    <div className="relative bg-blue-400  h-auto p-6 rounded-lg shadow-md text-white scale-[0.8] sm:scale-95 lg:scale-150 ">
      <h2 className="text-lg font-semibold mb-4">{data.question}</h2>
      <div className="flex justify-between flex-wrap gap-4">
        {data.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onselect(opt)}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 focus:bg-zinc-500 transition-all duration-200"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
