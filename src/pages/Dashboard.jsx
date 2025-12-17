import { useState, useEffect } from 'react';
import { Sidebar } from '../components/layout/Sidebar/Sidebar';
import { SidebarLayout } from '../components/layout/Sidebar/SidebarLayout';
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

    <SidebarLayout
      sidebar={({ isOpen, toggle }) => (
        <Sidebar isOpen={isOpen} toggle={toggle} />
      )}
    >
      <h1 className="text-2xl font-bold">Dashboard Content</h1>
    </SidebarLayout>
  );
};