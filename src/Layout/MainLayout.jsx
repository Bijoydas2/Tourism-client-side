import React from 'react';
import Navbar from '../Page/Shared/Navbar';
import Footer from '../Page/Shared/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <Navbar></Navbar>
            <main className=' min-h-[calc(100vh-389px)]   '>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;