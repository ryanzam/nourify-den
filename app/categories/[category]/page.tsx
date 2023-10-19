import { FoodType } from "@/app/types/types"
import Link from "next/link"
import Image from "next/image"

interface IParams {
    category: string
}

const getFoods = async (category: string) => {
    const response = await fetch(`${process.env.BASE_URI}/api/foods?category=${category}`, {
        cache: "no-store"
    })
    return await response.json()
}

const CategoryPage = async ({ params }: { params: IParams }) => {

    const foods: FoodType[] = await getFoods(params.category)

    return (
        <div className="lg:flex mt-4 gap-5">
            {foods.map((f: FoodType) => (
                <Link className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" 
                    href={`/food/${f.id}`} key={f.id}>
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{f.title}</h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
                    </div>

                    <Image className="object-cover w-full h-48 mt-2"
                        height={200}
                        width={300}
                        src={f.image} alt={f.title} />

                    <div className="flex items-center justify-between px-4 py-2 bg-amber-900">
                        <h1 className="text-lg font-bold text-white">${f.price}</h1>
                        <button className="secondary-btn">Add to cart</button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CategoryPage