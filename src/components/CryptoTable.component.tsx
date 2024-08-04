import { CryptoInterface, CryptoState } from "@/constants/data.interface";
import { fetchCryptoData } from "@/redux/slice";
import { useAppDispatch } from "@/redux/store";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import ErrorComp from "./error.component";
export const dynamic = "force-dynamic";
const CryptoTable:FC = () => {
  const dispatch = useAppDispatch();
  const { data, symbol, loading,error} = useSelector(
    (state: any) => state?.crypto
  );
  useEffect(() => {
    dispatch(fetchCryptoData());
    const interval = setInterval(() => {
      dispatch(fetchCryptoData());
    }, 6000);

    return () => clearInterval(interval);
  }, [dispatch, symbol]);

  if(error){
    return <ErrorComp/>
  }

  return (

    <div className="relative overflow-x-auto shadow-md rounded-lg bg-white dark:bg-gray-800">
      <table className="min-w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-300"
            >
              Symbol
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-300"
            >
              Price ₹
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-300"
            >
              Volume
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-300  "
            >
              Capital
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-300  "
            >
              Age (days)
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-300"
            >
              Timestamp
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
          {data?.map((crypto: CryptoInterface) => (
            <tr
              key={crypto.timestamp?.toString()}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
            >
              <td className="px-4 py-3  text-blue-900 dark:text-gray-300 font-bold">
                {crypto?.name}
              </td>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-300">
                {crypto?.symbol}
              </td>
              <td className="px-4 py-3 text-green-700 dark:text-gray-300 font-bold">
                {crypto?.price?.toFixed(3)}
              </td>
              <td className="px-4 py-3 text-gray-900 dark:text-gray-300">
                {crypto?.volume}
              </td>
              <td className="px-4 py-3 text-gray-900 dark:text-gray-300  ">
                {crypto?.capital}
              </td>
              <td className="px-4 py-3 text-gray-900 dark:text-gray-300 ">
                {crypto?.age}
              </td>
              <td className="px-4 py-3 text-gray-900 dark:text-gray-300">
                {new Date(crypto.timestamp)?.toLocaleString("en-GB")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
