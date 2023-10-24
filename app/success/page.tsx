"use client"

import { useCartStore } from "@/store/cartstore";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";
import toast from "react-hot-toast";

const SuccessPage = () => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const paymentintent = searchParams.get("payment_intent");

    const {emptyCart} = useCartStore()

    useEffect(() => {
        function confirmPayment() {
            fetch(`/api/paymentconfirm/${paymentintent}`, {
                method: 'PUT'
            }).then(response => {
                setTimeout(() => {
                    router.push("/orders");
                }, 3000);
                emptyCart()
            }).catch(err => toast.error("Error: " + err.message))
        }
        confirmPayment()
    }, [router, paymentintent])

    return (
        <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
            <div className="flex items-start gap-4">
                <span className="text-green-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </span>

                <div className="flex-1">
                    <strong className="block font-medium text-gray-900">Payment successfull! </strong>
                    <p className="mt-1 text-sm text-gray-700">
                        Payment done. Redirecting to orders page. Please wait.
                    </p>


                </div>
            </div>
        </div>
    )
}

export default SuccessPage