"use client"

import { FoodInCartType, FoodType } from "@/app/types/types";
import { useCartStore } from "@/store/cartstore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Options = ({ food }: { food: FoodType }) => {

    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedQty, setSelectedQty] = useState(1)
    const [total, setTotal] = useState(food.price)

    useEffect(() => {
        if (food.options.length > 0) {
            setTotal((food.price + food.options[selectedSize].extraPrice) * selectedQty)
        }
    }, [selectedQty, selectedSize, food])

    const { addFoodToCart } = useCartStore()

    const handleAddToCart = () => {
        const addedFood: FoodInCartType = {
            id: food.id, title: food.title, image: food.image, quantity: selectedQty, price: total
        }
        addFoodToCart(addedFood)
        toast.success(`${addedFood.title} added`)
    }

    return (
        <div className="">
            <h3 className="mb-4 font-bold text-lg">${total}</h3>
            <div className="flex gap-1">
                {food.options.map((o: any, idx) => (
                    <button key={idx}
                        className={`${selectedSize === idx ? "primary-btn" : "secondary-btn"} `}
                        onClick={() => setSelectedSize(idx)}>
                        {o.title}
                    </button>
                ))}
            </div>
            <div className="flex items-center mt-4">
                <input type="number"
                    className="rounded-lg border-gray-200 p-1 text-lg border-2"
                    value={selectedQty}
                    min={1}
                    onChange={(e: any) => setSelectedQty(e.target.value)}
                />
                <button className="primary-btn" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Options