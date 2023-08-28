"use client"

import CarouselComp from "./components/CarouselComp"
import Product from "./components/Product"
import MainLayout from "./layout/MainLayout"

const page = () => {
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
    <MainLayout>
      <CarouselComp />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        <div className="grid grid-cols-5 gap-4">
          {products.map(product => (
            <Product key={ product.id } product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default page
