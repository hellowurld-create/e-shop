"use client"

import Link from "next/link"
import { CiDeliveryTruck } from 'react-icons/ci'
import MainLayout from "../layout/MainLayout"


export default function Orders() {

    const orders = [
        {
            id: 1,
            stripe_id: "1231231234",
            name: "Test",
            city: "Test",
            address: "Test",
            zipcode: "Test",
            country: "Test",
            total: 1299,
            orderItem: [
                {
                    id: 1,
                    title: "Brown Leather Bag",
                    url: "https://picsum.photos/id/20",
                  }
            ]
        }
    ]

    return (
        <>
            <MainLayout>
                <div id="OrdersPage" className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
                    <div className="bg-white w-full p-6 min-h-[150px]">
                        <div className="flex items-center text-xl">
                            <CiDeliveryTruck className="text-green-500" size={35} />
                            <span className="pl-4">Orders</span>
                        </div>

                        {orders.length < 1 ?
                            <div className="flex items-center justify-center">
                                No order records found
                            </div>
                            :
                            null
                    }
                        {orders.map(order => {
                            return (
                            <div key={order?.id} className="text sm pl-[50px]">
                                    <div className="border-b py-1">
                                        <div className="pt-2">
                                            <span className="font-bold mr-2">Stripe ID:</span>
                                            {order?.stripe_id}
                                        </div>
                                        
                                        <div className="pt-2">
                                            <span className="font-bold mr-2">Delivery Address:</span>
                                            {order?.name},{order?.address},{order?.city},{order?.country},{order?.zipcode}
                                        </div>
                                        
                                        <div className="pt-2">
                                            <span className="font-bold mr-2">Delivery Address:</span>
                                            ${order?.total / 100}
                                         </div>

                                         <div className="flex items-center gap-4">
                                            {order.orderItem.map(item => {
                                                return(
                                                    <div className="flex items-center" key={item?.id}>
                                                        <Link href="/" className="py-1 hover:underline text-orange-400 font-bold">
                                                            <img src={item.url + '/120'} alt="image" className="rounded" />
                                                            {item.title}
                                                        </Link>
                                                </div>
                                                )
                                            })}
                                         </div>
                                        
                                    </div>
                            </div>
                        )
                        })}
                    </div>
                </div>
            </MainLayout>
        </>
    )
}