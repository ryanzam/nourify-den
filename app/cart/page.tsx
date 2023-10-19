import Image from "next/image"
import { mostPopularFoods } from "../dummydata"
import { CiCircleRemove } from "react-icons/ci"

const CartPage = () => {

    return (
        <section className="lg:flex lg:items-center gap-2 items-ce">
            <div className="lg:w-1/2 p-5">
                {mostPopularFoods.slice(0, 2).map((food: any) => (
                    <div className="flex items-center justify-between mb-4">
                        <Image src={food.image} alt="" width={100} height={100} />
                        <div className="">
                            <h1 className="uppercase text-xl font-bold">{food.title}</h1>
                            <span>Large</span>
                        </div>
                        <h2 className="font-bold">${food.price}</h2>
                        <span className="cursor-pointer">
                            <CiCircleRemove size={24} />
                        </span>
                    </div>
                ))}
            </div>

            <div className="lg:w-1/2">
                <div className="bg-amber-900/30 rounded-md flex flex-col gap-3 p-5 ">
                    <div className="flex justify-between">
                        <span className="">Subtotal (3 items)</span>
                        <span className="">$81.70</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="">Delivery Cost</span>
                        <span className="text-green-500">FREE!</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                        <span className="">TOTAL(INCL. VAT)</span>
                        <span className="font-bold">$81.70</span>
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