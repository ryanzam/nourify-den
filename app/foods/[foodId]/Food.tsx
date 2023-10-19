"use client"

import { FoodType } from "@/app/types/types"
import { FC } from "react"
import Image from "next/image"
import Options from "./Options"

interface IFoodProps {
    food: FoodType
}

const Food: FC<IFoodProps> = ({ food }) => {
    return (
        <div className="lg:flex gap-5 mt-5">
            <div className="">
                <Image
                    src={food.image}
                    alt=""
                    className="object-contain"
                    height={600}
                    width={700}
                />
            </div>
            <div className="mt-3 flex flex-col gap-5">
                <h1 className="text-3xl font-bold uppercase">
                    <span>{food.title}</span>
                </h1>
                <p>{food.description}</p>

                <Options food={food}/>
            </div>
        </div>
    )
}

export default Food