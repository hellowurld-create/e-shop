"use client"

import { BiLoader } from 'react-icons/bi'
import ProductComp from './Product'

export default function SimilarProducts() {
    
    const products =[
        {
          id: 1,
          title: "Brown Leather Bag",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis blandit. Lacus vel facilisis volutpat est velit. Maecenas volutpat blandit aliquam etiam erat.",
          url: "https://picsum.photos/id/20",
          price: 2500
        },
        {
          id: 2,
          title: "Nintendo GameCube",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis blandit. Lacus vel facilisis volutpat est velit. Maecenas volutpat blandit aliquam etiam erat.",
          url: "https://picsum.photos/id/13",
          price: 1900
        },
      ]

    return (
        <>
            <div>
                <div className="border-b py-1 max-w-[1200px] mx-auto" />
                <div className="max-w-[1200px] mx-auto">
                    <div className="font-bold text-2xl py-2 mt-4">Similar sponsored items</div>

                    {products.length > 0 ? <div className="grid grid-cols-5 gap-4">
                        {products.map(product => (
                            <ProductComp key ={product.id} product={product} />
                        ))}
                    </div>
                        : <div className='flex items-center justify-center'>
                            <div className='flex items-center justify-center gap-4 font-semibold'>
                                <BiLoader size={30} className='text-orange-500 animate-spin' />
                                Loading Products...
                            </div>
                    </div>
                }

                </div>
            </div>
        </>
    )
}