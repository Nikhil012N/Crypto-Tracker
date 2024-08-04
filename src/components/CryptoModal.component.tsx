import { cryptoTypes } from '@/constants/crypto.types';
import { setSymbol } from '@/redux/slice';
import React, { useRef} from 'react';
import { useDispatch } from 'react-redux';


interface CryptoModalProps {
  onClose: () => void;
selectedSymbol:string
}

const CryptoModal: React.FC<CryptoModalProps> = ({ onClose ,selectedSymbol}) => {
    const symbolRef = useRef<HTMLSelectElement>(null);
    const dispatch = useDispatch();
  
    const handleSave = () => {
      const selectedSymbol = symbolRef.current?.value;
      if (selectedSymbol) {
        dispatch(setSymbol(selectedSymbol));
      }
      onClose();
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Change Crypto</h2>
        <select ref={symbolRef} className="block w-full border border-gray-300 rounded-md p-2 mb-4 text-gray-700 dark:text-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" defaultValue={selectedSymbol}>
          {cryptoTypes.map((symbol) => (
            <option key={symbol} value={symbol}>
              {symbol} ({symbol})
            </option>
          ))}
        </select>
        <div className="flex justify-end space-x-2">
          <button 
            onClick={handleSave} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-150"
          >
            Save
          </button>
          <button 
            onClick={onClose} 
            className="bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition duration-150"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoModal;