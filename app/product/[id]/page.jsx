"use client"

import { useCart } from "@/app/context/cart"
import MainLayout from "@/app/layout/MainLayout"
import { toast } from 'react-toastify'
import SimilarProducts from '../../components/SimilarProducts'

export default function Product({ params }) {

    const cart = useCart()

    const product =
    {
        id: 1,
        title: "Brown Leather Bag",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis blandit. Lacus vel facilisis volutpat est velit. Maecenas volutpat blandit aliquam etiam erat.",
        url: "https://picsum.photos/id/20",
        price: 2500
    }
    
    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px" mx-auto>
                    <div className="flex px-4 py-10">
                        {product?.url ?
                            <img className="w-[40%] rounded-lg" src={product?.url + '/200'} />
                            :
                            <div className="w-[40%]"></div>
                        }
                        <div className="px-4 w-full">
                            <div className="font-bold text-xl">
                                {product?.title}
                            </div>
                            <div className="text-sm text-gray-700 pt-2">Brand New - Full Warranty</div>
                            <div className="border-b py-1" />
                            <div className="pt-3 pb-2">
                                <div className="flex items-center">
                                    Condition: <span className="font-bold text-[17px] ml-2"> New </span>
                                </div>
                            </div>
                            <div className="border-b py-1" />
                            <div className="pt-3">
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center">
                                        Price:
                                        {product?.price
                                            ? <div className="font-bold text-[20px] ml-2">
                                                US ${(product?.price / 100).toFixed(2)}
                                            </div> : null}
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (cart.isItemAdded) {
                                                cart.removeFromCart(product)
                                                toast.info('Removed from cart', {autoClose: 3000})
                                            }
                                            else {
                                                cart.addToCart(product)
                                                toast.success('Added to cart', {autoClose:3000})
                                            }
                                        }}
                                        className={`bg-[#C70039] text-white py-2 px-20 rounded-md cursor-pointer
                                    ${cart.isItemAdded ? 'bg-orange-400 hover:bg-orange-300': 'bg-[#C70039] hover:bg-[#ba4f6d]' }
                                    `}>
                                        {cart.isItemAdded ? 'Remove From Cart' : 'Add To Cart'}
                                    </button>
                                    </div>
                            </div>
                                    <div className="border-b py-1" />
                                    <div className="pt-3">
                                        <div className="font-semibold pb-1">Description</div>
                                        <div className="text-sm">{product.description}</div>
                                    </div>
                        </div>
                    </div>
                </div>

                <SimilarProducts/>
            </MainLayout>
        </>
   ) 
}