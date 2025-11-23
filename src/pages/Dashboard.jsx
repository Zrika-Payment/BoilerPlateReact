import { useState, useEffect } from 'react';

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData([
        { id: 1, title: 'Item 1', value: 100 },
        { id: 2, title: 'Item 2', value: 200 },
        { id: 3, title: 'Item 3', value: 300 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-3xl font-bold text-blue-600">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};