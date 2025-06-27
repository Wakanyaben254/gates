// components/PaymentDialog.tsx
import React from 'react';

interface GatesDialogProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const GatesDialog: React.FC<GatesDialogProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Required!</h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Got It
        </button>
      </div>
    </div>
  );
};

export default GatesDialog;