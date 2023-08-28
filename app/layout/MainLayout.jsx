"use client"

import Footer from "./inculdes/Footer"
import MainHeader from "./inculdes/MainHeader"
import SubMenu from "./inculdes/SubMenu"
import TopMenu from "./inculdes/TopMenu"

export default function MainLayout({ children }) {
    return (
        <>
            <div id="MainLayout" className="mi-w-[1050px] max-w-[1300px] mx-auto">
                <div>
                    <TopMenu />
                    <MainHeader />
                    <SubMenu />
                    
                    {children}

                    <Footer />
                </div>
            </div>
        </>
    )
}