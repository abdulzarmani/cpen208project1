'use client';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/fees')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold text-blue-600 mb-4">Outstanding Fees</h2>
      {data.length > 0 ? (
        <ul className="space-y-2">
          {data.map((item: any, idx) => (
            <li key={idx} className="p-3 bg-gray-100 rounded">
              <span className="font-semibold">{item.student_name}</span>
              <span className="text-red-600 ml-2">owes GHC {item.outstanding_fees}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Loading or no data</p>
      )}
    </div>
  );
}
