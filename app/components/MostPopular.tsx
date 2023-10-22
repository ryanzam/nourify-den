"use client"

import { useCartStore } from "@/store/cartstore"
import Image from "next/image"
import { FoodInCartType, FoodType } from "../types/types"
import { FC } from "react"
import toast from "react-hot-toast"

interface IMostPopularProps {
    popularFoods: FoodType[]
}

const MostPopular: FC<IMostPopularProps> = ({ popularFoods }) => {

    const { addFoodToCart } = useCartStore()


    const handleAddToCart = (food: FoodInCartType) => {
        addFoodToCart({ id: food.id, title: food.title, image: food.image, quantity: 1, price: food.price })
        toast.success(`${food.title} added`)
    }

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Most Popular</h1>

                <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
                    Check out our most popular dish
                </p>

                <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">

                    {popularFoods.map((food: any) => (
                        <div key={food.id} className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                            <p className="font-medium text-gray-500 uppercase dark:text-gray-300">{food.title}</p>

                            <div className="w-full">
                                <Image src={food.image} alt="" className="object-contain" width={400} height={200} />
                            </div>

                            <p className="text-gray-500 dark:text-gray-300">{food.desc}</p>

                            <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                                ${food.price}
                            </h2>

                            <p className="font-medium text-gray-500 dark:text-gray-300">{food.description}</p>

                            <button className="w-full primary-btn" onClick={() => handleAddToCart(food)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MostPopular