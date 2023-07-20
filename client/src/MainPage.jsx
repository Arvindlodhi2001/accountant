import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

function MainPage() {


    return (
        <>
            <div className='flex justify-between flex-col min-h-screen ' >
                <Nav/>
                <Outlet />
                <Footer />
            </div>

        </>
    )
}

export default MainPage;
