"use client"

import { AiOutlineLoading3Quarters } from "react-icons/ai"
import TextInput from "../components/TextInput"
import MainLayout from "../layout/MainLayout"

export default function Address() {
    return (
        <MainLayout>
            <div
                id="AddressPage"
                className="mt-4 max-w-[600px] mx-auto px-2"
            >
                <div className="rounded-lg p-3 mx-auto bg-white">
                    <div className="text-xl text-bold mb-2">Address Details</div>
                    <form >
                        <div className="mb-4">
                            <TextInput
                                className="w-full"
                                string={'Test'}
                                placeholder={"Name"}
                                error={'This is an error'}
                            />
                        </div>
                        <button
                               className="mt-6 w-full text-white text-lg font-semibold p-3 rounded bg-[#C70039]"
                        >
                            Update Address
                        </button>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}