"use client"

import { useCartStore } from "@/store/cartstore"
import Image from "next/image"
import { CiCircleRemove } from "react-icons/ci"
import { FoodInCartType } from "../types/types"
import { MdDeleteForever } from "react-icons/md"
import toast from "react-hot-toast"
import { useEffect } from "react"
import Empty from "../components/Empty"

const CartPage = () => {

    useEffect(() => {
        useCartStore.persist.rehydrate()
    }, [])

    const { foods, totalPrice, qtyFood, remvoveFoodFromCart, emptyCart } = useCartStore()

    const handleRemove = (food: FoodInCartType) => {
        remvoveFoodFromCart(food)
        toast.success(`${food.title} removed`)
    }

    const renderFoods = () => {
        if (foods.length === 0) {
            return <Empty title="Cart is empty" description="You do not have any food in the cart"/>
        }
        return <>
            {foods.map((food: any) => (
                <div className="flex items-center justify-between mb-4" key={food.id}>
                    <Image src={food.image} alt="" width={100} height={100} />
                    <div className="">
                        <h1 className="uppercase text-xl font-bold">{food.title} X {food.quantity}</h1>
                        <span>Large</span>
                    </div>
                    <h2 className="font-bold">${food.price}</h2>
                    <span className="cursor-pointer" onClick={() => handleRemove(food)}>
                        <CiCircleRemove size={28} />
                    </span>
                </div>
            ))}
            <button className="secondary-btn flex items-center" onClick={() => emptyCart()}>
                <MdDeleteForever size={24} />
                <span>Clear Cart</span>
            </button>
        </>
    }

    return (
        <section className="lg:flex lg:items-center gap-2 items-ce mt-5">
            <div className="lg:w-1/2 p-5">
                {renderFoods()}
            </div>

            <div className="lg:w-1/2 h-56">
                <div className="bg-amber-900/30 rounded-md flex flex-col gap-3 p-5 ">
                    <div className="flex justify-between">
                        <span className="">Subtotal ({qtyFood} items)</span>
                        <span className="">${totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="">Delivery Cost</span>
                        <span className="text-green-500">FREE!</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                        <span className="">TOTAL(INCL. VAT)</span>
                        <span className="font-bold">${totalPrice}</span>
                    </div>
                    <button className="primary-btn w-1/2 self-end">
                        CHECKOUT
                    </button>
                </div>
            </div>
        </section >
    )
}

export default CartPage