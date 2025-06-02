import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Calculator = () => {
  const { t } = useTranslation();
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
      <div className="bg-[#1e1e2f] text-white-800 p-10 rounded-3xl shadow-xl w-full max-w-xl">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-orange-500 rounded-full shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white">{t('calcultor.title')}</h2>
          <p className="mt-2 text-sm text-gray-500">{t('calcultor.subtitle')}</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              {t('calcultor.chipLabel')}
            </label>
            <div className="flex items-center">
              <button
                onClick={() => setChipCount(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 text-white bg-gray-700 rounded-l-lg hover:bg-gray-600"
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
                className="px-4 py-2 text-white bg-gray-700 rounded-r-lg hover:bg-gray-600"
              >
                +
              </button>
            </div>
            <div className="mt-1 text-xs text-gray-400">
              {t('calcultor.chipUnitPrice')}{unitPriceChip.toFixed(2)}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              {t('calcultor.readerLabel')}
            </label>
            <div className="flex items-center">
              <button
                onClick={() => setReaderCount(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 text-white bg-gray-700 rounded-l-lg hover:bg-gray-600"
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
                className="px-4 py-2 text-white bg-gray-700 rounded-r-lg hover:bg-gray-600"
              >
                +
              </button>
            </div>
            <div className="mt-1 text-xs text-gray-400">
              {t('calcultor.readerUnitPrice')}{unitPriceReader.toFixed(2)}
            </div>
          </div>

          <div className="p-6 mt-8 text-center bg-orange-300 rounded-xl">
            <span className="text-lg font-semibold text-gray-700">
              {t('calcultor.totalPrice')}
            </span>
            <div className="mt-2 text-3xl font-bold text-orange-500">
              ${total.toFixed(2)}
            </div>
            <div className="mt-1 text-xs italic text-gray-500">
              {chipCount} x ${unitPriceChip.toFixed(2)} + {readerCount} x ${unitPriceReader.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;