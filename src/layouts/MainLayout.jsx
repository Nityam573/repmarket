import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const location = useLocation();
  
  // Get the current page name from the path
  const getPageName = () => {
    const path = location.pathname.substring(1);
    if (!path) return 'Home';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-8">
        <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 