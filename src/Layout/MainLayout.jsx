import React from 'react';
import Navbar from '../Page/Shared/Navbar';
import Footer from '../Page/Shared/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='min-h-screen bg-gray-50 text-gray-800'>
            <Navbar></Navbar>
            <main className='max-w-7xl mx-auto px-4 py-6'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;