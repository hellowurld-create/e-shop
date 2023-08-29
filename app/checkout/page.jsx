"use client"

import CheckoutItem from "../components/CheckoutItem"
import MainLayout from "../layout/MainLayout"

export default function Checkout() {

    const product ={
        id: 1,
        title: "Brown Leather Bag",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis blandit. Lacus vel facilisis volutpat est velit. Maecenas volutpat blandit aliquam etiam erat.",
        url: "https://picsum.photos/id/20",
        price: 2500
      }

    return (
        <>
            <MainLayout>
                <div id="CheckOutPage" className="mt-4 max-w-[1100px] mx-auto">
                    <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>
                    <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
                        <div className="w-[65%]">
                            <div className="bg-white rounded-lg p-4 border">
                                <div className="text-xl font-semibold mb-2">Shipping Address</div>
                                <div>
                                    <ul className="text-sm mt-2">
                                         <li>Name: test</li>
                                         <li>Address: test</li>
                                         <li>Zipcode: test</li>
                                         <li>City: test</li>
                                         <li>Country: test</li>
                                    </ul>
                                    </div>
                            </div>

                            <div id="Items" className="bg-white rounded-lg mt-4">
                            <CheckoutItem key={product.id} product={product}/>
                                
                            </div>

                        </div>
                        <div id="PlaceOrder" className="relative -top-[6px] w-[35%] border rounded-lg">
                            <div className="p-4">
                                <div className="flex items-baseline justify-between text-sm mb-1">
                                    <div>Items: (3)</div>
                                    <div>$12.99</div>
                                </div>
                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <div>Shipping:</div>
                                    <div>Free</div>
                                </div>

                                <div className="border-t" />

                                <div className="my-4 items-center flex justify-between">
                                    <div className="font-semibold">Order total</div>
                                    <div className="font-semibold text-2xl">
                                        $12.99
                                    </div>
                                </div>
                                
                                <form action="">
                                    <div className="border border-gray-500 p-2 rounded-sm" id="card-element" />
                                    <p
                                        id="card-error"
                                        role="alert"
                                        className="text-red-800 text-center font-semibold relative top-2"
                                    />

                                    <button
                                        className="mt-4 bg-[#C70039] text-lg w-full text-white font-semibold p-3 rounded-full"
                                        type="submit"
                                    >
                                        Pay Now
                                    </button>
                                </form>
                            </div>

                            <div className="flex items-center gap-2 p-4 justify-center border-t">
                                <img src="/images/logo.svg" width={50} alt="pay now logo" />
                                <div className="font-semibold text-gray-400 text-sm mb-2 mt-2">MONEY BACK GUARANTEE</div>
                            </div>
                        </div>

                    </div>
                </div>
            </MainLayout>
        </>
    )
}