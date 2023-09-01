"use client"

import Footer from "./inculdes/Footer"
import MainHeader from "./inculdes/MainHeader"
import SubMenu from "./inculdes/SubMenu"
import TopMenu from "./inculdes/TopMenu"

export default function MainLayout({ children }) {
    return (
        <>
            <div id="MainLayout" className='min-w-[1050px] max-w-[1300px] mx-auto'>
                <div>
                    <TopMenu />
                    <MainHeader />
                    <SubMenu />
                </div>

                <div>{children}</div>

                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}