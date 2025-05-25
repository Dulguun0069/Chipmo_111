import React, { useState } from 'react';

const Calculator = () => {
  const [chipCount, setChipCount] = useState(1);
  const [readerCount, setReaderCount] = useState(1);
  const unitPriceChip = 0.6;
  const unitPriceReader = 100;

  const total = chipCount * unitPriceChip + readerCount * unitPriceReader;

  const handleChipChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setChipCount(value);
  };

  const handleReaderChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setReaderCount(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] flex items-center justify-center px-4 py-12">
      <div className="bg-[#1e1e2f]text-white-800 p-10 rounded-3xl shadow-xl w-full max-w-xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-blue-600 mt-4">RFID Тооцоолуур</h2>
          <p className="text-sm text-gray-500 mt-2">Тоног төхөөрөмжийн үнийг хялбар тооцоолох</p>
        </div>

        <div className="space-y-6">
          
         
          
          <div>
  <label className="block text-sm font-medium mb-2 text-gray-300">Чипийн тоо:</label>
  <div className="flex items-center">
    <button
      onClick={() => setChipCount(prev => Math.max(0, prev - 1))}
      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-l-lg"
    >
      -
    </button>
    <input
      type="number"
      min="0"
      value={chipCount}
      onChange={handleChipChange}
      className="w-full bg-[#2b2b3d] text-white border-t border-b border-gray-600 px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={() => setChipCount(prev => prev + 1)}
      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-r-lg"
    >
      +
    </button>
  </div>
  <div className="text-xs text-gray-400 mt-1">Нэгжийн үнэ: ${unitPriceChip.toFixed(2)}</div>
</div>

<div>
  <label className="block text-sm font-medium mb-2 text-gray-300">Уншигч төхөөрөмжийн тоо:</label>
  <div className="flex items-center">
    <button
      onClick={() => setReaderCount(prev => Math.max(0, prev - 1))}
      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-l-lg"
    >
      -
    </button>
    <input
      type="number"
      min="0"
      value={readerCount}
      onChange={handleReaderChange}
      className="w-full bg-[#2b2b3d] text-white border-t border-b border-gray-600 px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={() => setReaderCount(prev => prev + 1)}
      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-r-lg"
    >
      +
    </button>
  </div>
  <div className="text-xs text-gray-400 mt-1">Нэгжийн үнэ: ${unitPriceReader.toFixed(2)}</div>
</div>

         
          <div className="bg-blue-100 p-6 rounded-xl mt-8 text-center">
            <span className="text-gray-700 text-lg font-semibold">Нийт үнэ:</span>
            <div className="text-3xl font-bold text-blue-700 mt-2">${total.toFixed(2)}</div>
            <div className="text-xs text-gray-500 mt-1 italic">
              {chipCount} x ${unitPriceChip} + {readerCount} x ${unitPriceReader}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
