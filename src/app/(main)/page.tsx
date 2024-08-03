"use client"
import React, { useState } from 'react';
import CryptoTable from './CryptoTable.component';
import CryptoModal from './CryptoModal.component';
import Head from 'next/head';

const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className="container mx-auto p-4">
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-3xl font-bold text-indigo-800 dark:text-gray-200">Crypto Tracker</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700 transition duration-150"
      >
        Change Crypto
      </button>
    </div>
    <CryptoTable />
    {showModal && <CryptoModal onClose={() => setShowModal(false)} />}
  </div>
  </>
  );
};

export default HomePage;
