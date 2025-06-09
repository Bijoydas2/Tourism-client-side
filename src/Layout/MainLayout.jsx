import React from 'react';
import Navbar from '../Page/Shared/Navbar';
import Footer from '../Page/Shared/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <Navbar></Navbar>
            <main className='max-w-7xl min-h-[calc(100vh-389px)] mx-auto px-4 py-6'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;