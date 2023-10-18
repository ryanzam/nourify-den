import { mostPopularFoods } from "../dummydata"
import Image from "next/image"

const MostPopular = () => {

    const popularFoods = mostPopularFoods.slice(0, 3)

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Most Popular</h1>

                <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
                    Check out our most popular dish
                </p>

                <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">

                    {popularFoods.map((food: any) => (
                        <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                            <p className="font-medium text-gray-500 uppercase dark:text-gray-300">{food.title}</p>

                            <div className="w-full">
                                <Image src={food.image} alt="" className="object-contain" width={400} height={200} />
                            </div>

                            <p className="text-gray-500 dark:text-gray-300">{food.desc}</p>

                            <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                                ${food.price}
                            </h2>

                            <p className="font-medium text-gray-500 dark:text-gray-300">{food.description}</p>

                            <button className="w-full primary-btn">
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