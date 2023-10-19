import { CategoryType } from "../types/types"
import Link from "next/link"

const fetchCategories = async () => {
    const response = await fetch(`${process.env.BASE_URI}/api/categories`)
    return await response.json()
}

const MenuPage = async () => {

    const categories: CategoryType[] = await fetchCategories()

    return (
        <div className="p-4 flex flex-col md:flex-row items-center gap-3">
            {categories.map((cat: CategoryType) => (
                <Link
                    href={`/categories/${cat.category}`}
                    key={cat.id}
                    className="w-full h-1/3 bg-cover p-8 md:h-1/2 border"
                >
                    <div className="w-1/2">
                        <h1 className="uppercase font-bold text-3xl">{cat.title}</h1>
                        <p className="text-sm my-8">{cat.description}</p>
                        <button className="primary-btn">Explore</button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPage