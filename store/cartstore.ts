import { FoodInCartType } from "@/app/types/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartState {
    foods: Array<FoodInCartType>,
    qtyFood: number,
    totalPrice: number,
    addFoodToCart: (food: FoodInCartType) => void,
    remvoveFoodFromCart: (food: FoodInCartType) => void,
    emptyCart: () => void
}

export const useCartStore = create<CartState>()(persist((set, get) => ({
    foods: [],
    qtyFood: 0,
    totalPrice: 0,
    addFoodToCart: (food: FoodInCartType) => {

        const foodInCartState = get().foods
        const foodAdded = foodInCartState.find(f => f.id === food.id)
        if (foodAdded) {
            const updatedFoods = foodInCartState.map(f => f.id === foodAdded.id ?
                { ...food, quantity: food.quantity + f.quantity, price: food.price + f.price }
                : food
            )
            set((state) => (
                {
                    foods: updatedFoods,
                    qtyFood: state.qtyFood + food.quantity,
                    totalPrice: state.totalPrice + food.price
                }
            ))
        } else {
            set((state) => ({
                foods: [...state.foods, food],
                qtyFood: state.qtyFood + food.quantity,
                totalPrice: state.totalPrice + food.price
            }))
        }

    },
    remvoveFoodFromCart: (food: FoodInCartType) => set((state: any) => ({
        foods: state.foods.filter((f: FoodInCartType) => f.id !== food.id),
        qtyFood: state.qtyFood - food.quantity,
        totalPrice: state.totalPrice - food.price
    })),
    emptyCart: () => set({
        foods: [],
        qtyFood: 0,
        totalPrice: 0
    })
}), { name: "cartStore" }))