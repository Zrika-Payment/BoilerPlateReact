import { use, useState } from 'react';
import { Header } from './components/layout/Header';
import Button from './components/common/Button';
import { Dashboard } from './pages/Dashboard';
import { Input } from './components/common/Input';
import { useFetch } from './hooks/useFetch';
import { NAVITEMS } from './constants/config';
import Footer from './components/layout/Footer';
import FormLayout from './components/layout/FormLayout';
import { sections, CompanySections, products, support, legal } from './constants/config'
import { CardDemo } from './components/layout/CardDemo';
import { Contactus } from './pages/Contactus';
import  Carousel from './components/layout/Carousel';
import img1 from './assets/Images/img1.jpg';
import img2 from './assets/Images/img2.jpg';
import img3 from './assets/Images/img3.jpg';
import img4 from './assets/Images/img4.jpg';
import img5 from './assets/Images/img5.jpg';
import img6 from './assets/Images/img6.jpg';
function App() {
  const img = [img1,img2,img3,img4,img5,img6];
  const [count, setCount] = useState(0);
  // const CompanyDetail = useFetch("https://fake-json-api.mock.beeceptor.com/companies",{});
  //console.log(CompanyDetail);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header nav_Items={NAVITEMS} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Scalable React Boilerplate
          </h1>
          <p className="text-gray-600 mb-6">
            A production-ready, extensible architecture for building large-scale React applications.
          </p>
          <Carousel items={img} />
          {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 ">
            <h2 className="text-2xl font-semibold mb-4">Counter Demo</h2>
            <div className="flex items-center space-x-4">
              <Button onClick={() => setCount(c => c - 1)} variant="danger">
                Decrease
              </Button>
              <span className="text-3xl font-bold text-blue-600 ">{count}</span>
              <Button onClick={() => setCount(c => c + 1)} variant="success">
                Increase
              </Button>
              <Button onClick={() => setCount(0)} variant="secondary">
                Reset
              </Button>
              <Input label="Name" />

            </div>
          </div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">🏗️ Architecture</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Component-based structure</li>
                <li>• Custom hooks for logic reuse</li>
                <li>• Context API for state management</li>
                <li>• Service layer for API calls</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">🚀 Features</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Scalable folder structure</li>
                <li>• Reusable components</li>
                <li>• Utility functions</li>
                <li>• Configuration management</li>
              </ul>
            </div>
          </div> */}
     
          {/* <ProductCards/> */}
       
        </div>


      </main>
      <Footer CompanySections={CompanySections} products={products} support={support} legal={legal} />
    </div>
  );
}

export default App;