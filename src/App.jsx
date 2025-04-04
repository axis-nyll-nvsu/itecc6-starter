import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Tasks from './pages/Tasks';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    const [isOpen, setIsOpen] = useState(true);
    const [searchKey, setSearchKey] = useState("");

    const handleSearch = (value) => {
        setSearchKey(value);
    }

    return (
        <BrowserRouter>
            <div className="flex">
                <Sidebar isOpen={isOpen} />
                <main className="w-full bg-white min-h-[100vh] shadow-lg border-[rgba(0,0,0,0.1)] md:border-l-1 z-10">
                    <Header sidebarOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} searchKey={searchKey} toggleSearch={handleSearch} />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/customers" element={<Customers searchKey={searchKey} />} />
                        <Route path="/customers/:id" element={<Details />} />
                        <Route path="/tasks" element={<Tasks searchKey={searchKey}/>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </main>
            </div>
        </BrowserRouter>
    );
}