"use client"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function CarouselComp () {
    return (
        <div className="m-w-[1200px] mt-3" mx-auto>
            <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src="/images/banner/1.png" alt="banner 1" />
                </div>
                <div>
                    <img src="/images/banner/2.png" alt="banner 2" />
                </div>
                <div>
                    <img src="/images/banner/3.png" alt="banner 3" />
                </div>
            </Carousel>
        </div>
    )
}