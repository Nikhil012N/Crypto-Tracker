"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CryptoTable from "../components/CryptoTable.component";
import CryptoModal from "../components/CryptoModal.component";
import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { fetchCryptoData } from "@/redux/slice";
export const dynamic="force-dynamic";
const HomePage: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const { data, symbol, loading, error } = useSelector(
    (state: any) => state?.crypto
  );
  useLayoutEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch, symbol]);
  useEffect(() => {
    setInterval(() => {
      dispatch(fetchCryptoData());
    }, 6000);
  }, [dispatch, symbol]);

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-indigo-800 dark:text-gray-200">
            Crypto Tracker
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700 transition duration-150"
          >
            Change Crypto
          </button>
        </div>
        {data.length > 0 && (
          <CryptoTable data={data} error={error} loading={loading} />
        )}
        {showModal && (
          <CryptoModal
            onClose={() => setShowModal(false)}
            selectedSymbol={symbol}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
