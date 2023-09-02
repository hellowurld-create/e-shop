"use client"

import Link from "next/link"
import { AiOutlineSearch } from "react-icons/ai"
import { BiLoaderCircle } from 'react-icons/bi'

export default function MainHeader () {
    return (
        <>
            <div id="MainHeader" className="border-b">
                <div className="flex items-center justify-center justify-between w-full mx-auto max-w-[1200px]">
                    <div className="flex items-center w-full bg-white">
                        <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">
                            <Link href="/">
                                <img src="/images/logo.svg" width={120} alt="E-shop Logo" />
                            </Link>
                            <div className="w-full">
                                <div className="relative">
                                    <div className="flex items-center">
                                        <div className="relative flex items-center border-2 rounded-md border-gray-900 w-full p-2">
                                            <button className="flex items-center">
                                                <AiOutlineSearch size={20} />
                                                </button>
                                                <input type="text"
                                                    className="w-full
                                                               placeholder-gray-400
                                                               text-sm
                                                               pl-3
                                                               focus:outline-none 
                                                    " 
                                                    placeholder="Search for Anything"
                                                />
                                        </div>

                                        <button className=" flex items-center bg-[#C70039] text-sm rounded-md font-semibold text-white p-[11px] ml-1 px-14">
                                            Search
                                        </button>
                                        <div className="text-xs px-2 hover:text-orange-600 cursor-pointer">Advanced</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}