"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const carouselItem = [
    {
        id: 1,
        title: "Come",
        image: "https://img.freepik.com/premium-photo/delicious-breakfast-omelette-with-tomato-greens-wooden-table-sandwich_252187-13402.jpg"
    },
    {
        id: 2,
        title: "Enjoy",
        image: "https://img.freepik.com/free-photo/front-view-sweet-pancakes-tower_23-2148654084.jpg?size=626&ext=jpg"
    },
    {
        id: 3,
        title: "Nourify",
        image: "https://img.freepik.com/free-photo/top-view-salmon-rings-cooked-seasoned-with-salt-pepper-lemon-tomatoes-placed-near-salmon_482257-33008.jpg"
    }
]

const Carousel = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const intId = setInterval(() => setCurrent(prev => prev === carouselItem.length - 1 ? 0 : prev + 1),
            3000)
        return () => clearInterval(intId)
    }, [])

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
            <div className="w-full flex-1 relative">
                <Image
                    src={carouselItem[current].image}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex-1 flex items-center justify-center flex-col gap-8 bg-amber-900/80 font-bold">
                <h1 className="text-gray-300 text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
                    {carouselItem[current].title}
                </h1>
                <button className="primary-btn py-4 px-8">Order Now</button>
            </div>
        </div>
    )
}

export default Carousel